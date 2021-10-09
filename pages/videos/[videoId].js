import { fetchKQL } from "../../lib/api"
import Image from 'next/image'
import { NextSeo } from "next-seo"
import YouTubeEmbed from '../../components/YoutubeEmbed'

Article.theme = "dark"

export default function Article({video}){
	return (	
		<article className="-mb-10 -mt-24">
			
			<NextSeo
				title={`${video?.seo_title ?? video?.title} | Apologetik Channel`}
				description={video?.description}
				//canonical="https://www.canonical.ie/"
				openGraph={{
					url: 'https://apologetik-channel.de/'+video?.uri,
					title: `${video?.seo_title ?? video?.title} | Apologetik Channel`,
					description: video?.description,
					images: [{url: video?.image?.url}],
					site_name: 'Der Apologetik Channel',
				}}
				twitter={{cardType: 'summary'}}
			 />
			<header className="bg-gray-900 pt-24">
				<div className="max-w-3xl mx-auto px-5 py-8">
					<YouTubeEmbed 
						id={video?.id}
						title={video?.title}
						noCookie={true}
					/>
					<h1 className="text-white font-bold text-4xl mt-8">{video?.title}</h1>
				</div>

				<section className="prose-lg text-gray-400 max-w-3xl px-5 mx-auto pb-12">
					<p>{video?.description}</p>
				</section>
			</header>

			
			
				
		</article>
	)
}

export async function getStaticProps({ params }) {
	const id = params.videoId
  const video = await fetchKQL({
			"query": `page('videos\/${id}')`,
			"select": {
				"image": "page.content.image",
				"id": "page.content.id",
				"title": "page.content.title",
				"description": "page.content.description"
			}
	})

  return {
    props: {
			video
    }
  }
}


export async function getStaticPaths() {
	const paths = await fetchKQL({
		"query": "page('videos').index"
		})
		.then((res)=>res.map((slug)=>({
			params: {
				videoId: slug.split('/').toString()
			}
		})))

  return {
    paths: paths,
    fallback: true,
  }
}