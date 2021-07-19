import '../styles/index.css'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

// function handleExitComplete() {
//   if (typeof window !== 'undefined') {
//     window.scrollTo({ top: 0 })
//   }
// }

function MyApp({ Component, pageProps, router }) {
  
  const blockAnimation = useBlockAnimation({router})
  
  return (
    <>
      <DefaultSeo
            title="Der Apologetik Channel - Christliche Apologetik"
            description="Christentum. Nicht nur schön, sondern auch wahr. Mit dem Apologetik Channel möchten wir Christen zurüsten, Zweiflern begegnen, Skeptikern antworten."
            openGraph={{
              type: 'website',
              locale: 'de_DE',
              url: 'https://apologetik-channel.de/',
              site_name: 'Der Apologetik Channel',
            }}
            twitter={{ cardType: 'summary_large_image' }}
      />
      
      <Layout hero={Component.hero}> 
        <AnimatePresence>
          <motion.div key={router.asPath} initial={router.asPath !== '/' ? "pageInitial" : false} exit={router.asPath === '/' || blockAnimation ? {} : "exit"} animate="pageAnimate" variants={{
              pageInitial: {
                opacity: 0.5,
                y: 12,
                transition: { ease: 'easeIn'}
              },
              pageAnimate: {
                opacity: 1,
                y: 0,
                transition: {ease: 'easeOut'}
              },
              exit: {
                opacity: 1,
                y: -4,
                transition: { duration: 0.1, delay: 0 }
              }
            }}>
              
            <Component {...pageProps} key={router.route}/>
          </motion.div>
          </AnimatePresence>
        </Layout>
      
    </>
  )
}

export default MyApp

function useBlockAnimation({router}){
  const [blockAnimation, setBlockAnimation] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url) => {
      setBlockAnimation(false)
      if (url == '/') setBlockAnimation(true)
      console.log(router)
    }
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return blockAnimation
}
