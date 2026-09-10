# Uedge.ai Migration Setup

## Prerequisites
- Node.js 18+
- npm or yarn

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Download assets from Webflow CDN:**
   Place these files in `public/images/`:
   - `logo.webp` - Hero/footer logo
   - `rocketship.webp` - AI Solutions icon
   - `avatar-placeholder.svg` - Testimonial avatar
   - `arrow-left.svg` - Carousel left arrow
   - `arrow-right.svg` - Carousel right arrow

   Download URLs (replace with actual URLs from Webflow):
   ```
   https://cdn.prod.website-files.com/688a6f01a64e180bb30b1779/688e9ded4b6503e789fb3e30_0851d561-61ba-42ed-ab48-dc71b80b6fa8_removalai_preview.avif
   https://cdn.prod.website-files.com/688a6f01a64e180bb30b1779/688e451262096cf3bab078b6_Rocketship-Icon.webp
   https://cdn.prod.website-files.com/688a6f01a64e180bb30b1779/688e89c28acde0a5bc984ee2_6191a88a1c0e39463c2bf022_placeholder-image.svg
   https://cdn.prod.website-files.com/688a6f01a64e180bb30b1779/688e8cfb579ab2c38f32340f_lsicon--left-filled.svg
   ```

3. **Setup Web3Forms:**
   - Sign up at [web3forms.com](https://web3forms.com)
   - Generate a free access key (250 submissions/month)
   - Copy the key to `.env.local`:
     ```
     NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
     ```

4. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## ⚠️ Important Flags Before Launch

### 1. Testimonials
Current content is Lorem ipsum placeholder text. Before going live, either:
- Collect real customer testimonials and update `components/Testimonials.tsx`
- Get sign-off to launch with placeholders temporarily

### 2. Instagram Link
Footer Instagram link is currently generic (`instagram.com`). Update to actual company profile URL.

### 3. Tracking & Analytics
Check Webflow Site Settings → Custom Code for any tracking scripts:
- Google Analytics
- Meta Pixel
- Other third-party scripts

Add these to `app/layout.tsx` in the `<head>` section before deploying.

## Deployment to Vercel

1. **Initialize git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: uedge.ai static site"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/your-username/uedge.git
   git branch -M main
   git push -u origin main
   ```

3. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Select the uedge repository
   - Add environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Deploy

4. **Add Custom Domain:**
   - In Vercel → Project Settings → Domains
   - Add `uedge.ai` and `www.uedge.ai`
   - Vercel provides A/CNAME records

5. **Update DNS:**
   - Log into DNS provider (check Webflow Site Settings → Domains)
   - Update records to point at Vercel
   - Wait for DNS propagation (~24 hours)

6. **Test Form Submission:**
   - Submit a real test message through contact form
   - Confirm it arrives via Web3Forms email

## Build & Deployment Checklist

- [ ] All images downloaded from Webflow CDN
- [ ] Web3Forms access key configured
- [ ] Testimonials real or signed off
- [ ] Instagram link updated
- [ ] Tracking scripts added (if applicable)
- [ ] Tested locally on mobile/desktop
- [ ] Git repo initialized and pushed
- [ ] Deployed to Vercel
- [ ] Custom domains configured
- [ ] DNS updated
- [ ] Form submission tested end-to-end
- [ ] Webflow subscription canceled
