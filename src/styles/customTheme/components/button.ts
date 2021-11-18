import { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    _focus: { boxShadow: "0 0 0 2px #fb923c" },
  },
};

export default Button;
