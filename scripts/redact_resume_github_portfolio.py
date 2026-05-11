"""One-off: remove ' | GitHub / Portfolio' from header of Kelley_Groves_Resume.pdf via redaction."""

import shutil
import sys
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "public" / "Kelley_Groves_Resume.pdf"


def main() -> None:
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else PDF
    if not path.is_file():
        print("Missing:", path, file=sys.stderr)
        sys.exit(1)

    shutil.copy2(path, path.with_suffix(".pdf.bak"))

    doc = fitz.open(path)
    for page in doc:
        rects = page.search_for(" | GitHub / Portfolio")
        if not rects:
            rects = page.search_for("GitHub / Portfolio")
        for rect in rects:
            page.add_redact_annot(rect, fill=(1, 1, 1))
        page.apply_redactions()

    tmp = path.with_name(path.stem + "_tmp.pdf")
    doc.save(tmp, garbage=4, deflate=True)
    doc.close()
    tmp.replace(path)
    print("Updated:", path)


if __name__ == "__main__":
    main()
