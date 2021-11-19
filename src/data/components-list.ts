/* eslint-disable sonarjs/no-duplicate-string */
export default {
  categories: [
    {
      id: "marketing",
      title: "Marketing",
      description:
        "Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.",
      subCategories: [
        {
          id: "page-sections",
          title: "Page Sections",
          sections: [
            {
              id: "hero-sections",
              title: "Hero sections",
              image: "hero-sections.svg",
              components: [
                {
                  creator: "Saheb Giri",
                  name: "With sign up",
                  path: "marketing/page-sections/hero-sections/with-sign-up.tsx",
                  tags: ["kutty"],
                },
                {
                  creator: "Saheb Giri",
                  name: "Simple centered",
                  path: "marketing/page-sections/hero-sections/simple-centered.jsx",
                  tags: ["kutty"],
                },
                {
                  creator: "Saheb Giri",
                  name: "Split",
                  path: "marketing/page-sections/hero-sections/split.jsx",
                  tags: ["kutty"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
