import Link from 'next/link'
import { useNavigation } from '../lib/hooks'

export default function Navigation({background = "light", nav = [{}]}){
	const { navigation, activePath } = useNavigation()

	const activeStyles = `bg-gray-300 ${background == 'dark' ? 'bg-opacity-10' : 'bg-opacity-70'}`

	return(
		<nav className="w-full relative z-10 max-w-5xl mx-auto py-6 px-4 sm:px-5 md:pl-7 lg:px-0 flex justify-between items-center">
			<Link href="/"><a className="font-sans leading-none font-black tracking-wide text-xl ml-1">DER APOLOGETIK <br/> CHANNEL</a></Link>
			<ul className="hidden md:flex space-x-2 leading-none items-start font-medium uppercase text-nav">
				{navigation.map((item)=>(
					<Link key={item.slug || 'home'} href={item.hasChildren ? "" : `/${item.slug}`}>
						<li className="group relative leading-none">
							<a className={`px-3 py-2 rounded-md ${background == 'dark' ? 'hover:bg-gray-300' : 'hover:bg-gray-800' } hover:bg-opacity-10 ${item.hasChildren ? "hover:cursor-menu" : "hover:cursor-pointer"}  whitespace-nowrap ${activePath(item) ? activeStyles : null}`}>
								<span>{item.title}</span>
							</a>
								{(item.children?.length !== undefined && item.children.length > 0) && 
									<div className="hidden group-hover:block absolute top-4 left-0 normal-case text-gray-700 mt-0.5 whitespace-nowrap" style={{filter: "drop-shadow(0 -2px 5px rgb(0 0 0 / 10%))"}}>
									<div className="h-2 w-2 absolute top-3 left-3 bg-white shadow transform rotate-45 z-0"></div>
									<ul className="py-1 px-0.5 z-10 relative bg-white text-gray-800 rounded-md mt-4">
										{item.children.map((subitem)=>(
											<Link key={subitem.slug} href={"/"+subitem.slug}><a><li className={`px-3 py-2 hover:bg-gray-200 rounded  ${activePath(subitem, true) ? "text-stroke-100 text-black hover:!text-black" : null}`}>{subitem.title}&nbsp;</li></a></Link>
										))}
									</ul>
									</div>
								}
						</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}