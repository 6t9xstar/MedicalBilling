#!/usr/bin/env python3
"""
Generate themed OG images for Apex Precision Billing.

Each image is 1200x630, branded with the page name and tagline, and visually
distinct. We keep file size small (~30-60KB each, JPEG q=80) so they load fast
when shared on social.

Output: replaces the identical placeholders in public/og/*.jpg.
"""
from __future__ import annotations
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

# --- Brand palette (read from globals.css variable names) ---
BRAND_PRIMARY = (13, 27, 74)        # #0d1b4a (deep navy)
BRAND_PRIMARY_DARK = (7, 17, 47)    # ~darker
BRAND_ACCENT_GOLD = (201, 162, 79)   # warm gold accent
BRAND_BG_BLUE = (240, 247, 255)     # soft sky
BRAND_BG_TINT = (244, 250, 254)
BRAND_WHITE = (255, 255, 255)
BRAND_TEXT_MUTE = (90, 110, 140)
BRAND_OVERLAY = (11, 27, 74, 178)   # navy overlay alpha

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "og")
OUT_DIR = os.path.normpath(OUT_DIR)
WIDTH, HEIGHT = 1200, 630

PAGES = [
    ("home",        "Precision in Every Claim",    "Medical billing & RCM support",            ( 13, 27, 74)),
    ("about",       "Built on operational clarity",  "Specialty-aware billing workflow support", ( 35, 65, 130)),
    ("services",    "End-to-end revenue cycle",     "Billing, coding, AR, denials & enrollment",( 18, 84, 158)),
    ("specialties", "Specialty-aware coverage",     "40+ practice types supported",             ( 33, 110, 130)),
    ("pricing",     "Clear engagement models",      "Quotes built around workflow priorities",  ( 76, 90, 130)),
    ("contact",     "Start a clearer conversation", "Form, phone, or email — your choice",      ( 13, 27, 74)),
    ("faq",         "Answers, with context",        "How Apex frames services and outcomes",     ( 90, 80, 130)),
    ("facility",    "Operational backbone",         "Reporting, oversight, and accountability",  ( 11, 60, 100)),
    ("for-you",     "Scenarios built for you",      "Match your practice profile to the next step",(70, 50, 110)),
    ("default",     "Apex Precision Billing",       "Medical billing & RCM support",            ( 13, 27, 74)),
]


