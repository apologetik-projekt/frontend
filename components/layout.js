import Alert from '../components/alert'
import Meta from '../components/meta'
import Head from 'next/head'

export default function Layout({ preview, children, title}) {
  return (
    <>
      <Meta />
      <Head>
        <title>Der Apologetik Channel {title ? `- ${title}` : ""}</title>  
      </Head>
      <div className="min-h-screen bg-gray-100">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  )
}
