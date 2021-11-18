import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";
import Link from "./components/link";
import fonts from "./fonts";
import styles from "./styles";

const customTheme = extendTheme({
  styles,
  fonts,
  colors,
  components: {
    Button,
    Link,
  },
});

export default customTheme;
