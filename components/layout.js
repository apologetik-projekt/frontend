//import Alert from '../components/alert'
import Meta from '../components/meta'
import Head from 'next/head'
import MobileMenu from '../components/mobile-menu'
import Navigation from '../components/navigation'

export default function Layout({children, hero}) {
  return (
    <>
      <Meta />
      <Head>
        <title>Der Apologetik Channel</title>  
      </Head>
      <div className="min-h-screen bg-gray-100">
        <MobileMenu />
        {!hero && <Navigation /> }
        <main>{children}</main>
      </div>
    </>
  )
}
