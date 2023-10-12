import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const ColorModeIconSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <IconButton
        aria-label="toggle theme"
        size="md"
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <RiSunLine /> : <RiMoonLine />}
      ></IconButton>
    </>
  );
};

export default ColorModeIconSwitch;
