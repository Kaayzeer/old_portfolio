import React, { useState } from "react";
//components
import Landing from "../components/Landing/Landing.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";

//nextUI
import { Spacer } from "@nextui-org/react";

//userData
import { userData } from "../data/index";
import FormModal from "../components/FormModal/FormModal.jsx";
const {
  projects: { baseURI },
} = userData;

export async function getStaticProps() {
  const res = await fetch(baseURI);

  const data = await res.json();

  return { props: { repos: data } };
}

export default function Home({ repos }) {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  return (
    <>
      <Landing openModal={openModal} />
      <Skills />
      <Projects repos={repos} />
      {visible && <FormModal setVisible={setVisible} visible={visible} />}
      <Spacer y={3} />
    </>
  );
}
