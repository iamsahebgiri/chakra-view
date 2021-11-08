// import ComponentDemo from '@/components/component-demo';
import { Example } from "@/components/temp/Example";
import BaseLayout from "@/layouts/base";
import { Box, Heading } from "@chakra-ui/react";

export default function ViewsPage() {
  return (
    <BaseLayout title="Views">
      <Box maxW="7xl" mx="auto" py="16" px="3">
        <Box mt="3" mb="6">
          <Heading>Authentication</Heading>
        </Box>

        <Example
          template={{ filename: "articleList", name: "Article List" }}
          category={{ id: "blog" }}
          subCategory={{ id: "blog-article-list" }}
        />
      </Box>
    </BaseLayout>
  );
}
