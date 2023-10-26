import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'HelveticaNeue Black', sans-serif`,
    body: `'Oswald', sans-serif`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#131313",
      },
    },
  },
});

export default theme;
