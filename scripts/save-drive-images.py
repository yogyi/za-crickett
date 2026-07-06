#!/usr/bin/env python3
"""Decode base64 image payloads exported from browser Drive fetch."""
import base64
import json
import os
import sys

def main():
    if len(sys.argv) < 3:
        print("Usage: save-drive-images.py <json-file> <output-dir>")
        sys.exit(1)
    with open(sys.argv[1]) as f:
        data = json.load(f)
    out_dir = sys.argv[2]
    os.makedirs(out_dir, exist_ok=True)
    items = data["result"]["value"]
    for name, info in items.items():
        out = os.path.join(out_dir, f"{name}.jpg")
        with open(out, "wb") as img:
            img.write(base64.b64decode(info["b64"]))
        print(f"Saved {out} ({info.get('size')} bytes)")

if __name__ == "__main__":
    main()
