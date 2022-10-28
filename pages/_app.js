import Head from 'next/head'
import 'styles/App.scss'
import { Navbar } from 'components'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next.js - CRUD </title>
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
