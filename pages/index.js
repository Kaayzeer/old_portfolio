import React, { useState } from "react";
//components
import Landing from "../components/Landing/Landing.jsx";
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
    <>
      <>
        <Landing />
        <Skills />
        <Projects repos={repos} />
      </>

      <Spacer y={3} />
    </>
  );
}
