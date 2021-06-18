import '../styles/index.css'
//import { AnimatePresence, AnimateSharedLayout } from "framer-motion"

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps, router }) {
  return (
    <Component {...pageProps} key={router.route}/>     
  )
}

export default MyApp
