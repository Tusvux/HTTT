# TGMT Dream Prediction Backend

Backend Python tối giản để frontend gọi model `.pkl` thật.

Backend load model từ `F:\TGMT\tu\dream_prediction\models`.

## Chạy backend

```bash
cd F:\TGMT\apps\backend
python server.py
```

API:

```text
GET  http://127.0.0.1:8000/health
POST http://127.0.0.1:8000/api/predict
```

Payload mẫu:

```json
{
  "tuoi": 32,
  "gio_ngu": 7.5,
  "muc_stress": 4,
  "caffeine": 1,
  "phut_tap_luyen": 45,
  "chat_luong_ngu": 7,
  "thoi_gian_man_hinh": 2
}
```
