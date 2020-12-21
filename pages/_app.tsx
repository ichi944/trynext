import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
				<title>Nextjsの素振り</title>
        <meta name="viewport" content="viewport-fit=cover" />
				<meta property="og:title" content="Nextjsの素振り" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp