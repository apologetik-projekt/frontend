import { useState } from "react"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useNavigation } from "../lib/hooks"

export default function MobileMenu({nav = []}) {
	const [open, setOpen] = useState(false)

	// const nav = [
	// 	{ title: "Home", slug: "/" },
	// 	{ title: "Über uns", slug: "", children: [
	// 			{title: "Das Team", slug: ""},
	// 			{title: "Was machen wir?", slug: ""},
	// 			{title: "Was ist Apologetik?", slug: ""}
	// 		] 
	// 	},
	// 	{ title: "Blog", slug: "/blog" },
	// 	{ title: "Videos", slug: "/videos" },
	// 	{ title: "Spenden", slug: "" },
	// 	{ title: "Kontakt", slug: "" }
	// ]
	
	const { activePath } = useNavigation()

	
	const variants = {
		open: {
			width: '100vw',
			height: '100vh',
			marginTop: 0, 
			marginRight: 0,
			borderRadius: 0,
			transition: {
				duration: 0.5, type: "spring", ease: "easeInOut", bounceDamping: 6,
				borderRadius: {	delay: 0,	duration: 0.1	}
			}
		},
		closed: {
			width: '3.5rem',
			height: '3.5rem',
			marginTop: '1rem',
			marginRight: '1rem',
			borderRadius: '100%',
			transition: {
				duration: 0.2,
				delay: open ? 0.3 : 0,
				borderRadius: {	delay: open ? 0.5 : 0.1,	duration: 0.08	}
			}
		}
	}
	const menu = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.075
			}
		}
	}
	
	const menuItem= {
		hidden: { 
			opacity: 0, y: 30, x: 40
		},
		show: { 
			opacity: 1, y: 0, x:0,
			transition: { 
				duration: 0.4, type: "tween", ease: "easeOut",
			} 
		},
		exit: {
			opacity: 0, x:20, y: 10, transition: {delay: 0.2, duration: 0.15}
		}
	}

 	return (
		<nav className="fixed z-50 right-0 md:!hidden">
			<motion.div 
				variants={variants} 
				initial={false}
				animate={open ? "open": "closed"} 
				exit="closed"
				className="float-right text-white px-4 bg-gradient-to-tr from-black to-gray-800">
				<motion.button
					onClick={()=>{setOpen(!open)}} 
					type="button" 
					exit={{}}
					className="fixed rounded-full clean-outline right-4 top-4 w-14 h-14 no-tap active:bg-gray-700">
					<span className="sr-only">Navigation öffnen</span>
					<svg width="24" height="24" fill="none" className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform scale-125">
						<path d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg> 
				</motion.button>
				{open ? <>
					<motion.ol 
						variants={menu}
    				initial="hidden"
						exit="exit"
    				animate="show" className="mt-10 p-4 text-7xl font-serif space-y-2 flex flex-col mb-4">
							{nav.map((item)=>(
								<motion.li key={item.title} variants={menuItem}>
									<Link href={`/${item.slug}`}><a className={activePath(item) ? "text-stroke" : "active:text-stroke"}>{item.title}</a></Link>
								</motion.li>
							))}
						</motion.ol>
						<motion.div exit={{opacity: 0}} initial={{opacity: 0, y: 3}} animate={{opacity: 1, y:0, transition: {ease: "easeInOut", delay: 0.58, duration: 0.4} }}>
						<a className="ml-4 mt-42 leading-tight bg-gray-500 bg-opacity-20 hover:bg-opacity-40 rounded-full px-5 py-3 font-sans font-medium text-gray-300 text-sm inline-flex items-center" href="https://instagram.com/derapologetikchannel/" target="_blank">
							<svg className="inline mr-2 -ml-0.5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
							Instagram
						</a>
						<a className="ml-4 mt-42 leading-tight bg-gray-500 bg-opacity-20 hover:bg-opacity-40 rounded-full px-5 py-3 font-sans font-medium text-gray-300 text-sm inline-flex items-center" href="https://www.youtube.com/channel/UCE899ZLT0E2U91L4CXoBDig" target="_blank">
							<svg className="inline mr-2 -ml-0.5"  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/></svg>
							Youtube 
						</a>
						</motion.div>
						</> : null }
			</motion.div>
			
			<style global jsx>{`body {overflow: ${open ? 'hidden': 'auto'};}`}</style>
		</nav>
 )
}