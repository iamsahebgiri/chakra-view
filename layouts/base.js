import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container } from '@chakra-ui/react';
import DarkModeButton from '@/components/DarkModeButton';
import Header from '@/components/Header';

export default function BaseLayout(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Chakra View',
    description: `Over 30+ of professionally designed and fully responsive Chakra UI components ready to drop into your React project.`,
    image: 'https://chakra-view.vercel.app/assets/banner.jpg',
    type: 'website',
    ...customMeta,
  };
  return (
    <Box>
      <Head>
        <title>{`${meta.title} / Chakra View`}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://chakra-view.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://chakra-view.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Chakra View" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={`${meta.title} / Chakra View`} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chakra-view" />
        <meta name="twitter:title" content={`${meta.title} / Chakra View`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      {/* <DarkModeButton /> */}
      <Header />
      <Box py={16} minH="100vh">
        {children}
      </Box>
    </Box>
  );
}
