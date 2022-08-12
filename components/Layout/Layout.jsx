import * as React from "react";
import Head from "next/head";
import Footer from "../Footer/footer";
/* import Nav from "../Nav/Nav"; */
import { Container, useTheme } from "@nextui-org/react";
import styles from "../../styles/Home.module.css";
import Navbar from "../Navbar/Navbar";

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
        className={styles.section}
        css={{ backgroundColor: theme?.colors.gray400.value }}
      >
        <div className={styles.border}>
          <Navbar />
          {children}
          {/*       <Footer /> */}
        </div>
      </Container>
    </>
  );
};

export default Layout;
