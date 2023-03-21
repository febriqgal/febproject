import "@/styles/globals.css";
import AuthStateChangeProvider from "@/context/auth";
import { UserProvider } from "@/context/user";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { useSSR } from "@nextui-org/react";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  const { isBrowser } = useSSR();
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: "$green200",
        primaryLightHover: "$green300",
        primaryLightActive: "$green400",
        primaryLightContrast: "$green600",
        primary: "#4ADE7B",
        primaryBorder: "$green500",
        primaryBorderHover: "$green600",
        primarySolidHover: "$green700",
        primarySolidContrast: "$white",
        primaryShadow: "$green500",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#5E1DAD",

        // you can also create your own color
        myColor: "#00000000",

        // ...  more colors
      },
    },
  });
  return (
    isBrowser && (
      <>
        <NextNProgress color="#0C4A6E" options={{ showSpinner: false }} />
        <NextUIProvider theme={theme}>
          <UserProvider>
            <AuthStateChangeProvider>
              <Component {...pageProps} />
            </AuthStateChangeProvider>
          </UserProvider>
        </NextUIProvider>
      </>
    )
  );
}
