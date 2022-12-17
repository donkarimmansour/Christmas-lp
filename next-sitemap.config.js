const siteUrl = process.env.API_URL

const sitemap = {
    siteUrl: siteUrl || 'https://example.com',
      exclude: ["/404"],
      generateRobotsTxt: true,
      robotsTxtOptions: {
        policies: [
          {
            userAgent: "*",
            disallow: ["/404" , '/server-sitemap.xml'],
          },
          { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
          `${siteUrl}/sitemap.xml`,
          `${siteUrl}/server-sitemap/index.xml`,
          `${siteUrl}/server-sitemap/generate.xml`,
        ],
      },
    };


module.exports = sitemap