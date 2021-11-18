export type NavLink = {
  name: string;
  href: string;
  isExternal: boolean;
};

const links = [
  {
    name: "Cookbooks",
    href: "/cookbooks/",
    isExternal: false,
  },
  {
    name: "Contribute",
    href: "/docs/contribute",
    isExternal: false,
  },
  {
    name: "Github",
    href: "https://github.com/iamsahebgiri/chakra-view/",
    isExternal: true,
  },
  {
    name: "Sponsor",
    href: "https://www.patreon.com/iamsahebgiri",
    isExternal: true,
  },
];

export { links };
