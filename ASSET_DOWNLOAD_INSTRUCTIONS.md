# Asset Download Instructions

The following images need to be downloaded from Webflow and placed in `public/images/`:

## Required Assets

### 1. Logo (logo.webp)
- **Source:** Webflow CDN
- **Location:** `public/images/logo.webp`
- **Size:** ~40x40px (used in header and footer)
- **Format:** WebP
- **Download URL from brief:** `https://cdn.prod.website-files.com/688a6f01a64e180bb30b1779/688e9ded4b6503e789fb3e30_0851d561-61ba-42ed-ab48-dc71b80b6fa8_removalai_preview.avif`

### 2. Rocketship Icon (rocketship.webp)
- **Source:** Webflow CDN
- **Location:** `public/images/rocketship.webp`
- **Size:** ~80x80px
- **Format:** WebP
- **Download URL from brief:** `https://cdn.prod.website-files.com/688a6f01a64e180bb30b1779/688e451262096cf3bab078b6_Rocketship-Icon.webp`

### 3. Testimonial Avatar (avatar-placeholder.svg)
- **Source:** Already included as SVG placeholder
- **Location:** `public/images/avatar-placeholder.svg`
- **Note:** Replace with real testimonial image when content is ready

### 4. Arrow Icons
- **Source:** Already included as SVG placeholders
- **Locations:**
  - `public/images/arrow-left.svg`
  - `public/images/arrow-right.svg`

## How to Download

1. Visit each URL in your browser
2. Right-click → "Save image as..."
3. Save to `public/images/` directory in this project

## Alternative: Download via curl

```bash
cd public/images

# Download logo
curl -o logo.webp "https://cdn.prod.website-files.com/688a6f01a64e180bb30b1779/688e9ded4b6503e789fb3e30_0851d561-61ba-42ed-ab48-dc71b80b6fa8_removalai_preview.avif"

# Download rocketship
curl -o rocketship.webp "https://cdn.prod.website-files.com/688a6f01a64e180bb30b1779/688e451262096cf3bab078b6_Rocketship-Icon.webp"
```

## Verification

After downloading, verify all images are present:
```bash
ls -lh public/images/
```

You should see:
- arrow-left.svg
- arrow-right.svg
- avatar-placeholder.svg
- logo.webp
- rocketship.webp
