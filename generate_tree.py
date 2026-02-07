import os
from datetime import datetime

IGNORE_DIRS = {
    "node_modules",
    ".git",
    ".next",
    "dist",
    "build",
    "__pycache__",
    ".venv",
    "venv",
}

OUTPUT_FILE = "tree.md"


def generate_tree(root_path="."):
    lines = []

    for root, dirs, files in os.walk(root_path):
        # szűrés mappákra
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        level = root.replace(root_path, "").count(os.sep)
        indent = "  " * level
        folder = os.path.basename(root) or "."

        lines.append(f"{indent}- 📁 {folder}")

        subindent = "  " * (level + 1)
        for f in sorted(files):
            if f == OUTPUT_FILE:
                continue
            lines.append(f"{subindent}- 📄 {f}")

    return "\n".join(lines)


def main():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    header = f"""# Project Tree

Generated: {now}

Ignored directories:
- node_modules/
- .git/
- .next/
- dist/
- build/
- __pycache__/
- venv/

---
"""

    tree = generate_tree(".")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(header)
        f.write(tree)

    print("✅ tree.md generated")


if __name__ == "__main__":
    main()
