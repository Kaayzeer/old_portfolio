//components
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner.jsx";
import Skills from "../components/Skills/Skills.jsx";

//nextUI
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout title="Nikolas Rosinelli Portfolio">
      <Banner />
      <Skills />
      <Spacer y={3} />
    </Layout>
  );
}
