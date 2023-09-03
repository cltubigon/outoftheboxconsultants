// theme.js (or your chosen filename)
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  breakpoints: {
    ph: '0px',
    tl: "768px", // Custom medium breakpoint
    lt: "1024px", // Custom large breakpoint
    dt: "1366px", // Custom extra-large breakpoint
  },
});

export default customTheme;