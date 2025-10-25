# CalcBox Deployment Guide

## 🚀 Quick Deploy to Vercel

### Method 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/calcbox)

### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Method 3: GitHub Integration
1. Connect your GitHub repository to Vercel
2. Vercel auto-detects Next.js configuration
3. Deploy automatically on git push

## ⚙️ Build Configuration

### Build Command
```bash
npm run build
```

### Output Directory
```
.next
```

### Framework
Next.js 14 (auto-detected by Vercel)

## 🔧 Environment Variables

Set these in Vercel dashboard under Settings > Environment Variables:

### Analytics (Optional)
```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
# OR
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Advertising (Future)
```
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX
```

### Build Time
```
BUILD_TIME=2024-01-01T00:00:00.000Z
```

## 📁 Project Structure

```
calcbox/
├── app/                 # Next.js App Router
├── components/          # React components
├── public/             # Static assets
├── vercel.json         # Vercel configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## 🎯 Vercel Configuration

The `vercel.json` file includes:

- **Security Headers**: XSS protection, content type options
- **Caching**: Optimized cache headers for static assets
- **Redirects**: Clean URL redirects
- **Functions**: Server action configuration
- **Performance**: Compression and optimization

## 📊 Performance Optimizations

- **Static Generation**: Pages pre-rendered at build time
- **Image Optimization**: WebP/AVIF support
- **Font Optimization**: Display swap with fallbacks
- **Bundle Optimization**: Tree-shaking and minification
- **Caching**: Aggressive caching for static assets

## 🔍 Monitoring

After deployment, monitor:

- **Performance**: Vercel Analytics dashboard
- **Errors**: Function logs in Vercel dashboard
- **Traffic**: Real-time visitor analytics
- **Core Web Vitals**: Lighthouse scores

## 🚨 Troubleshooting

### Build Failures
```bash
# Check build locally
npm run build

# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint
```

### Function Timeouts
- Contact form has 10s timeout limit
- Optimize server actions if needed
- Consider edge functions for better performance

### Environment Variables
- Ensure all required env vars are set
- Check variable names match exactly
- Restart deployment after env var changes

## 📈 Scaling

Vercel automatically handles:
- **CDN**: Global edge network
- **Scaling**: Auto-scaling based on traffic
- **SSL**: Automatic HTTPS certificates
- **Domains**: Custom domain configuration

## 🔒 Security

- **Headers**: Security headers configured
- **HTTPS**: Automatic SSL certificates
- **DDoS Protection**: Built-in protection
- **GDPR**: Cookie consent implemented

## 📱 PWA Features

- **Manifest**: Complete PWA configuration
- **Icons**: Multiple sizes for all devices
- **Installable**: Add to home screen
- **Offline**: Service worker ready

---

**Ready to deploy?** Use the one-click button above or follow the CLI instructions!
