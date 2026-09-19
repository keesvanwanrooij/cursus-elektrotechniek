"""Genereert de PWA-iconen uit code, geen externe SVG-rasterizer nodig.
Draait eenmalig; de output-PNG's worden gecommit, dit script hoeft niet
in de build-pipeline te zitten."""

from PIL import Image, ImageDraw
import os

HIER = os.path.dirname(os.path.abspath(__file__))
ACHTERGROND = (255, 176, 32, 255)   # --accent uit theme.css
BLIKSEM = (26, 18, 6, 255)          # --accent-ink

# Bliksemschicht als polygon op een 100x100 grid, y naar beneden
BOLT = [
    (58, 8), (30, 56), (46, 56), (38, 92),
    (72, 42), (54, 42), (62, 8),
]


def maak_icoon(grootte, afronding_pct, marge_pct, pad):
    """grootte in px, afronding_pct = hoekradius als % van grootte,
    marge_pct = ruimte rond de bliksem als % (groter = kleiner icoon, nodig voor maskable)."""
    img = Image.new("RGBA", (grootte, grootte), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    radius = int(grootte * afronding_pct)
    d.rounded_rectangle([0, 0, grootte - 1, grootte - 1], radius=radius, fill=ACHTERGROND)

    marge = grootte * marge_pct
    schaal = (grootte - 2 * marge) / 100.0
    punten = [(marge + x * schaal, marge + y * schaal) for x, y in BOLT]
    d.polygon(punten, fill=BLIKSEM)

    img.save(os.path.join(HIER, pad))
    print(f"geschreven: {pad} ({grootte}x{grootte})")


maak_icoon(192, 0.20, 0.14, "icon-192.png")
maak_icoon(512, 0.20, 0.14, "icon-512.png")
maak_icoon(512, 0.0, 0.22, "icon-maskable-512.png")   # meer marge, veilige zone voor Android-maskering
maak_icoon(180, 0.20, 0.14, "apple-touch-icon.png")
maak_icoon(32, 0.20, 0.14, "favicon-32.png")



def maak_og_image():
    """1200x630 deelafbeelding voor sociale media en zoekresultaten."""
    from PIL import ImageFont
    b, h = 1200, 630
    img = Image.new("RGBA", (b, h), (15, 18, 22, 255))
    d = ImageDraw.Draw(img)

    def font(namen, grootte):
        for n in namen:
            try:
                return ImageFont.truetype(n, grootte)
            except OSError:
                pass
        return ImageFont.load_default()

    vet = ["C:/Windows/Fonts/segoeuib.ttf", "DejaVuSans-Bold.ttf"]
    normaal = ["C:/Windows/Fonts/segoeui.ttf", "DejaVuSans.ttf"]

    # accentbalk links
    d.rectangle([0, 0, 14, h], fill=ACHTERGROND)

    # icoontegel
    tegel = 190
    x0, y0 = 90, 90
    icoon = Image.new("RGBA", (tegel, tegel), (0, 0, 0, 0))
    di = ImageDraw.Draw(icoon)
    di.rounded_rectangle([0, 0, tegel - 1, tegel - 1], radius=int(tegel * 0.2), fill=ACHTERGROND)
    m = tegel * 0.14
    sc = (tegel - 2 * m) / 100.0
    di.polygon([(m + x * sc, m + y * sc) for x, y in BOLT], fill=BLIKSEM)
    img.alpha_composite(icoon, (x0, y0))

    d.text((90, 320), "Gratis cursus", font=font(vet, 96), fill=(231, 236, 243, 255))
    d.text((90, 420), "elektrotechniek", font=font(vet, 96), fill=ACHTERGROND)
    d.text((90, 545), "Voor beginners  |  12 modules  |  62 lessen  |  Nederlands", font=font(normaal, 34), fill=(149, 163, 180, 255))

    img.convert("RGB").save(os.path.join(HIER, "..", "og-image.png"), optimize=True)
    print("geschreven: og-image.png (1200x630)")


maak_og_image()
print("klaar")
