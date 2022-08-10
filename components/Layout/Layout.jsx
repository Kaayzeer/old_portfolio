import * as React from "react";
import Head from "next/head";
import Footer from "../Footer/footer";
/* import Nav from "../Nav/Nav"; */

const Layout = ({ children, title, keywords, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {children}
      <Footer />
    </>
  );
};

export default Layout;
