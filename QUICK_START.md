# Quick Start Guide

## 1. Install & Run Locally (5 minutes)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Add Web3Forms API Key (2 minutes)

1. Sign up free at [web3forms.com](https://web3forms.com)
2. Generate access key (250 submissions/month free)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
   ```

## 3. Download Images from Webflow (10 minutes)

Download these from Webflow CDN and place in `public/images/`:

- `logo.webp` - Hero & footer logo
- `rocketship.webp` - AI Solutions icon

See `ASSET_DOWNLOAD_INSTRUCTIONS.md` for download URLs.

## 4. Fix Before Launch

### 🔴 Required:
1. **Testimonials** - Replace Lorem ipsum or get sign-off
2. **Instagram link** - Update footer to actual company profile
3. **Tracking scripts** - Check Webflow Site Settings → Custom Code, add to `app/layout.tsx`

### ✅ How to fix:
- **Testimonials:** Edit `components/Testimonials.tsx`
- **Instagram:** Edit `components/Footer.tsx`
- **Tracking:** Edit `app/layout.tsx` → add scripts in `<head>`

## 5. Deploy to Vercel (10 minutes)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/you/uedge.git
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Import repository
3. Add env var: `NEXT_PUBLIC_WEB3FORMS_KEY`
4. Deploy
5. Add custom domains: `uedge.ai` + `www.uedge.ai`

## 6. Point DNS at Vercel (varies)

1. Copy DNS records from Vercel
2. Update records in Webflow domain settings (or wherever DNS is managed)
3. Wait up to 24 hours for propagation
4. Test at https://uedge.ai

## 7. Test Form & Cancel Webflow (5 minutes)

1. Submit test message on live site
2. Verify it arrives in Web3Forms dashboard
3. Wait 24-48 hours to confirm stability
4. Cancel Webflow subscription in account settings

---

## File Structure

```
uedge/
├── app/
│   ├── layout.tsx          ← Add tracking scripts here
│   ├── page.tsx            ← Main page
│   └── globals.css         ← Global styles
├── components/             ← All React components
│   ├── Hero.tsx
│   ├── AISection.tsx
│   ├── RotatingWords.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx    ← Replace Lorem ipsum here
│   ├── ContactForm.tsx
│   └── Footer.tsx          ← Update Instagram link here
├── public/images/          ← Add Webflow images here
├── lib/utils.ts            ← Helper functions
├── .env.local              ← Add Web3Forms key here
└── package.json
```

## Common Tasks

### Add tracking script (Google Analytics)
Edit `app/layout.tsx` → add to `<head>`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  {`window.dataLayer = window.dataLayer || [];...`}
</script>
```

### Update testimonial
Edit `components/Testimonials.tsx` → modify `testimonials` array:
```tsx
const testimonials = [
  {
    text: "Your real testimonial here",
    author: "Customer Name",
    position: "Title, Company",
  },
  // ...
];
```

### Update Instagram link
Edit `components/Footer.tsx` → change Instagram href:
```tsx
href="https://www.instagram.com/uedge_ai/"
```

### Build for production
```bash
npm run build
npm run start
```

## Helpful Links

- [Web3Forms Docs](https://web3forms.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [DNS Propagation Checker](https://www.nslookup.io)
- [Lighthouse Audit](https://developers.google.com/web/tools/lighthouse)

## Need Help?

- Check `SETUP.md` for detailed setup
- Check `DEPLOYMENT_CHECKLIST.md` for step-by-step deployment
- Check `ASSET_DOWNLOAD_INSTRUCTIONS.md` for downloading images
