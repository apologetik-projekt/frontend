import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Container from '../components/container'
import Image from 'next/image'
import Navigation from '../components/navigation'
import {getPage, getNavStructure} from '../lib/api'
import MobileMenu from '../components/mobile-menu'

export default function Slug({
	page,
  params,
	navigation,
  preview,
}) {
 
  const router = useRouter()
  // if (!router.isFallback && !page) {
  //   return <ErrorPage statusCode={404} />
  // }
  console.log(page.content)

  return (
    <>
      <Layout preview={preview} title={page?.title}>
				<MobileMenu nav={navigation} />
				<Navigation nav={navigation} />
          {router.isFallback ? (
            <h1>Loading...</h1>
          ) : (
            <main className="max-w-4xl mx-auto px-4 pt-4 pb-10">
              {page.content.blocks.map((block, index)=>{
                if (block.type === "hero") return (
                  <h1 key={index} className="font-bold text-6xl font-serif mt-4 mb-14 text-center">{block.content.heading}</h1>
                )
                if (block.type === "text") return (
                  <div key={index} className="prose max-w-2xl my-2 mx-auto md:prose-base" dangerouslySetInnerHTML={{__html: block.content.text}}></div>
                )
                if (block.type == 'heading') {
                  const Heading = block.content.level
                  return (<div className="prose max-w-2xl mx-auto md:prose-base"><Heading><span dangerouslySetInnerHTML={{__html: block.content.text}}></span></Heading></div>)
                }
                if (block.type === "team") {
                  const members = block.content.members.map((member)=>(
                      <div className="w-full md:w-1/2 md:px-4 mt-2 mb-10">
                        <figure className="relative h-0 pb-16:11 bg-blue-300">
                          <div className="absolute w-full h-full object-cover">
                            <Image className="object-cover" src={member.image[0].url} alt={member.name} width="800" height="550" />
                          </div>
                        </figure>
                        <h3 className="font-bold text-2xl mt-2 mb-0.5 mx-0.5">{member.name}</h3>
                        <p className="mx-0.5 text-gray-900">{member.description}</p>
                      </div>
                  ))
                  return (
                    <div className="md:flex flex-wrap justify-between w-full mb-8">
                      {members}
                    </div>
                  )
                }
              })}							
						</main>
          )}
      </Layout>
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
	const slug = Array.isArray(params.slug) ? params.slug.join('+') : params.slug
  const page = await getPage(slug)
	console.log(page)
	const navigation = await getNavStructure()

  return {
    props: {
			navigation,
			page,
			params,
      preview,
    },
  }
}

export async function getStaticPaths() {
	const paths = await fetch("http://apologetik.test/api/query", {
		method: 'POST',
		headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic a3JhdXNlc2lsYXNAZ21haWwuY29tOndlZC10ZWVzX2dvbmQ5QklSRA==',
			},
		body: JSON.stringify({query: "site.pages.index"})
		})
		.then(res=>res.json())
		.then((res)=>res.result.map((slug)=>({params: {slug: slug.split('/')}})))

  return {
    paths: paths,
    fallback: true,
  }
}