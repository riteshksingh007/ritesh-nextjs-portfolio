# Ritesh Kumar Singh - Portfolio (Single Next.js App)

**Modern, SEO-optimized portfolio built with Next.js 14**

✅ Correct Architecture (Industry Standard)
✅ SSG for SEO-critical pages
✅ CSR for interactive pages  
✅ Single build, single deployment
✅ Zero cost on Vercel free tier

---

## 🏗️ Architecture

**Single Next.js app** with smart rendering strategies:

| Page | Rendering | Why |
|------|-----------|-----|
| **Homepage** (`/`) | SSG | SEO critical, fast loading |
| **About** (`/about`) | SSG | Public CV, rarely changes |
| **Experience** (`/experience`) | SSG | Work history, SEO friendly |
| **Projects** (`/projects`) | SSG | SEO critical for Google |
| **Project Details** (`/projects/[slug]`) | SSG | Pre-render all project pages |
| **Contact** (`/contact`) | CSR | Interactive form, no SEO needed |

**Cost**: Same as React SPA (~£0/month)
**SEO**: Better than React SPA
**Complexity**: Much simpler than dual-app setup

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
```
http://localhost:3000
```

**That's it!** Single app, single port, simple.

---

## 📁 Project Structure

```
ritesh-portfolio/
├── pages/
│   ├── index.js              # Homepage (SSG)
│   ├── about.js              # About page (SSG)
│   ├── experience.js         # Experience (SSG)
│   ├── contact.js            # Contact (CSR) ⚡
│   ├── projects/
│   │   ├── index.js          # Projects list (SSG)
│   │   └── [slug].js         # Project detail (SSG)
│   └── _app.js               # Layout with navigation
├── styles/
│   ├── globals.css           # Global styles + nav
│   ├── Home.module.css
│   ├── About.module.css
│   ├── Experience.module.css
│   ├── Contact.module.css
│   ├── Projects.module.css
│   └── ProjectDetail.module.css
├── data/
│   └── profileData.js        # All your CV data
├── package.json
└── next.config.js
```

---

## ✨ Features

### SSG Pages (Static Site Generation)
- ✅ Pre-rendered at build time
- ✅ Blazing fast (served from CDN)
- ✅ Perfect SEO
- ✅ Behaves like React but with SEO benefits

**Pages**: Home, About, Experience, Projects

### CSR Page (Client-Side Rendering)
- ✅ Interactive form with state
- ✅ No unnecessary SSR cost
- ✅ Behaves exactly like React.js

**Page**: Contact

---

## 🎨 Customization

### Update Your Information

Edit `/data/profileData.js`:

```javascript
export const profileData = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... update all fields
}
```

### Change Colors

Edit `/styles/globals.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #10b981;
}
```

### Add New Projects

In `/data/profileData.js`, add to `projects` array:

```javascript
{
  id: "new-project",
  slug: "new-project-slug",
  name: "Project Name",
  // ... more fields
}
```

Project automatically gets its own page at `/projects/new-project-slug`!

---

## 🌐 Deployment (FREE on Vercel)

### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done!** Auto-deploys on every push.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Cost

**Vercel Free Tier:**
- 100GB bandwidth/month
- Unlimited projects
- Custom domains
- **Perfect for portfolio**

**Your traffic (estimated):**
- 1,000 visitors/month = ~3GB
- **Cost: £0/month** ✅

---

## 📊 Why This Architecture?

### ❌ What NOT to Do
- Don't mix React app + Next.js app
- Don't use SSR on every page
- Don't overcomplicate

### ✅ What TO Do
- Single Next.js app
- SSG for public pages (SEO)
- CSR for interactive pages (cost-effective)
- Industry standard approach

---

## 🎯 Rendering Strategy Explained

### SSG (Static Site Generation)
```javascript
export async function getStaticProps() {
  return {
    props: {
      data: profileData
    }
  }
}
```
- Page pre-rendered at build time
- Served from CDN (ultra fast)
- Perfect SEO
- Costs nothing

### CSR (Client-Side Rendering)
```javascript
'use client';

export default function Contact() {
  const [formData, setFormData] = useState({});
  // Interactive logic here
}
```
- Renders in browser
- Full React interactivity
- No SEO cost
- Same as React.js

---

## 🔍 SEO Features

### Meta Tags
Every page has optimized:
- Title tags
- Meta descriptions
- Keywords

### Structured Data
Project pages have Schema.org markup:
- SoftwareApplication type
- Rich search results
- Better Google visibility

### Open Graph
Social media previews for:
- LinkedIn shares
- Twitter cards
- Facebook posts

---

## 💰 Cost Breakdown

### Development
- **Time**: 1 day to customize
- **Cost**: £0

### Hosting (Vercel)
- **1,000 visitors/month**: £0
- **10,000 visitors/month**: £0
- **50,000 visitors/month**: £0
- **100,000+ visitors/month**: ~£20/month

### Domain (Optional)
- **.com domain**: ~£10/year
- **Total first year**: £10

---

## 📋 Pages Overview

### Homepage (`/`)
- Hero with name and title
- Stats (7+ years, 10L downloads, 40× growth)
- Highlights cards
- Skills preview
- CTAs to Contact and Projects

### About (`/about`)
- Professional summary
- Complete skills by category
- Education
- Achievements
- Certifications
- Work authorization

### Experience (`/experience`)
- Timeline of all roles
- Detailed highlights
- Key projects per role
- Current role highlighted

### Projects (`/projects`)
- Grid of all projects
- Tech stack preview
- Impact metrics
- Links to detail pages

### Project Detail (`/projects/[slug]`)
- Full project description
- Technology stack
- Features list
- Impact results
- App store links

### Contact (`/contact`)
- Contact information
- Interactive email form
- Social links
- Location and work auth

---

## 🛠️ Development

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint
```bash
npm run lint
```

---

## 📞 Support

Questions? Check:
- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs

---

## 🎉 Summary

**What you have:**
- ✅ Single Next.js app (correct architecture)
- ✅ SSG for SEO pages (fast + discoverable)
- ✅ CSR for interactive pages (cost-effective)
- ✅ All your CV data pre-loaded
- ✅ 6 detailed projects
- ✅ Ready to deploy FREE
- ✅ Industry-standard setup

**Time to deploy: 5 minutes**
**Cost: £0/month**
**Maintenance: Minimal**

---

**Built with Next.js 14, React 18, and modern best practices.**

Ready to launch your career! 🚀
