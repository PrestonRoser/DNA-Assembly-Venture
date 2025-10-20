# 📘 HANDS – Hands-On STEM Education Kits

HANDS (formerly *Sprout Ed*) is an open, modular, and research-driven platform focused on reintroducing *hands-on learning* into STEM education.  
Built using **Astro** + **TailwindCSS**, this site showcases interactive classroom kits, evidence-based research, and the story behind the venture.

## 🧩 Project Overview
HANDS provides educators and students with tangible, classroom-ready science kits — bridging the gap between theory and experience.  
This repository hosts the complete website and content for the project’s online presence, integrating research, product showcases, and company story.

## 🚀 Features
- **Full Site Refactor & Rebrand**
  - Transitioned from *Sprout Ed* → **HANDS**
  - Updated all assets, pages, and navigation for consistency and clarity  
- **New `research.astro` Page**
  - Synthesized literature review on hands-on learning effectiveness in STEM  
  - References over 10 academic and institutional studies  
- **Unified Styling**
  - Global visual updates via Tailwind and global.css  
  - Consistent bullet/list design and responsive grids  
- **Modern Component Structure**
  - Refactored Astro components (`HomeHero`, `WhyHands`, `ProductCard`, etc.)  
  - Optimized for scalability, readability, and maintainability  
- **Optimized Assets**
  - Updated all imagery to `/public/images/`  
  - Added compressed `.webp` versions for performance and SEO  

## 🧠 Tech Stack
- **Framework:** [Astro](https://astro.build)  
- **Styling:** [TailwindCSS](https://tailwindcss.com)  
- **Hosting:** [Vercel](https://vercel.com)  
- **Domain & DNS:** [Cloudflare](https://www.cloudflare.com)  
- **Languages:** TypeScript / Astro / HTML / CSS  

## ⚙️ Setup & Development

### 1. Clone the repository
```bash
git clone https://github.com/PrestonRoser/DNA-Assembly-Venture.git
cd DNA-Assembly-Venture
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```
Then visit [http://localhost:4321](http://localhost:4321)

### 4. Build for production
```bash
npm run build
```

## 🌐 Deployment
The site is configured for seamless deployment via **Vercel**:

1. Push updates to the `main` branch  
2. Vercel auto-builds and deploys to production  
3. Domain managed via **Cloudflare DNS** → CNAME records to `cname.vercel-dns.com`

## 📄 Project Structure
```
DNA-Assembly-Venture/
├── public/
│   └── images/               # all image assets (logos, kits, founders, etc.)
├── src/
│   ├── components/           # Astro components (Navbar, Footer, CTA, etc.)
│   ├── layouts/              # Shared layouts
│   ├── pages/                # Website pages (index, mission, product, research, etc.)
│   └── styles/               # global.css & Tailwind configuration
└── package.json
```

## 📚 Research Overview
The **Research** page compiles findings from major STEM education studies:
- Freeman et al., *PNAS (2014)* – Active learning improves performance  
- Smithsonian SSEC (2023) – The power of hands-on education  
- Gallup & Walton (2024) – Engagement trends in Gen Z learners  
- National Academies (2023) – NGSS adoption and hands-on practices  
*(Full references available at `/src/pages/research.astro`)*

## 👥 Contributors
- **Preston Roser** – Developer & Co-Founder  
- **Esteban Gardea** – Co-Founder & Scientific Lead  
## 🪪 License
This project is licensed under the **MIT License** — see below.
