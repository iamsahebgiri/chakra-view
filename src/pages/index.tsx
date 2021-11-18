import { Box } from "@chakra-ui/react";

import ComponentsList from "components/ComponentsList";
import CTASection from "components/CTASection";
import Layout from "components/layout";

const Home = () => {
  return (
    <Layout>
      <Box w="full">
        <CTASection />
        <ComponentsList />
      </Box>
    </Layout>
  );
};

export default Home;
