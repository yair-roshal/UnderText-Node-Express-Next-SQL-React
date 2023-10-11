import Head from 'next/head'
import 'styles/App.scss'
import { MenuBar } from 'components'
// import { ContextProvider } from './context/userOptionContext'
import { ContextProvider } from '../context/usersContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
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
      </ContextProvider>
    </>
  )
}
