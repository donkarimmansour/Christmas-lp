import { getServerSideSitemap } from "next-sitemap"
import getConfig from "next/config"

const SiteMap = () => { }
export default SiteMap

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
  const siteUrl = publicRuntimeConfig.API_URL

  let fields = [
    `${siteUrl}/`,
  ]

  fields = fields.map((item) => ({
    loc: item,
    lastmod: new Date(),
    priority: 0.7,
    changefreq: "daily",
  }));


  return getServerSideSitemap(context, fields)
}

