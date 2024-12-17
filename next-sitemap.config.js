/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://babypepe.com',
  generateRobotsTxt: true,
  sitemapSize: 5000, // Keep this large to avoid splitting
  generateIndexSitemap: false, // Disable index sitemap
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/hidden-page'],
  additionalPaths: async () => [
    { loc: '/', changefreq: 'daily', priority: 1.0 },
    { loc: '/what-is-baby-pepe', changefreq: 'weekly', priority: 0.8 },
    { loc: '/baby-pepe-and-friends', changefreq: 'monthly', priority: 0.6 },
    { loc: '/flappy-baby-pepe', changefreq: 'monthly', priority: 0.6 },
    { loc: '/media-kit', changefreq: 'monthly', priority: 0.6 },
    { loc: '/meme-gallery', changefreq: 'monthly', priority: 0.6 },
    { loc: '/white-paper', changefreq: 'monthly', priority: 0.8 },
  ],
};

module.exports = config;
