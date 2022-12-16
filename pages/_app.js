import Head from 'next/head'
import 'styles/App.scss'
import { MenuBar } from 'components'
import { store } from '@reduxFolder'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
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
            </Provider>
        </>
    )
}
