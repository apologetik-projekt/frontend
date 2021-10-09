//import Alert from '../components/alert'
import Meta from '../components/meta'
import MobileMenu from '../components/mobile-menu'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function Layout({children, hero, theme}) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gray-100 bg-opacity-90">
        <MobileMenu />
        {!hero &&  <Navigation background={theme || "light"} />}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
