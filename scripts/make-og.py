#!/usr/bin/env python3
"""Draw og.png (1200x630) and apple-touch-icon.png (180x180) for thealxlabs.

    python3 -m pip install pillow
    python3 scripts/make-og.py

Uses only Pillow. Everything is drawn at 4x and scaled down, which gives
clean anti-aliased edges. Both files are written to the project root.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
GEIST = ROOT / "fonts" / "Geist-Variable.woff2"
GEIST_MONO = ROOT / "fonts" / "GeistMono-Regular.woff2"

INK = "#0A0A0A"
PAPER = "#FFFFFF"
GREY = "#9C9C9C"   # the site's grey on ink
SCALE = 4

# Pillow's basic text layout skips the kerning in Geist's GPOS table, so the
# pairs the line below needs are listed here: Geist Regular, in 1/1000 em.
KERNING = {
    "An": -20, "in": 6, "nd": -12, "de": -10, "ep": -10, "pe": -10,
    "en": -10, "nt": -40, "ab": -8, "To": -80, "or": -10, "ro": -40,
    "on": -10, "to": -16, "bu": -10, "ui": -15, "il": -10, "ld": -6,
    "di": -20, "ng": -12, "na": -10, "at": -50, "ti": -16, "iv": -10,
    "ve": -26, "pr": -10, "ri": -30, "va": -22, "te": -16, "op": -10,
    "so": -10, "ou": -10, "rc": -40, "ce": -10, "oo": -10, "ol": -5,
    "ls": -6,
}


def geist(size, weight):
    font = ImageFont.truetype(str(GEIST), size, layout_engine=ImageFont.Layout.BASIC)
    font.set_variation_by_axes([weight])
    return font


def text(draw, x, baseline, string, font, tracking):
    """Draw one line from its baseline, with kerning and letter-spacing in em."""
    for a, b in zip(string, string[1:] + " "):
        draw.text((x, baseline), a, font=font, fill=PAPER, anchor="ls")
        x += font.getlength(a) + (KERNING.get(a + b, 0) / 1000 + tracking) * font.size


def door(draw, x, y, size):
    """The door in a size x size box: the geometry of the SVG path
    M16 90V48A34 34 0 0 1 84 48V90Z M42 90V60H58V90Z in its 100 x 100 viewBox."""
    unit = size / 100

    def box(x0, y0, x1, y1):  # viewBox units to a Pillow box, which includes its last pixel
        return [round(x + x0 * unit), round(y + y0 * unit),
                round(x + x1 * unit) - 1, round(y + y1 * unit) - 1]

    draw.pieslice(box(16, 14, 84, 82), 180, 360, fill=PAPER)  # the arch: centre (50, 48), radius 34
    draw.rectangle(box(16, 48, 84, 90), fill=PAPER)
    draw.rectangle(box(42, 60, 58, 90), fill=INK)              # the cursor-shaped opening


def canvas(width, height):
    image = Image.new("RGB", (width * SCALE, height * SCALE), INK)
    return image, ImageDraw.Draw(image)


def save(image, name):
    image.reduce(SCALE).save(ROOT / name, optimize=True)
    print("wrote", name)


def og_image():
    # A big door standing on the bottom edge, with the line and the address beside it.
    width, height, margin = 1200, 630, 80
    image, draw = canvas(width, height)
    left = margin * SCALE

    # The door, bottom right. Its glyph (x 16-84, y 14-90 of the box) is 470px
    # tall and its base sits on the bottom edge, so the opening meets the ground.
    box = 470 / 0.76 * SCALE
    door(draw, (width - margin) * SCALE - 0.84 * box, height * SCALE - 0.9 * box, box)

    # The line, top left, its cap height on the top margin.
    regular = geist(44 * SCALE, 400)
    baseline = margin * SCALE + 0.71 * regular.size
    for line in ("An independent lab in", "Toronto building native,", "private, open-source tools."):
        text(draw, left, baseline, line, regular, -0.01)
        baseline += 1.25 * regular.size

    # The address, bottom left, its baseline on the bottom margin.
    mono = ImageFont.truetype(str(GEIST_MONO), 24 * SCALE, layout_engine=ImageFont.Layout.BASIC)
    draw.text((left, (height - margin) * SCALE), "thealxlabs.ca", font=mono, fill=GREY, anchor="ls")

    save(image, "og.png")


def touch_icon():
    # Full-bleed square: iOS rounds the corners itself, at about 22%.
    side = 180
    image, draw = canvas(side, side)
    size = 0.6 * side                 # the door's viewBox at 60%
    x = (side - size) / 2
    y = side / 2 - 0.52 * size        # centre the glyph (y 14-90), not its viewBox
    door(draw, x * SCALE, y * SCALE, size * SCALE)
    save(image, "apple-touch-icon.png")


if __name__ == "__main__":
    og_image()
    touch_icon()
