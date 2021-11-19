import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

// import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Header />
      <Box
        as="main"
        pt="16"
        minH="100vh"
        bg={useColorModeValue("gray.50", "gray.900")}
      >
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
