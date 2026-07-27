from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

W, H = 1200, 630

# --- Background gradient ---
bg = Image.new("RGB", (W, H), (253, 224, 71))  # yellow-400
d = ImageDraw.Draw(bg)

# Neo-brutalism shapes
d.rectangle([0, 0, W, H], fill=(253, 224, 71))
d.rectangle([30, 30, W-30, H-30], fill=(255, 255, 255), outline=(0,0,0), width=6)

# Decorative blocks
d.rectangle([W-140, 40, W-40, 140], fill=(59, 130, 246), outline=(0,0,0), width=4)  # blue
d.rectangle([40, H-120, 140, H-40], fill=(236, 72, 153), outline=(0,0,0), width=4)  # pink

# Dots
for x in [W-80, W-50]:
    for y in [H-80, H-50]:
        d.ellipse([x, y, x+12, y+12], fill=(0,0,0))

# --- Text ---
try:
    font_nama = ImageFont.truetype("C:\\Windows\\Fonts\\impact.ttf", 72)
    font_title = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 40)
    font_sub = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 26)
    font_url = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 20)
except:
    font_nama = ImageFont.load_default()
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_url = ImageFont.load_default()

# Name (yellow badge style)
d.rectangle([60, 60, 60+570, 60+90], fill=(253, 224, 71), outline=(0,0,0), width=5)
d.text((70, 75), "NAUFAL RAKHA PUTRA", fill=(0,0,0), font=font_nama)

# Tagline badge
d.rectangle([60, 175, 60+520, 175+55], fill=(236, 72, 153), outline=(0,0,0), width=4)
d.text((75, 180), "Full Stack, Game & IT Generalist", fill=(0,0,0), font=font_title)

# Location
d.text((60, 260), "Software Developer di Bukittinggi & Malang", fill=(0,0,0), font=font_sub)

# Subtitle
d.text((60, 310), "25+ Proyek · React · Node · Laravel · Kotlin · AI", fill=(80, 80, 80), font=font_sub)

# Divider
y_div = 370
d.rectangle([60, y_div, W-60, y_div+4], fill=(0,0,0))

# Description
desc_lines = [
    "Full-Stack Web, Game, AI & IT Infrastructure",
    "React.js · Next.js · Node.js · Laravel · Kotlin · Python",
    "Cyber Security · MikroTik · Docker · Linux Server",
]
for i, line in enumerate(desc_lines):
    d.text((60, y_div + 15 + i*32), line, fill=(100,100,100), font=font_sub)

# URL
d.text((60, H-60), "naufalrakha.my.id", fill=(0,0,255), font=font_url)

# Save
out = os.path.join("public", "og-image.png")
bg.save(out)
print(f"OG image saved to {out}")
