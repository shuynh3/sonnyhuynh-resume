// Resize originals in photos-src/ to WebP in src/assets/photos/. Keeps the crop
// (aspect ratio is preserved) and drops all metadata, including GPS.
// Usage: npm run images
import { mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SRC = 'photos-src'
const OUT = 'src/assets/photos'
const QUALITY = 80

// Export width per photo (about 2x its displayed width). Others get DEFAULT_WIDTH.
const WIDTHS = { self_portrait: 560 }
const DEFAULT_WIDTH = 1120

await mkdir(OUT, { recursive: true })

for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png|heic|tiff?|webp)$/i.test(file)) continue
  const name = path.parse(file).name
  const out = path.join(OUT, `${name}.webp`)
  const info = await sharp(path.join(SRC, file))
    .rotate() // apply EXIF orientation before the metadata is dropped
    .resize({ width: WIDTHS[name] ?? DEFAULT_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out)
  console.log(`${out}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
}
