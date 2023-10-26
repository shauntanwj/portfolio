import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`

      @font-face {
        font-family: 'HelveticaNeue Black';
        src: url('./assets/fonts/HelveticaNeue BlackCond.ttf') format('ttf');
      `}
  />
);

export default Fonts;
