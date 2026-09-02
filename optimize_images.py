#!/usr/bin/env python3
from pathlib import Path
import shutil
import re
import sys

try:
    from PIL import Image
except ImportError:
    print("[ERROR] Pillow is not installed.")
    print("Run: python3 -m pip install pillow")
    sys.exit(1)

# =============================
# CONFIG
# =============================
ROOT = Path.cwd()
IMAGES_DIR = ROOT / "images"
BACKUP_DIR = ROOT / "images_backup_original"

MAX_WIDTH_CASE = 2800
MAX_WIDTH_THUMB = 1920
LOSSY_QUALITY = 94
WEBP_METHOD = 6

# Files containing these words are treated as thumbnails/covers.
THUMB_KEYWORDS = ("cover", "thumb", "thumbnail", "hero")

SUPPORTED = {".png", ".jpg", ".jpeg"}
TEXT_FILES = {".js", ".html", ".css", ".json", ".md"}


def human_size(num):
    units = ["B", "KB", "MB", "GB"]
    size = float(num)
    for unit in units:
        if size < 1024 or unit == units[-1]:
            return f"{size:.2f} {unit}"
        size /= 1024


def dir_size(path: Path):
    return sum(p.stat().st_size for p in path.rglob("*") if p.is_file())


def has_alpha(img: Image.Image) -> bool:
    if img.mode in ("RGBA", "LA"):
        return True
    if img.mode == "P" and "transparency" in img.info:
        return True
    return False


def target_width(path: Path):
    name = path.stem.lower()
    if any(k in name for k in THUMB_KEYWORDS):
        return MAX_WIDTH_THUMB
    return MAX_WIDTH_CASE


def resize_keep_ratio(img: Image.Image, max_width: int):
    if img.width <= max_width:
        return img
    new_height = round(img.height * max_width / img.width)
    return img.resize((max_width, new_height), Image.Resampling.LANCZOS)


def convert_one(src: Path):
    dst = src.with_suffix(".webp")

    with Image.open(src) as img:
        img.load()
        alpha = has_alpha(img)
        max_w = target_width(src)
        img = resize_keep_ratio(img, max_w)

        # Preserve transparency for PNGs with alpha.
        if alpha:
            if img.mode != "RGBA":
                img = img.convert("RGBA")
            img.save(
                dst,
                "WEBP",
                lossless=True,
                method=WEBP_METHOD,
                exact=True,
            )
            mode = "lossless + alpha"
        else:
            # RGB is safest for lossy WebP.
            if img.mode not in ("RGB", "L"):
                img = img.convert("RGB")
            elif img.mode == "L":
                img = img.convert("RGB")

            img.save(
                dst,
                "WEBP",
                quality=LOSSY_QUALITY,
                method=WEBP_METHOD,
            )
            mode = f"quality {LOSSY_QUALITY}"

    old_size = src.stat().st_size
    new_size = dst.stat().st_size
    return dst, old_size, new_size, mode


def replace_paths(mapping):
    # Replace relative references in common project text/code files.
    changed_files = []
    for file in ROOT.rglob("*"):
        if not file.is_file():
            continue
        if BACKUP_DIR in file.parents:
            continue
        if file.suffix.lower() not in TEXT_FILES:
            continue

        try:
            text = file.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue

        original = text
        for old_rel, new_rel in mapping.items():
            # Handle normal slash paths.
            text = text.replace(old_rel, new_rel)
            # Handle URL-encoded spaces only if present in project source.
            text = text.replace(old_rel.replace(" ", "%20"), new_rel.replace(" ", "%20"))

        if text != original:
            file.write_text(text, encoding="utf-8")
            changed_files.append(file.relative_to(ROOT))

    return changed_files


def main():
    if not IMAGES_DIR.exists():
        print(f"[ERROR] Cannot find: {IMAGES_DIR}")
        print("Put this script in the ROOT of your portfolio, next to script.js and images/.")
        sys.exit(1)

    originals = [p for p in IMAGES_DIR.rglob("*") if p.is_file() and p.suffix.lower() in SUPPORTED]
    if not originals:
        print("No PNG/JPG/JPEG files found in images/.")
        return

    before = dir_size(IMAGES_DIR)
    print("=" * 68)
    print("THANG PORTFOLIO IMAGE OPTIMIZER")
    print("=" * 68)
    print(f"Project root : {ROOT}")
    print(f"Images found : {len(originals)}")
    print(f"Images size  : {human_size(before)}")
    print()

    if BACKUP_DIR.exists():
        print(f"[STOP] Backup already exists: {BACKUP_DIR}")
        print("This is intentional so the script never overwrites your original backup.")
        print("Rename/delete that backup only if you intentionally want to run from a new source set.")
        sys.exit(1)

    print("Creating untouched backup...")
    shutil.copytree(IMAGES_DIR, BACKUP_DIR)
    print(f"Backup: {BACKUP_DIR.name}/")
    print()

    mapping = {}
    converted = []
    failures = []

    for src in originals:
        try:
            dst, old_size, new_size, mode = convert_one(src)
            old_rel = src.relative_to(ROOT).as_posix()
            new_rel = dst.relative_to(ROOT).as_posix()
            mapping[old_rel] = new_rel
            converted.append((src, dst, old_size, new_size, mode))
            saved = old_size - new_size
            pct = (saved / old_size * 100) if old_size else 0
            print(f"[OK] {old_rel}")
            print(f"     {human_size(old_size)} -> {human_size(new_size)}  ({pct:.1f}% smaller, {mode})")
        except Exception as e:
            failures.append((src, str(e)))
            print(f"[FAIL] {src.relative_to(ROOT)}: {e}")

    print()
    print("Updating paths in JS / HTML / CSS / JSON / Markdown...")
    changed = replace_paths(mapping)
    for f in changed:
        print(f"[PATH] {f}")

    # Delete original PNG/JPG/JPEG only after successful conversion.
    for src, dst, *_ in converted:
        if dst.exists():
            src.unlink()

    after = dir_size(IMAGES_DIR)
    saved = before - after
    pct = (saved / before * 100) if before else 0

    print()
    print("=" * 68)
    print("DONE")
    print("=" * 68)
    print(f"Before        : {human_size(before)}")
    print(f"After         : {human_size(after)}")
    print(f"Saved         : {human_size(saved)} ({pct:.1f}%)")
    print(f"Original copy : {BACKUP_DIR}")

    if failures:
        print()
        print(f"WARNING: {len(failures)} image(s) failed and were NOT deleted:")
        for src, err in failures:
            print(f"- {src.relative_to(ROOT)}: {err}")

    print()
    print("NEXT:")
    print("1. Start Live Server and check Home / Projects / Case Study.")
    print("2. If everything looks good, DO NOT commit images_backup_original/.")
    print("3. The provided .gitignore snippet below can exclude the backup.")
    print()
    print("Add this line to .gitignore if it is not already there:")
    print("images_backup_original/")


if __name__ == "__main__":
    main()
