import Head from 'next/head'
import 'styles/App.scss'
import { MenuBar } from 'components'
import { ContextProvider } from '../context/usersContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  
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
            {loading ? (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
              }}>
                <CircularProgress />
              </div>
            ) : (
              <Component {...pageProps} />
            )}
          </div>
        </div>
      </ContextProvider>
    </>
  )
}