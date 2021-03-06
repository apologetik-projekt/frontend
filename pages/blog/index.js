import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Meta from '../../components/meta'
import {fetchKQL} from '../../lib/api'


export default function Blog({articles}) {
	const latestArticle = articles[0]
	const fallBackImage = "/gradient.jpg"
  return (
		<>
		<Head>
			<title>Apologetik Channel - Blog</title>
		</Head>	
		<section id="latestArticle" className="bg-gray-200 bg-opacity-90 w-full -mt-24 pt-28 pb-5">
			<div className="max-w-4xl mx-auto pb-6 mt-4 px-4">
				<Link href={`/blog/${latestArticle.slug}`}>
				<a id="feature" className="flex flex-col md:flex-row mb-4">
					<div id="video_thumb" className="md:w-6/12 flex-shrink-0">
						<div className="h-0 block bg-black relative pb-16:9 overflow-hidden rounded-sm">
							<div className="group absolute w-full h-full top-0 right-0 grid stack items-center shadow-sm" >
								<Image alt={latestArticle.id} className="object-cover" src={latestArticle.image ? latestArticle.image.url : fallBackImage} layout="fill" />
							</div> 
						</div>
					</div>
			
					<div id="video_text" className="md:w-6/12 mt-3 md:mt-0 px-0.5 md:pl-6" style={{flexBasis: "100%"}}>
						<h2 className="font-extrabold leading-none text-4xl">
								{latestArticle.title}
						</h2>
						<p className="text-gray-600 leading-snug mt-3" >{latestArticle.description}</p>
					</div>
			</a>
			</Link>
			</div>
		</section>
    <main className="max-w-4xl mx-auto px-4 mt-10 pb-10 bg-gray-100">		
			<section className="grid grid-cols-1 gap-y-5 max-w-2xl">
			{
				articles.slice(1).map((article, index)=>(
					<Link key={index} href={`/blog/${article.slug}`}><a className="hover:opacity-80 duration-200 flex flex-col md:flex-row">
						<div className="md:w-4/12 mr-4 flex-shrink-0">
							<Image alt={article.title} className="object-cover rounded-sm" src={article.image ? article.image.url : "/gradient.jpg"} layout="responsive" width={300} height={166} />
						</div>
						<div className="py-2 md:py-0.5 md:pt-0">
							<h3 className="font-bold text-gray-900 leading-tight text-[1.4rem] mb-1">{article.title}</h3>
							<p className="text-gray-600">{article.description}</p>
							<button className="bg-gray-300 hidden hover:bg-gray-200 text-gray-800 font-medium text-sm px-3 float-right py-0.5 mt-1 mr-1 rounded-full">mehr lesen</button>
						</div>
					</a></Link>
				))
			}
			</section>		
		</main>
		</>
  )
}



export async function getStaticProps({ params }) {
  const articles = await fetchKQL({
			"query": "site.find('blog').children.listed.sortBy('date', 'desc')",
			"select": {
				"title": true,
				"image": true,
				"author": true,
				"description": true,
				"slug": "page.uid"
			}
	}).then(res=>res.data)

  return {
    props: {
			articles
    }
  }
}