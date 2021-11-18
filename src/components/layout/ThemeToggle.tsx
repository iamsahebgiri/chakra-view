import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      rounded="full"
      variant="ghost"
      aria-label="Toggle theme"
      icon={<Icon h="6" w="6" as={colorMode === "light" ? HiMoon : HiSun} />}
      _focus={{ boxShadow: "none" }}
    />
  );
};

export default ThemeToggle;
