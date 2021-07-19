//import Alert from '../components/alert'
import Meta from '../components/meta'
import MobileMenu from '../components/mobile-menu'
import Navigation from '../components/navigation'
export default function Layout({children, hero}) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gray-100">
        <MobileMenu />
        {!hero &&  <Navigation />}
        <main>{children}</main>
      </div>
    </>
  )
}
