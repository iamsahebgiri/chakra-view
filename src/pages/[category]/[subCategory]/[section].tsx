import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";

import Layout from "components/layout";
import Presentation from "components/Presentation";
import { ComponentProps } from "types/component";
import getComponents from "utils/getComponents";

type Meta = {
  category?: string;
  subCategory?: string;
  section?: string;
};

function Section() {
  const router = useRouter();
  const [meta, setMeta] = useState<Meta>({
    category: "",
    subCategory: "",
    section: "",
  });
  const [components, setComponents] = useState<ComponentProps[]>([]);

  useEffect(() => {
    const { category, subCategory, section } = router.query;
    if (category && subCategory && section) {
      const { meta: info, components: filteredComponents } = getComponents(
        category,
        subCategory,
        section
      );
      setMeta(info);
      setComponents(filteredComponents);
    }
  }, [router]);

  return (
    <Layout>
      <Box maxW="7xl" mx="auto" px="4" py="12">
        <Breadcrumb
          fontWeight="medium"
          fontSize="sm"
          color="gray.600"
          spacing="3"
          separator={<Icon as={HiChevronRight} color="gray.400" />}
        >
          <BreadcrumbItem>
            <Text>{meta.category}</Text>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Text>{meta.subCategory}</Text>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading as="h2" mt="2" size="lg">
          {meta.section}
        </Heading>

        <Stack mt="10" spacing="16">
          {components.map((component) => (
            <Presentation
              key={component.name}
              path={component.path}
              name={component.name}
              creator={component.creator}
              tags={component.tags}
            />
          ))}
        </Stack>
      </Box>
    </Layout>
  );
}

export default Section;
