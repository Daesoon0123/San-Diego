import os

from dotenv import load_dotenv
from flask import Flask, jsonify, send_from_directory
import psycopg2
from psycopg2.extras import RealDictCursor

load_dotenv()

DATABASE_URL = os.environ["DATABASE_URL"]

app = Flask(__name__, static_folder=".", static_url_path="")


def get_connection():
    return psycopg2.connect(DATABASE_URL, sslmode="require")


@app.get("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.get("/api/health")
def health():
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT 1;")
            cur.fetchone()
    return jsonify({"status": "ok", "db": "connected"})


@app.get("/api/users")
def list_users():
    with get_connection() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT id, email, name FROM users ORDER BY id;")
            rows = cur.fetchall()
    return jsonify(rows)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
