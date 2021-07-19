import { getNavStructure } from '../../lib/api'

export default async function sitemap(req, res) {
  const sitemap = await getNavStructure()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )
  res.status(200).json(sitemap)
  res.end()
}
