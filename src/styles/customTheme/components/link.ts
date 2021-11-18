import { DeepPartial, Theme } from "@chakra-ui/react";

const Link: DeepPartial<Theme["components"]["Link"]> = {
  baseStyle: {
    _focus: { boxShadow: "0 0 0 2px #fb923c" },
  },
};

export default Link;
