from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class Utf8Handler(SimpleHTTPRequestHandler):
    def guess_type(self, path):
        if path.endswith(".html"):
            return "text/html; charset=utf-8"
        if path.endswith(".css"):
            return "text/css; charset=utf-8"
        if path.endswith(".js"):
            return "application/javascript; charset=utf-8"
        return super().guess_type(path)


if __name__ == "__main__":
    frontend_dir = Path(__file__).resolve().parent
    handler = partial(Utf8Handler, directory=str(frontend_dir))
    server = ThreadingHTTPServer(("127.0.0.1", 5174), handler)
    print("Serving on http://127.0.0.1:5174")
    server.serve_forever()
