// import MoreStories from '../components/more-stories'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { fetchKQL, getPage, getNavStructure } from '../lib/api'
import {motion} from 'framer-motion'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import image from '../public/conversation.jpg' 
import { NavigationContext } from '../lib/context'
import Footer from '../components/footer'
Index.hero = true

export default function Index({ navigation, page, featuredVideos, preview }) {
  // const heroPost = edges[0]?.node
  // const morePosts = edges.slice(1)
  // console.log(page.content.block)
  return (
   <NavigationContext.Provider value={navigation}>
      <Head>
        <title>Der Apologetik Channel - Christliche Apologetik</title>  
      </Head>
      <Hero heading={page.content.hero} image={image}>
        <Navigation key="navigation" nav={navigation} background="dark" />
      </Hero>
      <section className="max-w-5xl z-10 relative px-3 md:px-0 mx-auto -mt-12 mb-28 transform md:scale-90">
        <div className="flex flex-col md:flex-row space-y-3">
          <div className="w-full md:hover:-translate-y-1 duration-300 ease-out transition-transform hover:cursor-pointer md:w-1/3 md:transform md:scale-110 md:-translate-x-4 will-change">
            <VideoThumbnail data={page.videos[0]}  />
          </div>
          <div className="w-full md:w-1/3 md:transform md:scale-110  md:-rotate-3 md:translate-y-1 duration-300 ease-out md:hover:-translate-y-0.5 transition-transform hover:cursor-pointer will-change">
            <VideoThumbnail data={page.videos[1]} />
          </div>
          <div className="w-full md:w-1/3 md:transform md:scale-110 md:translate-x-4 md:mt-0 md:-translate-y-1  md:rotate-3 md:hover:-translate-y-2 transition-transform duration-300 ease-out hover:cursor-pointer will-change">
            <VideoThumbnail data={page.videos[2]} />
          </div>
        </div>
        <Link href="/videos"><a className="hidden md:block text-lg float-right font-extrabold leading-1 hover:text-gray-800 mt-6">mehr Videos <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-0.5"  width="24" height="14" viewBox="18 2 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square"><path d="M 4.903 11.986 L 42.971 12.252 M 36.971 5.252 L 43.971 12.252 L 36.971 19.252"></path></svg></a></Link>
        <Link href="/videos"><a className="md:hidden float-right font-bold leading-none mt-4 px-5 py-3 rounded-full text-white bg-gray-900">mehr Videos <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-0.5"  width="24" height="14" viewBox="20 2 20 24" fill="none" stroke="currentColor" strokeWidth="3.8" strokeLinecap="square"><path d="M 4.903 11.986 L 42.971 12.252 M 36.971 5.252 L 43.971 12.252 L 36.971 19.252"></path></svg></a></Link>
      </section>
      <main className="max-w-2xl mx-auto px-4 pb-20 text-gray-900 break-words">
        {page.content.block.map((block, index)=>{
          if (block.type === "text") return (
            <div key={index} className="prose my-2 md:prose-base" dangerouslySetInnerHTML={{__html: block.content.text}}></div>
          )
          if (block.type === "gap") {
            const size = { small: 5, medium: 10, large: 16 }
            return ( <div key={index} className={`w-full h-${size[block.content.gap]}`}></div> )
          }
          if (block.type == 'heading') {
            const Heading = block.content.level
            return (<div key={index} className="prose md:prose-base my-2"><Heading><span dangerouslySetInnerHTML={{__html: block.content.text}}></span></Heading></div>)
          }
          if (block.type == 'testimonials') {
            const marqueeVariants = {
              animate: {
                y: ['0%', '-50%'],
                transition: {
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              },
            }
            const colors = ["text-green-400", "text-teal-400", "text-blue-400", "text-indigo-400", "text-purple-400", "text-red-400", "text-orange-400", "text-yellow-400"]
            const quotes = block.content.testimonials.concat(block.content.testimonials).map((quote, index)=>(
              <div key={index} className="flex my-2 text-sm">
                <svg className={`${colors[index % 8]} text-opacity-20 flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" width="35" height="35">
                  <path fill="currentColor" d="M150.299 26.634v58.25c0 7.9-6.404 14.301-14.304 14.301-28.186 0-43.518 28.909-45.643 85.966h45.643c7.9 0 14.304 6.407 14.304 14.304v122.992c0 7.896-6.404 14.298-14.304 14.298H14.301C6.398 336.745 0 330.338 0 322.447V199.455c0-27.352 2.754-52.452 8.183-74.611 5.568-22.721 14.115-42.587 25.396-59.048 11.608-16.917 26.128-30.192 43.16-39.44C93.886 17.052 113.826 12.333 136 12.333c7.895 0 14.299 6.401 14.299 14.301zm184.474 72.552c7.896 0 14.305-6.407 14.305-14.301v-58.25c0-7.9-6.408-14.301-14.305-14.301-22.165 0-42.108 4.72-59.249 14.023-17.035 9.248-31.563 22.523-43.173 39.44-11.277 16.461-19.824 36.328-25.393 59.054-5.426 22.166-8.18 47.266-8.18 74.605v122.992c0 7.896 6.406 14.298 14.304 14.298h121.69c7.896 0 14.299-6.407 14.299-14.298V199.455c0-7.896-6.402-14.304-14.299-14.304H289.78c2.093-57.056 17.201-85.965 44.993-85.965z"/>
                </svg>
                <div className="-ml-3 text-gray-800">
                  <strong className="font-bold">{quote.name}</strong><br/>
                  <div dangerouslySetInnerHTML={{__html: quote.text}}></div>
                </div>
              </div>
            ))
            return (
              <div className="h-72 overflow-hidden relative mt-3 -mx-4 md:-mx-6 bg-gray-400 bg-opacity-10 md:bg-opacity-0">
                <div className="h-12 bg-gradient-to-b from-gray-100 to-transparent absolute w-full z-10"></div>
                <motion.div className="flex flex-col px-4 md:px-6" variants={marqueeVariants} animate="animate">
                  {quotes}
                </motion.div>
                <div className="h-16 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 w-full z-10"></div>
              </div>
            )
          }
        })}
      </main>
      <Footer />
        
    </NavigationContext.Provider>
  )
}

function VideoThumbnail({data: {title, uid, thumbnail}}) {
  return (
    <a href="#" className="h-0 block bg-black relative pb-16:9 w-full overflow-hidden shadow-sm rounded-sm">
      <div className="group absolute w-full h-full top-0 right-0 grid stack" >
        <Image alt="Youtube Thumbnail" className="desaturate" src={`https://img.youtube.com/vi/${uid}/mq${thumbnail}.jpg`} layout="fill" />
        <div className="h-full group-hover:opacity-70 transition-opacity duration-200 w-full bg-gradient-to-tr from-teal-900 to-coolgray-700 opacity-40 md:opacity-50 bg-blend-saturation"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-3 text-white text-3xl md:text-xl lg:text-2xl font-extrabold leading-none md:tracking-wide" style={{filter: "drop-shadow(0 0 20px rgb(10 40 40 / 80%))"}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 md:h-7 md:w-7 -ml-0.5 mb-2" viewBox="0 0 56 56" fill="currentColor">
            <path d="M28,56A28.008,28.008,0,0,1,17.1,2.2,28.007,28.007,0,0,1,38.9,53.8,27.825,27.825,0,0,1,28,56ZM20.355,18.043V41.378l21-11.667-21-11.668Z" fill="currentColor"/>
          </svg>
          {title}
        </div>
      </div> 
    </a>
  )
}

export async function getStaticProps({ preview = false }) {
  const page = await getPage('home')
  const navigation = await getNavStructure()

  page.videos = await Promise.all(page.content.videos.map(async (item, index) => {
    const video = await fetchKQL({query: `site.find('${item.id}')`, select: { title: true, uid: true }})
    return {...video, thumbnail: page.content.videos[index].thumbnail }
  }));

  return {
    props: { page, navigation, preview },
  }
  
}
