import { DeepPartial, Theme } from "@chakra-ui/react";

const fonts: DeepPartial<Theme["fonts"]> = {
  heading: `"Inter","Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  body: `"Inter","Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  mono: `"IBM Plex Mono",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;`,
};

export default fonts;
