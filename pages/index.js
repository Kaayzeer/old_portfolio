//components
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";

//nextUI
import { Spacer } from "@nextui-org/react";

//userData
import { userData } from "../data/index";
const {
  projects: { baseURI },
} = userData;

export async function getStaticProps() {
  const res = await fetch(baseURI);

  const data = await res.json();

  return { props: { repos: data } };
}

export default function Home({ repos }) {
  return (
    <Layout title="Nikolas Rosinelli Portfolio">
      <Banner />
      <Skills />
      <Projects repos={repos} />
      <Spacer y={3} />
    </Layout>
  );
}
