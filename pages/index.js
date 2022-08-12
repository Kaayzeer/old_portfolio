//next
import Head from "next/head";
import Image from "next/image";

//styles
import styles from "../styles/Home.module.css";

//components
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner.jsx";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout title="Nikolas Rosinelli Portfolio">
      <Banner />

      <Spacer y={3} />
    </Layout>
  );
}