def find_font(weight: str = "bold", size: int = 80) -> ImageFont.FreeTypeFont:
    candidates: list[str] = []
    if weight == "bold":
        candidates += [
            r"C:\Windows\Fonts\segoeuib.ttf",
            r"C:\Windows\Fonts\arialbd.ttf",
            r"C:\Windows\Fonts\calibrib.ttf",
            r"/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            r"/Library/Fonts/Arial Bold.ttf",
        ]
    else:
        candidates += [
            r"C:\Windows\Fonts\segoeui.ttf",
            r"C:\Windows\Fonts\arial.ttf",
            r"C:\Windows\Fonts\calibri.ttf",
            r"/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            r"/Library/Fonts/Arial.ttf",
        ]
    for path in candidates:
        if os.path.isfile(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def gradient_bg(width: int, height: int, base: tuple[int, int, int]) -> Image.Image:
    """Diagonal gradient from base to a darker shade."""
    r0, g0, b0 = base
    # blend toward dark navy bottom-right
    r1, g1, b1 = max(r0 - 18, 0), max(g0 - 14, 0), max(b0 + 6, 255)
    img = Image.new("RGB", (width, height), base)
    px = img.load()
    for y in range(height):
        ratio = y / max(height - 1, 1)
        for x in range(width):
            diag = (x + y) / (width + height - 2)
            blend = 0.55 * diag + 0.45 * ratio
            r = int(r0 * (1 - blend) + r1 * blend)
            g = int(g0 * (1 - blend) + g1 * blend)
            b = int(b0 * (1 - blend) + b1 * blend)
            px[x, y] = (r, g, b)
    return img


def add_grid(img: Image.Image, color: tuple[int, int, int], alpha: int = 26) -> Image.Image:
    """Light blueprint grid overlay for visual texture."""
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    step = 36
    for x in range(0, img.width, step):
        draw.line([(x, 0), (x, img.height)], fill=(*color, alpha), width=1)
    for y in range(0, img.height, step):
        draw.line([(0, y), (img.width, y)], fill=(*color, alpha), width=1)
    return Image.alpha_composite(img.convert("RGBA"), overlay)


def add_blobs(img: Image.Image) -> Image.Image:
    """Add a couple of soft accent blobs for depth."""
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    # Gold blob
    draw.ellipse([840, -120, 1340, 380], fill=(*BRAND_ACCENT_GOLD, 110))
    # Soft white blob
    draw.ellipse([-160, 360, 360, 880], fill=(255, 255, 255, 56))
    overlay = overlay.filter(ImageFilter.GaussianBlur(80))
    return Image.alpha_composite(img.convert("RGBA"), overlay)


def add_card(img: Image.Image) -> Image.Image:
    """Add a faint white card behind text to keep contrast clean."""
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    # left-aligned vertical bar accent
    draw.rectangle([60, 110, 92, 540], fill=(*BRAND_ACCENT_GOLD, 255))
    overlay = Image.alpha_composite(img.convert("RGBA"), overlay)
    return overlay


def draw_brand(draw: ImageDraw.ImageDraw, y: int = 40) -> None:
    f_brand = find_font("bold", 26)
    f_brand_light = find_font("regular", 22)
    # Top-left: brand wordmark
    draw.text((112, y), "Apex Precision Billing", font=f_brand, fill=BRAND_WHITE)
    # Top-right: tiny URL
    bbox = draw.textbbox((0, 0), "apexprecisionbilling.com", font=f_brand_light)
    w = bbox[2] - bbox[0]
    draw.text((WIDTH - w - 112, y + 4), "apexprecisionbilling.com",
              font=f_brand_light, fill=(255, 255, 255, 220))


def draw_text(
    draw: ImageDraw.ImageDraw,
    title: str,
    subtitle: str,
) -> None:
    f_title = find_font("bold", 78)
    f_sub = find_font("regular", 30)
    # Title
    draw.text((130, 210), title, font=f_title, fill=BRAND_WHITE)
    # Subtitle
    draw.text((130, 340), subtitle, font=f_sub, fill=(255, 255, 255, 230))
    # Single-line CTA pill
    pill_y = 460
    pill_x0, pill_x1 = 130, 580
    draw.rounded_rectangle(
        [pill_x0, pill_y, pill_x1, pill_y + 62],
        radius=31,
        fill=(*BRAND_ACCENT_GOLD, 230),
    )
    cta = "Precision in Every Claim"
    bbox = draw.textbbox((0, 0), cta, font=find_font("bold", 26))
    text_w = bbox[2] - bbox[0]
    pill_w = pill_x1 - pill_x0
    draw.text(
        (pill_x0 + (pill_w - text_w) / 2, pill_y + 18),
        cta,
        font=find_font("bold", 26),
        fill=(13, 27, 74),
    )


def draw_footer(draw: ImageDraw.ImageDraw) -> None:
    f = find_font("regular", 18)
    draw.text(
        (112, 560),
        "Specialty-aware medical billing, RCM, coding & RCM support for physician practices.",
        font=f,
        fill=(255, 255, 255, 190),
    )


def render(slug: str, title: str, subtitle: str, base: tuple[int, int, int]) -> None:
    img = gradient_bg(WIDTH, HEIGHT, base)
    img = add_grid(img, (255, 255, 255))
    img = add_blobs(img)
    img = add_card(img)
    draw = ImageDraw.Draw(img)
    draw_brand(draw)
    draw_text(draw, title, subtitle)
    draw_footer(draw)

    # Convert to RGB for JPEG
    rgb = img.convert("RGB")
    out_path = os.path.join(OUT_DIR, f"{slug}.jpg")
    rgb.save(out_path, "JPEG", quality=80, optimize=True, progressive=True)
    size_kb = os.path.getsize(out_path) / 1024
    print(f"[ok] {slug}.jpg  {size_kb:.1f}KB  ({title!r})")


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    for slug, title, subtitle, base in PAGES:
        render(slug, title, subtitle, base)


if __name__ == "__main__":
    main()
