# CalcBox - Fast, Free Online Calculators

A modern, accessible calculator platform built with Next.js 14, TypeScript, and Tailwind CSS. Features BMI calculator, weight converter, and more with GDPR-compliant cookie consent and privacy-friendly analytics.

## 🚀 Features

- **BMI Calculator** - Calculate Body Mass Index with health categories
- **Weight Converter** - Convert between kilograms and pounds
- **Age Calculator** - Calculate exact age in years, months, and days
- **Mobile-First Design** - Responsive layout optimized for all devices
- **Accessibility** - WCAG 2.1 AA compliant with screen reader support
- **SEO Optimized** - Meta tags, structured data, and sitemap
- **GDPR Compliant** - Cookie consent with privacy controls
- **PWA Ready** - Installable web app with manifest
- **Performance** - 90+ Lighthouse scores for Performance and Accessibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG favicon and app icons
- **Analytics**: Plausible Analytics (privacy-friendly)
- **Deployment**: Vercel-ready configuration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/calcbox.git
   cd calcbox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Connect GitHub repository** to Vercel
2. **Import project** - Vercel will auto-detect Next.js
3. **Configure environment variables** (optional):
   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX
   ```
4. **Deploy** - Automatic deployment on git push

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/calcbox)

## ⚙️ Build Configuration

### Build Command
```bash
npm run build
```

### Output Directory
```
.next
```

### Framework Detection
Vercel automatically detects Next.js and configures:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics (choose one)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
# OR
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Advertising (future)
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX

# Build time for sitemap
BUILD_TIME=2024-01-01T00:00:00.000Z
```

## 📁 Project Structure

```
calcbox/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── kg-to-lbs/         # Weight converter
│   ├── age-calculator/    # Age calculator
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage (BMI Calculator)
│   ├── loading.tsx        # Loading component
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.xml/       # Sitemap route
│   └── robots.txt/        # Robots.txt route
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── BMICalculator.tsx  # BMI calculator
│   ├── WeightConverter.tsx # Weight converter
│   ├── AdSlot.tsx        # Ad placeholder
│   ├── CalculatorCard.tsx # Calculator card
│   ├── ContactForm.tsx   # Contact form
│   ├── CookieConsent.tsx # GDPR consent
│   └── ConditionalScripts.tsx # Analytics
├── public/               # Static assets
│   ├── favicon.svg      # SVG favicon
│   ├── favicon.ico      # ICO favicon
│   ├── apple-touch-icon.png # iOS icon
│   ├── icon-192.png     # Android icon
│   ├── icon-512.png     # High-res icon
│   └── manifest.json    # PWA manifest
├── vercel.json          # Vercel configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Dependencies
```

## 🎨 Customization

### Brand Colors
Update `tailwind.config.ts` to change the brand color scheme:

```typescript
colors: {
  brand: {
    50: '#f0f9ff',
    500: '#0ea5e9',  // Primary brand color
    600: '#0284c7',
    // ... more shades
  }
}
```

### Adding New Calculators
1. Create new page in `app/calculator-name/`
2. Add component in `components/`
3. Update navigation in `components/Header.tsx`
4. Add to sitemap in `app/sitemap.xml/route.ts`

## 📊 Performance

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 90+
- **Core Web Vitals**: All green
- **Bundle Size**: Optimized with tree-shaking
- **Images**: WebP/AVIF support
- **Fonts**: Optimized with display: swap

## 🔒 Privacy & GDPR

- **Cookie Consent**: GDPR-compliant banner
- **Analytics**: Privacy-friendly Plausible Analytics
- **Data Collection**: Minimal, anonymous usage data only
- **User Control**: Privacy settings in footer

## 📱 PWA Features

- **Installable**: Add to home screen
- **Offline**: Service worker ready
- **Manifest**: Complete PWA configuration
- **Icons**: Multiple sizes for all devices

## 🧪 Testing

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/calcbox/issues)
- **Contact**: [Contact Form](https://calcbox.com/contact)
- **Documentation**: [About Page](https://calcbox.com/about)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**