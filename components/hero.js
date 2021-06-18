import Image from 'next/image'
import {motion} from 'framer-motion'

export default function Hero({children, heading, image}){
	const variants = {
		before: {
			x: '40%',
			y: -20,
			opacity: 0,
			rotate: '0deg'
		},
		after: { x: '8%', rotate: '-2deg', opacity: 1, y:0, transition: {duration: 0.6,type:"tween", ease: "easeOut"}}
	}
	const textVariant = {
		hidden: {
			y: 50,
			opacity: 0
		}, 
		show: {
			opacity: 1,
			y:0,
			transition: {
				duration: 0.7,
				type: "tween",
				ease: "easeOut"
			}
		}
	}
	return (
		<header className="min-h-[90vh] md:min-h-[50vh] md:max-h-[95vh] w-full text-white overflow-hidden noise relative grid stack items-end">
        <div className="radial-gradient min-h-[50vh] md:min-h-[50vh] md:max-h-[95vh] w-full h-full pb-24 mix-blend-hard-light isolate items-stretch transition-colors">
					{children}
					<div className="max-w-5xl mx-auto -mt-2 md:mt-1 px-4 sm:px-5 md:px-7 lg:px-0">
          <section className="flex flex-col md:flex-row-reverse justify-between space-x-2 pb-4">
            <motion.div variants={variants} initial="before" animate="after" className="my-2 md:mt-0 md:w-3/5">
              <Image alt="Zwei Personen unterhalten sich" objectFit="cover" width="570" className="m-0 rounded-lg" height="360" loading="eager" src={image} />
            </motion.div>
            <motion.div variants={textVariant} initial="hidden" animate="show" className="-mt-6 sm:mt-8 md:w-2/5 md:min-w-[350px]">
							<div className="leading-7 text-xl text-white text-opacity-90" id="heading" dangerouslySetInnerHTML={{__html: heading}} ></div>
            </motion.div>
          </section>
          </div>
        </div>

				<svg id="bg-slash" className="z-10" preserveAspectRatio="none" width="100%" height="60px" viewBox="0 0 1000 50">
					<path width="100%" height="100%" d="M 0 50 L 1000 50 L 1000 0 L 0 50 Z" fill="white" stroke="none"/>
				</svg>

				<style jsx global>{`
				#heading ul {
					list-style-type: disc;
					margin-left: 1.25rem;
				}
				#heading ul > * + * {
					--tw-space-y-reverse: 0;
					margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
					margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
				}
				#heading > h1 {
					color: white;
					font-family: "Moret-Bold", Georgia, serif;
					filter: drop-shadow(0 -15px 15px rgb(0,0,0,0.4));
					font-size: 3rem;
					line-height: 1;
					margin-bottom: 1.5rem;
				}
				@media screen and (min-width: 768px){
					#heading > h1 {
						font-size: 3.75rem;
						line-height: 0.94;
					}
				}
				`}
				</style>
      </header>

	)
}