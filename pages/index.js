import { fetchKQL, getPage, getNavStructure } from '../lib/api'
import {motion} from 'framer-motion'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import FeaturedVideos from '../components/featured-videos'
import Testimonials from '../components/blocks/testimonials'
import { NavigationContext } from '../lib/context'

Index.hero = true

export default function Index({ navigation, page, featuredVideos, preview }) {
  // const heroPost = edges[0]?.node
  // const morePosts = edges.slice(1)
  // console.log(page.content.block)
  return (
   <NavigationContext.Provider value={navigation}>
      <Hero heading={page.hero}>
        <Navigation key="navigation" nav={navigation} background="dark" />
      </Hero>
      <FeaturedVideos videos={page.videos} />
      <main className="max-w-2xl mx-auto px-4 pb-20 text-gray-900 break-words">
        {page.block.map((block)=>{
          if (block.type === "text") return (
            <div key={block.id} className="prose-lg my-2 md:prose-lg" dangerouslySetInnerHTML={{__html: block.content.text}}></div>
          )
          if (block.type === "gap") {
            const size = { small: 5, medium: 10, large: 16 }
            return ( <div key={block.id} className={`w-full h-${size[block.content.gap]}`}></div> )
          }
          if (block.type == 'heading') {
            const Heading = block.content.level
            return (<div key={block.id} className="prose md:prose-base my-2"><Heading><span dangerouslySetInnerHTML={{__html: block.content.text}}></span></Heading></div>)
          }
          if (block.type == 'testimonials') return <Testimonials key={block.id} quotes={block.content.testimonials} />
        })}
      </main>
    </NavigationContext.Provider>
  )
}

export async function getStaticProps({ preview = false }) {
  const page = await fetchKQL({
    "query": "site.find('home')",
      "select": {
        "title": true,
        "hero": true,
        "featuredVideos": "page.content.videos.toStructure()",
        "block": "page.content.block.toBlocks"
      }
	  })
  const navigation = await getNavStructure()

  page.videos = await Promise.all(Object.values(page?.featuredVideos).map(async (item) => {
    const video = await fetchKQL({query: `site.find('${item.id}')`, select: { title: true, uid: true }})
    return {...video, thumbnail: item.thumbnail }
  }));

  return {
    props: { page, navigation, preview },
  }
  
}
