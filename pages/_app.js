import '../styles/index.css'
import Layout from '../components/layout'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
//import { AnimatePresence, AnimateSharedLayout } from "framer-motion"

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps, router }) {
  //console.log(router)
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Layout hero={Component.hero}> 
      
        <motion.div key={router.asPath} initial={router.asPath !== '/' ? "pageInitial" : false} exit={router.asPath !== '/' ? "pageInitial" : {}} animate="pageAnimate" variants={{
            pageInitial: {
              opacity: 0,
              y: 20,
              transition: { ease: 'easeIn'}
            },
            pageAnimate: {
              opacity: 1,
              y: 0,
              transition: {ease: 'easeOut'}
            },
          }}>
          <Component {...pageProps} key={router.route}/>
        </motion.div>
        
      </Layout>
    </AnimatePresence>
  )
}

export default MyApp
