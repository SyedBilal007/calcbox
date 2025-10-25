# Analytics Setup Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Analytics Configuration
# Use Plausible Analytics (privacy-friendly, recommended)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=calcbox.com

# Or use Google Analytics (fallback if Plausible not configured)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Advertising Configuration
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://calcbox.com
```

## Analytics Options

### Option 1: Plausible Analytics (Recommended)
- Privacy-friendly analytics
- GDPR compliant by design
- Lightweight and fast
- Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to your domain

### Option 2: Google Analytics
- Traditional analytics solution
- More detailed reporting
- Set `NEXT_PUBLIC_GA_ID` to your GA4 measurement ID

## Cookie Consent Integration

The analytics scripts are automatically gated behind cookie consent:
- Only loads if user has given consent for analytics
- Respects user privacy preferences
- Can be changed anytime via "Privacy settings" in footer

## Testing

1. Clear localStorage to see the cookie banner
2. Test different consent options
3. Verify scripts only load when consent is given
4. Check that "Privacy settings" reopens the modal
