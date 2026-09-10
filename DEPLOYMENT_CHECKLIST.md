# Uedge.ai Deployment Checklist

## Phase 1: Local Setup & Testing

### Environment Setup
- [ ] Run `npm install` to install dependencies
- [ ] Copy `.env.example` to `.env.local`
- [ ] Get Web3Forms API key from [web3forms.com](https://web3forms.com)
- [ ] Add Web3Forms key to `.env.local`: `NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here`

### Assets
- [ ] Download logo.webp from Webflow CDN → `public/images/logo.webp`
- [ ] Download rocketship.webp from Webflow CDN → `public/images/rocketship.webp`
- [ ] Verify SVG arrow icons exist in `public/images/`
- [ ] Verify avatar placeholder SVG exists in `public/images/`

### Local Testing
- [ ] Run `npm run dev` and open http://localhost:3000
- [ ] Visual inspection across sections:
  - [ ] Hero section displays correctly
  - [ ] Logo and headline render
  - [ ] CTA buttons work (scroll to contact form)
  - [ ] AI Solutions section displays rocketship icon
  - [ ] Rotating words animation works (cycles every 3 seconds)
  - [ ] Feature cards display in 3-column layout
  - [ ] Testimonials carousel functions (prev/next arrows, dots)
  - [ ] Contact form fields render
- [ ] Mobile responsiveness:
  - [ ] Test at 375px (mobile)
  - [ ] Test at 768px (tablet)
  - [ ] Test at 1920px (desktop)
- [ ] Form submission test:
  - [ ] Fill out contact form with test data
  - [ ] Verify success message displays
  - [ ] Check Web3Forms dashboard for submission record

### Pre-Launch Review

⚠️ **BLOCKING ITEMS** (resolve before going live):

1. **Testimonials Content**
   - Current: Lorem ipsum placeholders
   - Options:
     - [ ] Collect real testimonials and update
     - [ ] Get explicit sign-off to launch with placeholders
   - Issue: Placeholder content damages credibility

2. **Instagram Link**
   - Current: `https://www.instagram.com` (generic)
   - Required: Update to actual Uedge company profile
   - File: `components/Footer.tsx` line with Instagram link

3. **Tracking Scripts**
   - [ ] Check Webflow Site Settings → Custom Code section
   - [ ] Document all tracking codes:
     - [ ] Google Analytics (if present)
     - [ ] Meta Pixel (if present)
     - [ ] Other third-party scripts
   - [ ] Add scripts to `app/layout.tsx` in `<head>` section
   - [ ] Test tracking is working after deployment

## Phase 2: Git & GitHub

- [ ] Initialize git repo: `git init`
- [ ] Stage all files: `git add .`
- [ ] Initial commit: `git commit -m "Initial commit: uedge.ai static site"`
- [ ] Create GitHub repository at [github.com/new](https://github.com/new)
- [ ] Add remote: `git remote add origin https://github.com/your-username/uedge.git`
- [ ] Rename branch: `git branch -M main`
- [ ] Push to GitHub: `git push -u origin main`

## Phase 3: Vercel Deployment

### Import Project
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click "Add New..." → "Project"
- [ ] Select GitHub repository (uedge)
- [ ] Configure project settings:
  - [ ] Framework: Next.js (auto-detected)
  - [ ] Build Command: `npm run build` (pre-filled)
  - [ ] Install Command: `npm install` (pre-filled)
- [ ] Add Environment Variables:
  - [ ] `NEXT_PUBLIC_WEB3FORMS_KEY` = (Web3Forms access key)
- [ ] Click "Deploy"

### Verify Deployment
- [ ] Deployment completes successfully
- [ ] View deployment at `*.vercel.app` preview URL
- [ ] Verify all sections render:
  - [ ] Hero section
  - [ ] AI Solutions
  - [ ] Rotating words
  - [ ] Features cards
  - [ ] Testimonials carousel
  - [ ] Contact form
  - [ ] Footer
- [ ] Test form submission on preview
- [ ] Verify success message displays

### Custom Domain Setup
- [ ] In Vercel Project Settings → Domains
- [ ] Add domain: `uedge.ai`
- [ ] Add domain: `www.uedge.ai`
- [ ] Copy DNS records provided by Vercel:
  - [ ] A record details
  - [ ] CNAME record details (if applicable)
  - [ ] TXT record for verification

## Phase 4: DNS & Domain Transition

### DNS Configuration
- [ ] Log into current DNS provider (Webflow domain settings)
- [ ] Locate Domain/DNS settings
- [ ] Remove old Webflow DNS records
- [ ] Add Vercel DNS records:
  - [ ] A record pointing to Vercel IP
  - [ ] CNAME records (if applicable)
  - [ ] TXT records for verification
- [ ] Save DNS changes

### DNS Propagation Wait
- [ ] Wait up to 24 hours for DNS propagation
- [ ] Monitor `uedge.ai` and `www.uedge.ai` via DNS lookup tools:
  - Use [nslookup.io](https://www.nslookup.io)
  - Or run: `nslookup uedge.ai`
  - Verify records point to Vercel

### SSL Certificate
- [ ] Vercel auto-issues SSL certificate (usually within 24 hours)
- [ ] Verify HTTPS works:
  - [ ] Visit https://uedge.ai
  - [ ] Check browser shows secure lock icon
  - [ ] No SSL warnings

## Phase 5: Final Testing

### Live Site Testing
- [ ] Load https://uedge.ai in browser
- [ ] Redirect from www.uedge.ai works (if configured)
- [ ] Full visual inspection:
  - [ ] All sections render correctly
  - [ ] Images load (logo, rocketship icon)
  - [ ] Animations work (rotating words)
  - [ ] Buttons functional (smooth scroll to form)
  - [ ] Footer links work
- [ ] Mobile responsiveness on live site
- [ ] Form submission test:
  - [ ] Submit test form on live site
  - [ ] Receive success message
  - [ ] Verify in Web3Forms dashboard
  - [ ] Check email confirmation arrives

### Performance Check
- [ ] Run Lighthouse audit (DevTools → Lighthouse)
- [ ] Check Core Web Vitals (Vercel Dashboard → Analytics)
- [ ] Verify page load speed acceptable

## Phase 6: Post-Deployment

### Update Records
- [ ] Document new DNS records
- [ ] Update any internal documentation pointing to domain
- [ ] Update social media links if needed

### Monitoring
- [ ] Monitor Vercel dashboard for errors
- [ ] Monitor Web3Forms submissions
- [ ] Monitor Lighthouse scores

### Cleanup
- [ ] Remove Webflow site from public (if keeping as backup)
- [ ] Document access credentials for future use
- [ ] **Cancel Webflow subscription** (after confirming live site is stable for 24-48 hours)

## Phase 7: Webflow Subscription Cancellation

⚠️ **FINAL STEP** (only after confirming live site is stable):

- [ ] Wait 24-48 hours to confirm everything working
- [ ] Log into Webflow account
- [ ] Go to Account Settings → Billing
- [ ] Cancel subscription
- [ ] Save confirmation email
- [ ] Verify no further charges

---

## Troubleshooting

### Form not submitting
- [ ] Verify Web3Forms API key in `.env.local` is correct
- [ ] Check Vercel environment variables match `.env.local`
- [ ] Test Web3Forms key directly at [web3forms.com/api-docs](https://web3forms.com/api-docs)

### Images not loading
- [ ] Verify all image files exist in `public/images/`
- [ ] Check file names match component imports exactly
- [ ] Try clearing browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### DNS not propagating
- [ ] Use [whatsmydns.net](https://www.whatsmydns.net) to check global DNS
- [ ] Allow up to 24 hours for full propagation
- [ ] Verify DNS records were entered correctly

### SSL certificate not issuing
- [ ] Check Vercel dashboard for any domain verification issues
- [ ] Verify DNS records are correctly pointing to Vercel
- [ ] Re-add domain in Vercel if needed
- [ ] Wait another 24 hours

### Mobile display issues
- [ ] Verify viewport meta tag in `app/layout.tsx`
- [ ] Test in Chrome DevTools mobile emulator
- [ ] Check CSS media queries in `.module.css` files
