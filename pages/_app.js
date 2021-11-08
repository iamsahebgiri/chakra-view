import dynamic from 'next/dynamic';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from 'theme';
import "@fontsource/inter/latin.css";
import '@/styles/index.css';

const NProgress = dynamic(() => import('../components/NProgress'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <NProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
