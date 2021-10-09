import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedVideos({videos}){
	return (
		<section className="max-w-5xl z-10 relative px-3 md:px-0 mx-auto mt-10 mb-28 transform md:scale-90">
        <div className="flex flex-col md:flex-row space-y-3">
          <div className="w-full md:hover:-translate-y-0.5 duration-300 ease-out transition-transform hover:cursor-pointer md:w-1/3 md:transform md:scale-110 md:-translate-x-4 will-change">
            <VideoThumbnail data={videos[0]}  />
          </div>
          <div className="w-full md:w-1/3 md:transform md:scale-110  md:-rotate-3 md:translate-y-0.5 duration-300 ease-out md:hover:-translate-y-0.5 transition-transform hover:cursor-pointer will-change">
            <VideoThumbnail data={videos[1]} />
          </div>
          <div className="w-full md:w-1/3 md:transform md:scale-110 md:translate-x-4 md:mt-0 md:-translate-y-0.5  md:rotate-3 md:hover:-translate-y-2 transition-transform duration-300 ease-out hover:cursor-pointer will-change">
            <VideoThumbnail data={videos[2]} />
          </div>
        </div>
        <Link href="/videos"><a className="hidden md:block float-right font-bold leading-none mt-10 px-5 py-3 rounded-full text-gray-900 bg-gray-300 hover:bg-gray-200 transition-colors duration-150">mehr Videos <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-0.5"  width="24" height="14" viewBox="18 2 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square"><path d="M 4.903 11.986 L 42.971 12.252 M 36.971 5.252 L 43.971 12.252 L 36.971 19.252"></path></svg></a></Link>
        <Link href="/videos"><a className="md:hidden float-right font-bold leading-none mt-4 px-5 py-3 rounded-full text-white bg-gray-900">mehr Videos <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-0.5"  width="24" height="14" viewBox="20 2 20 24" fill="none" stroke="currentColor" strokeWidth="3.8" strokeLinecap="square"><path d="M 4.903 11.986 L 42.971 12.252 M 36.971 5.252 L 43.971 12.252 L 36.971 19.252"></path></svg></a></Link>
      </section>
	)
}


function VideoThumbnail({data: {title, uid, thumbnail}}) {
  return (
    <a href={`/videos/${uid}`} rel="noopener noreferrer" aria-title={title} className="h-0 block bg-black relative pb-16:9 w-full overflow-hidden shadow-sm hover:shadow rounded-md md:rounded-none">
      <div className="group absolute w-full h-full top-0 right-0 grid stack" >
        <Image alt="Youtube Thumbnail" className="desaturate" src={`https://img.youtube.com/vi/${uid}/mq${thumbnail}.jpg`} layout="fill" />
        <div className="h-full group-hover:opacity-30 transition-opacity duration-200 w-full bg-gradient-to-tr from-yellow-200 to-coolgray-700 opacity-20 md:opacity-20 bg-blend-saturation"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-3 text-white text-3xl md:text-xl lg:text-2xl font-extrabold leading-none md:tracking-wide" style={{filter: "drop-shadow(0 0 20px rgb(40 40 40 / 80%))"}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 md:h-7 md:w-7 -ml-0.5 mb-2" viewBox="0 0 56 56" fill="currentColor">
            <path d="M28,56A28.008,28.008,0,0,1,17.1,2.2,28.007,28.007,0,0,1,38.9,53.8,27.825,27.825,0,0,1,28,56ZM20.355,18.043V41.378l21-11.667-21-11.668Z" fill="currentColor"/>
          </svg>
          {title}
        </div>
      </div> 
    </a>
  )
}