import componentsList from "data/components-list";

function getComponents(
  category: string | string[] | undefined,
  subCategory: string | string[] | undefined,
  section: string | string[] | undefined
) {
  const categories = componentsList.categories.filter(
    (c) => c.id === category
  )[0];
  const subCategories = categories?.subCategories.filter(
    (sbc) => sbc.id === subCategory
  )[0];
  const sections = subCategories?.sections.filter((s) => s.id === section)[0];
  if (sections !== undefined) {
    return {
      meta: {
        category: categories.title,
        subCategory: subCategories.title,
        section: sections.title,
      },
      components: sections?.components,
    };
  }
  return {
    meta: {},
    components: [],
  };
}

export default getComponents;
