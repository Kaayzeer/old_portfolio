import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      /*     primaryLight: "#FFF0D5ff",
      primaryLightHover: "#EEE1D0ff",
      primaryLightActive: "#DDD2CCff",
      primaryLightContrast: "#CCC3C7ff",
      primary: "#BBB4C2ff",
      primaryBorder: "#AAA4BEff",
      primaryBorderHover: "#9995B9ff",
      primarySolidHover: "#8886B4ff",
      primarySolidContrast: "#7777B0ff",
      primaryShadow: "#6668ABff", */
      /* color: "#777", */
    }, // optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      secondary: "#e0cbf5",
    }, // optional
  },
});

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
