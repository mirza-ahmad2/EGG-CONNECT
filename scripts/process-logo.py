from PIL import Image
import os

src = r"C:\Users\Arslan\.cursor\projects\h-involiq-projects-EGG-Connect\assets\c__Users_Arslan_AppData_Roaming_Cursor_User_workspaceStorage_96d3c621cfd1d570a179e68624ed3712_images_1782040944565-93fc28f9-a168-4865-bca7-16cbb9842092.png"
out_dir = r"H:\involiq projects\EGG Connect\src\assets"
pub_dir = r"H:\involiq projects\EGG Connect\public"

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

samples = [
    pixels[2, 2],
    pixels[w - 3, 2],
    pixels[2, h - 3],
    pixels[w - 3, h - 3],
    pixels[w // 2, 2],
    pixels[w // 2, h - 3],
]
br = sum(p[0] for p in samples) / len(samples)
bg = sum(p[1] for p in samples) / len(samples)
bb = sum(p[2] for p in samples) / len(samples)
print(f"bg approx: {(br, bg, bb)} size={w}x{h}")

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        dist = ((r - br) ** 2 + (g - bg) ** 2 + (b - bb) ** 2) ** 0.5
        brightness = (r + g + b) / 3
        cyan = b + g - r
        if dist < 18 and brightness < 40:
            pixels[x, y] = (r, g, b, 0)
        elif dist < 45 and brightness < 55 and cyan < 40:
            alpha = int(max(0, min(255, (dist - 18) / 27 * 255)))
            pixels[x, y] = (r, g, b, alpha)
        else:
            pixels[x, y] = (r, g, b, 255)

bbox = img.getbbox()
if bbox:
    pad = 24
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad)
    bottom = min(h, bbox[3] + pad)
    img = img.crop((left, top, right, bottom))

os.makedirs(out_dir, exist_ok=True)
os.makedirs(pub_dir, exist_ok=True)

logo_path = os.path.join(out_dir, "egg-logo.png")
img.save(logo_path, "PNG", optimize=True)
print("saved", logo_path, img.size)

img.save(os.path.join(pub_dir, "egg-logo.png"), "PNG", optimize=True)

bw, bh = img.size
mark = img.crop((0, 0, bw, int(bh * 0.58)))
side = max(mark.size)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
ox = (side - mark.size[0]) // 2
oy = (side - mark.size[1]) // 2
square.paste(mark, (ox, oy), mark)

for size, name in [
    (32, "favicon-32x32.png"),
    (16, "favicon-16x16.png"),
    (180, "apple-touch-icon.png"),
    (192, "android-chrome-192x192.png"),
    (512, "android-chrome-512x512.png"),
]:
    resized = square.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(os.path.join(pub_dir, name), "PNG", optimize=True)
    print("saved", name)

ico32 = square.resize((32, 32), Image.Resampling.LANCZOS)
ico32.save(os.path.join(pub_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print("saved favicon.ico")

og = Image.new("RGBA", (1200, 630), (10, 12, 16, 255))
max_w, max_h = 720, 360
ratio = min(max_w / img.size[0], max_h / img.size[1])
lw, lh = int(img.size[0] * ratio), int(img.size[1] * ratio)
logo_og = img.resize((lw, lh), Image.Resampling.LANCZOS)
og.paste(logo_og, ((1200 - lw) // 2, (630 - lh) // 2), logo_og)
og.convert("RGB").save(os.path.join(pub_dir, "og-image.jpg"), "JPEG", quality=90)
print("saved og-image.jpg")
print("done")
