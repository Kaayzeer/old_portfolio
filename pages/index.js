//next
import Head from "next/head";
import Image from "next/image";

//styles
import styles from "../styles/Home.module.css";

//nextUI
/* import { Button } from "@nextui-org/react"; */

//components
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner.jsx";

export default function Home() {
  return (
    <Layout>
      <Banner />

      {/* <Button>Click me</Button> */}
    </Layout>
  );
}
