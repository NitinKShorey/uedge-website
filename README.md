# Uedge.ai - Next.js Migration

This is a complete rebuild of uedge.ai from Webflow to Next.js + Vercel with Web3Forms integration.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add Web3Forms API key to .env.local
# Get free key at web3forms.com
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here

# 3. Run locally
npm run dev
# Open http://localhost:3000
```

## 📋 What's Included

### ✅ Complete Site Sections
- Hero with logo, headline, CTA
- AI Solutions section with icon
- Rotating words animation
- 3 feature cards
- Testimonials carousel
- Contact form with Web3Forms
- Footer with social links

### ✅ Production Ready
- Responsive design (mobile, tablet, desktop)
- CSS Modules (no conflicts)
- Form validation & submission
- Smooth animations
- Accessibility features
- SEO-friendly structure

### ✅ Documentation
- `QUICK_START.md` - 5-step setup
- `SETUP.md` - Detailed installation
- `DEPLOYMENT_CHECKLIST.md` - Step-by-step deployment
- `COMPONENTS_GUIDE.md` - Component documentation
- `ASSET_DOWNLOAD_INSTRUCTIONS.md` - How to get images

## 🔴 Before Launch (Critical)

1. **Testimonials** - Currently Lorem ipsum placeholder
   - Replace with real testimonials in `components/Testimonials.tsx`
   - Or get sign-off to launch with placeholders

2. **Instagram Link** - Currently generic (instagram.com)
   - Update to actual company profile in `components/Footer.tsx`

3. **Tracking Scripts** - Add any tracking from Webflow
   - Check Webflow Site Settings → Custom Code
   - Add to `app/layout.tsx` if found

## 📁 File Structure

```
├── app/
│   ├── layout.tsx        (Add tracking scripts here)
│   ├── page.tsx          (Main page - imports components)
│   └── globals.css       (Global styles)
├── components/           (All React components)
│   ├── Hero.tsx
│   ├── AISection.tsx
│   ├── RotatingWords.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx  (⚠️ Replace Lorem ipsum)
│   ├── ContactForm.tsx   (Uses Web3Forms)
│   └── Footer.tsx        (⚠️ Update Instagram link)
├── public/images/        (Add Webflow images here)
│   ├── logo.webp         (Need to download)
│   ├── rocketship.webp   (Need to download)
│   └── arrow-*.svg       (Included)
├── .env.local            (Add Web3Forms key)
└── vercel.json           (Vercel config)
```

## 🌐 Deployment Steps

1. **Local setup** - Follow "Quick Start" above
2. **Add images** - Download from Webflow CDN → `public/images/`
3. **Fix critical items** - Testimonials, Instagram link, tracking scripts
4. **Git & push** - Initialize repo, push to GitHub
5. **Deploy to Vercel** - Import from GitHub → deploy
6. **Add domain** - Point uedge.ai DNS at Vercel
7. **Test live** - Verify form, all sections, mobile
8. **Cancel Webflow** - After 24-48 hours of stability

See `DEPLOYMENT_CHECKLIST.md` for detailed steps.

## 🛠️ Customization

### Change Heading Text
Edit components/Hero.tsx, AISection.tsx, etc. — look for `<h1>`, `<h2>` tags

### Replace Testimonials
Edit `components/Testimonials.tsx` line ~9-20 → update `testimonials` array

### Update Instagram Link
Edit `components/Footer.tsx` line ~38 → change href

### Add Form Fields
Edit `components/ContactForm.tsx` → add fields to form, update state, update submission

### Change Colors
Edit `.module.css` files → search for `#0066cc` (primary blue), `#1a1a1a` (black), etc.

### Add Tracking Scripts
Edit `app/layout.tsx` → add `<script>` tags in `<head>` section

## 🔌 Web3Forms Setup

1. Go to [web3forms.com](https://web3forms.com)
2. Sign up (free, no card required)
3. Generate access key (250 submissions/month)
4. Add to `.env.local`: `NEXT_PUBLIC_WEB3FORMS_KEY=your_key`
5. Test by submitting form locally

## 📊 Key Features

- **Zero backend** - Form submission via Web3Forms API
- **No dependencies** - Only React + Next.js
- **Fast** - All static, deployed on Vercel CDN
- **Responsive** - Works on all devices
- **Accessible** - ARIA labels, semantic HTML
- **SEO-ready** - Next.js meta tags, structured markup

## 📈 Performance

- **Lighthouse Score** - Aim for 90+ (after image optimization)
- **Page Load** - <2 seconds (Vercel CDN)
- **Form Submission** - <1 second (Web3Forms)
- **Animations** - 60fps (CSS-based)

## 🚨 Troubleshooting

### Form not sending?
- Check Web3Forms key in `.env.local`
- Verify Vercel env var matches
- Test at web3forms.com/api-docs

### Images not showing?
- Verify files in `public/images/`
- Check file names match imports
- Clear browser cache

### DNS not working?
- Use nslookup.io to check propagation
- Allow up to 24 hours
- Verify DNS records entered correctly

See `DEPLOYMENT_CHECKLIST.md` for more troubleshooting.

## 📞 Support

- Check documentation files first
- Common issues in DEPLOYMENT_CHECKLIST.md
- Component details in COMPONENTS_GUIDE.md
- Setup details in SETUP.md

## 💰 Cost Savings

- **Before:** $18/month Webflow
- **After:** $0/month (Vercel free tier)
- **Annual savings:** $216

Plus: Better performance, more control, easier to update.

## 📝 License

© uedge AI transformation partner 2025

---

**Ready to deploy?** Start with `QUICK_START.md` or `DEPLOYMENT_CHECKLIST.md`
