import { Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props) => ({
    "html, body": {
      fontFeatureSettings: "'cv02','cv03','cv04' ,'cv11'",
    },
    a: {
      color: props.colorMode === "dark" ? "orange.300" : "orange.500",
    },
  }),
};

export default styles;
