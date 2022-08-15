import * as React from "react";

//next
import Head from "next/head";

//nextUI
import { Container, useTheme } from "@nextui-org/react";

//styles
import styles from "../../styles/Home.module.css";

//components
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, title, keywords, description }) => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Container
        xl
        responsive
        css={{ backgroundColor: theme?.colors.gray50.value }}
      >
        <Navbar />
        {children}
        {/*       <Footer /> */}
      </Container>
    </>
  );
};

export default Layout;
