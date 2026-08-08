export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://rising-star-digital.vercel.app/sitemap.xml',
  };
}
