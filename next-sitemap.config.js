const siteUrl = process.env.API_URL

const sitemap = {
    siteUrl: siteUrl || 'https://example.com',
      exclude: ["/404"],
      generateRobotsTxt: true,
      robotsTxtOptions: {
        policies: [
          {
            userAgent: "*",
            disallow: ["/404"]
          },
          { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
          `${siteUrl}/sitemap.xml`
        ],
      },
    };


module.exports = sitemap