import Head from 'next/head'
import 'styles/App.scss'
import { Navbar } from 'components'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Under Text</title>
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>

            <div>
                <Navbar />
                <div>
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    )
}
