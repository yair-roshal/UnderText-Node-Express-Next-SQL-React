import Head from 'next/head'
import 'styles/App.scss'
import { MenuBar } from 'components'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Under Text</title>
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>

            <div>
                <MenuBar />
                <div>
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    )
}
