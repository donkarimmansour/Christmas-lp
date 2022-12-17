import { getServerSideSitemapIndex } from "next-sitemap"
import getConfig from "next/config"

const SiteMap = () => { }
export default SiteMap

const { publicRuntimeConfig } = getConfig()


export async function getServerSideProps(context) {
  const siteUrl = publicRuntimeConfig.API_URL

  let fields = [
    `${siteUrl}/`,
  ]

  return getServerSideSitemapIndex(context, fields)
}
