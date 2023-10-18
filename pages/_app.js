import Head from 'next/head'
import 'styles/App.scss'
import { MenuBar } from 'components'
// import { ContextProvider } from './context/userOptionContext'
import { ContextProvider } from '../context/usersContext';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  

   const router = useRouter();
  
  useEffect(() => {
    console.log(`URL изменился: ${router.asPath}`);
    // Выполните здесь необходимые действия при изменении URL
  }, [router.asPath]);
  
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
