import { NextResponse } from 'next/server'

export async function GET() {
  // Get build time (when the app was built)
  const buildTime = process.env.BUILD_TIME || new Date().toISOString()
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calcbox.com/</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://calcbox.com/age-calculator</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://calcbox.com/kg-to-lbs</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://calcbox.com/about</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://calcbox.com/privacy</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://calcbox.com/contact</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

