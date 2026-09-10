# Components Guide

## Component Architecture

All components are in `components/` directory with paired `.tsx` and `.module.css` files.

### Hero Component
**File:** `components/Hero.tsx` + `Hero.module.css`

**Displays:**
- Logo image + "Uedge" wordmark
- Headline: "Propel growth using fast, smart, and scalable solutions..."
- Two paragraphs of body copy
- "Get in touch" CTA button (scrolls to #contact-form)

**State:** None (stateless)

**Styles:**
- Gradient background
- Responsive heading sizes (48px → 32px mobile)
- Button hover effects (lift + shadow)

**Customization:**
- Edit headline text in JSX
- Edit body paragraphs in JSX
- Change button text in JSX
- Adjust colors in `.module.css`

---

### AISection Component
**File:** `components/AISection.tsx` + `AISection.module.css`

**Displays:**
- Centered rocketship icon
- Heading: "AI Solutions Tailored for Your Success"
- Description paragraph

**State:** None (stateless)

**Styles:**
- Centered text layout
- Icon sizing (80x80px)
- Responsive text sizes

**Customization:**
- Edit heading in JSX
- Edit description in JSX
- Swap icon image (change src)
- Adjust icon size in CSS

---

### RotatingWords Component
**File:** `components/RotatingWords.tsx` + `RotatingWords.module.css`

**Displays:**
- Static lead-in text
- Rotating word (cycles every 3 seconds)
- "Let's Talk" CTA button

**State:**
- `currentIndex` - tracks which word is displayed
- Updates every 3 seconds via `useEffect` → `setInterval`

**Styles:**
- Blue gradient background
- Word animation (fade in/out, slide)
- Button with white background

**Customization:**
- Change word list by editing `WORDS` array
- Adjust rotation speed by changing 3000ms interval
- Change lead-in text in JSX
- Edit button text

---

### Features Component
**File:** `components/Features.tsx` + `Features.module.css`

**Displays:**
- Heading: "Best Innovative Solution for Modern Businesses"
- 3 feature cards in responsive grid:
  1. AI-Agent
  2. Chatbot
  3. Workflow Automation

**State:** None (stateless)

**Styles:**
- 3-column grid (responsive to 1 column on mobile)
- Card shadows + hover lift effect
- Responsive font sizes

**Customization:**
- Edit `features` array to add/remove/modify cards
- Each card has `title` and `description`
- Change heading text in JSX

---

### Testimonials Component
**File:** `components/Testimonials.tsx` + `Testimonials.module.css`

**Displays:**
- Heading: "Testimonials"
- Carousel with:
  - Avatar image
  - Quote text
  - Author name
  - Position/company
  - Previous/Next arrow buttons
  - Dot indicators (clickable)
- Warning banner (Lorem ipsum placeholder indicator)

**State:**
- `currentIndex` - tracks active testimonial
- Updated by prev/next buttons or clicking dots

**Styles:**
- Centered carousel layout
- Avatar circle (80x80px)
- Arrow buttons with hover effects
- Active dot indicator in blue

**⚠️ REQUIRES UPDATE:**
```tsx
const testimonials = [
  {
    text: "Replace with real testimonial",
    author: "Real Name",
    position: "Title, Company",
  },
  // ...
];
```

**Customization:**
- Replace testimonials array with real content
- Change heading text
- Adjust rotation interval if desired
- Modify button/dot styles in CSS

---

### ContactForm Component
**File:** `components/ContactForm.tsx` + `ContactForm.module.css`

**Displays:**
- Heading: "Get in Touch"
- Form with fields:
  - First Name* (required)
  - Last Name* (required)
  - Email* (required)
  - Phone (optional)
  - Message (optional)
- Submit button
- Success/error message display

**State:**
- `formData` - form field values
- `status` - "idle" | "loading" | "success" | "error"
- `message` - display text for success/error

**Web3Forms Integration:**
- POSTs to: `https://api.web3forms.com/submit`
- Requires: `NEXT_PUBLIC_WEB3FORMS_KEY` env var
- Payload: name, email, phone, message

**Styles:**
- 2-column field layout (responsive to 1 column)
- Success message: green background
- Error message: red background
- Loading state: button disabled, form grayed out

**⚠️ REQUIRES SETUP:**
1. Sign up at web3forms.com
2. Generate access key
3. Add to `.env.local`: `NEXT_PUBLIC_WEB3FORMS_KEY=key_here`

**Customization:**
- Edit form heading
- Add/remove form fields
- Change success/error messages
- Adjust validation rules
- Modify field styles in CSS

---

### Footer Component
**File:** `components/Footer.tsx` + `Footer.module.css`

**Displays:**
- Logo (links to homepage)
- Social links:
  - LinkedIn (https://www.linkedin.com/company/uedge-ai)
  - Instagram (⚠️ needs real URL)
- Copyright: "© uedge AI transformation partner 2025"
- Instagram warning indicator

**State:** None (stateless)

**Styles:**
- Dark background (#1a1a1a)
- White text
- Flex layout (responsive direction on mobile)
- Hover effects on links

**⚠️ REQUIRES UPDATE:**
```tsx
// Change this line in Footer.tsx:
href="https://www.instagram.com"  // ← Too generic

// To:
href="https://www.instagram.com/uedge_ai"  // ← Real profile
```

**Customization:**
- Update Instagram URL
- Change copyright year if needed
- Add more social links (add to JSX + styles)
- Modify footer styling
- Change logo link destination

---

## How to Edit Content

### Quick Changes (Text)
All text is in JSX files. Find the component, edit the string:

```tsx
// components/Hero.tsx
<h1>Change this headline text</h1>

// components/AISection.tsx
<h2>Change this heading</h2>

// components/Footer.tsx
<a href="new-url">Link text</a>
```

### Replace Testimonials
Edit `components/Testimonials.tsx` → `testimonials` array:

```tsx
const testimonials = [
  {
    text: "Customer quote here",
    author: "Jane Doe",
    position: "CTO, Company Inc",
  },
  {
    text: "Another quote",
    author: "John Smith",
    position: "VP Sales, Other Co",
  },
];
```

### Add/Remove Features
Edit `components/Features.tsx` → `features` array:

```tsx
const features = [
  {
    title: "Feature Name",
    description: "Feature description text",
  },
  // Add more objects to add cards
];
```

### Change Form Submission Endpoint
Edit `components/ContactForm.tsx` → search for `api.web3forms.com`

Currently configured for Web3Forms. To switch providers:
1. Update fetch URL
2. Update request body fields
3. Update response handling

### Update Styling
Each component has a paired `.module.css` file:

```css
/* components/Hero.module.css */
.hero {
  padding: 80px 20px;  ← Change spacing
  background: linear-gradient(...);  ← Change colors
}
```

---

## Component Imports & Dependencies

### External Dependencies
- `react` - React hooks (useState, useEffect)
- `next/image` - Next.js Image component (in Testimonials)
- `next/link` - Next.js Link component (in Footer)

### Local Imports
- `@/lib/utils` - smoothScroll utility (Hero, RotatingWords)
- CSS Modules (each component)

### No External UI Libraries
✅ No Material-UI
✅ No Bootstrap
✅ No Tailwind
✅ All custom CSS

This keeps the site lightweight and fast.

---

## Component Props

**All components are presentational (no props):**

```tsx
// Each component is called without props:
<Hero />
<AISection />
<RotatingWords />
<Features />
<Testimonials />
<ContactForm />
<Footer />
```

**Why?** Data is hardcoded in each component. To make props-based:

```tsx
// Example refactor (not done, but possible):
interface HeroProps {
  headline: string;
  paragraphs: string[];
}

export default function Hero({ headline, paragraphs }: HeroProps) {
  // ...
}
```

---

## Testing Components Locally

```bash
# Run dev server
npm run dev

# Visit http://localhost:3000
# Scroll through all sections

# Test form submission:
# 1. Fill form
# 2. Click submit
# 3. Check success message
# 4. Check Web3Forms dashboard

# Test animations:
# 1. Watch rotating words (should cycle every 3s)
# 2. Test testimonial carousel (click arrows/dots)
# 3. Verify smooth scroll on CTA buttons
```

---

## Performance Notes

### Optimizations
- CSS Modules prevent global conflicts
- No external dependencies (fast load)
- Images lazy-loaded by default
- Animations use CSS transitions (GPU accelerated)

### Potential Improvements (future)
- Image optimization (WebP fallbacks)
- Code splitting (lazy load components)
- Form input debouncing
- Testimonial image optimization

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

Uses modern CSS (flexbox, grid, CSS transitions) — no IE support.
