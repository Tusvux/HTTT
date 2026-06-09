import json
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

import joblib
import pandas as pd

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

ROOT = Path(__file__).resolve().parents[2]
MODEL_DIR = ROOT / "tu" / "dream_prediction" / "models"
MODEL_PATH = MODEL_DIR / "mo_hinh_tot_nhat_vn.pkl"
SCALER_PATH = MODEL_DIR / "scaler_vn.pkl"
FEATURES_PATH = MODEL_DIR / "ten_dac_trung_vn.pkl"

LABELS = {
    0: "Ác mộng",
    1: "Mơ đẹp",
    2: "Ngủ sâu",
    3: "Không mơ",
}

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)
features = joblib.load(FEATURES_PATH)


def json_response(handler, status, payload):
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


class ApiHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        if self.path == "/health":
            json_response(
                self,
                200,
                {
                    "ok": True,
                    "model": type(model).__name__,
                    "features": features,
                    "classes": [int(item) for item in model.classes_],
                },
            )
            return

        json_response(self, 404, {"ok": False, "error": "Not found"})

    def do_POST(self):
        if self.path != "/api/predict":
            json_response(self, 404, {"ok": False, "error": "Not found"})
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length).decode("utf-8")
            payload = json.loads(raw)

            row = {feature: float(payload[feature]) for feature in features}
            frame = pd.DataFrame([row], columns=features)
            scaled = scaler.transform(frame)
            prediction = int(model.predict(scaled)[0])

            probabilities = [0.0] * len(LABELS)
            if hasattr(model, "predict_proba"):
                raw_probs = model.predict_proba(scaled)[0]
                for class_id, probability in zip(model.classes_, raw_probs):
                    probabilities[int(class_id)] = float(probability)

            json_response(
                self,
                200,
                {
                    "ok": True,
                    "prediction": prediction,
                    "label": LABELS[prediction],
                    "probabilities": probabilities,
                    "source": "model",
                },
            )
        except KeyError as exc:
            json_response(self, 400, {"ok": False, "error": f"Missing field: {exc}"})
        except Exception as exc:
            json_response(self, 500, {"ok": False, "error": str(exc)})


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 8000), ApiHandler)
    print("Backend API running at http://127.0.0.1:8000")
    print("Health check: http://127.0.0.1:8000/health")
    server.serve_forever()

