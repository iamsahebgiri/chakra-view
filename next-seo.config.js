/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Chakra View",
  titleTemplate: "%s | Chakra View",
  defaultTitle: "Chakra View",
  description: "Over 30+ professionally designed and fully responsive Chakra UI compoents.",
  canonical: "https://chakra-view.vercel.app",
  openGraph: {
    url: "https://chakra-view.vercel.app",
    title: "Chakra View",
    description: "Over 30+ professionally designed and fully responsive Chakra UI compoents.",
    images: [
      {
        url: "https://chakra-view.vercel.app/og-image.jpg",
        alt: "chakra-view.vercel.app og-image",
      },
    ],
    site_name: "Chakra View",
  },
  twitter: {
    handle: "@iamsahebgiri",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
