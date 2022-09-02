import * as React from "react";

//next
import Head from "next/head";

//nextUI
//next ui
import { Container, useTheme } from "@nextui-org/react";
//components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, title, keywords, description }) => {
  const { theme } = useTheme();

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
        css={{ backgroundColor: theme?.colors.gray200.value }}
      >
        <Navbar />
        <Sidebar />
        {children}
      </Container>
    </>
  );
};

export default Layout;
