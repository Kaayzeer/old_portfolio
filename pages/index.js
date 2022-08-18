import React, { useState, useRef } from "react";
//components
import Landing from "../components/Landing/Landing.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

//nextUI
import { Spacer, Container, useTheme } from "@nextui-org/react";

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
  const { theme } = useTheme();
  /*   const contactRef = useRef(); */

  return (
    <>
      <Container
        xl
        responsive
        css={{
          backgroundColor: theme?.colors.gray200.value,
          position: "relative",
        }}
      >
        <Navbar /* contactRef={contactRef}  */ />

        <Landing /* contactRef={contactRef} */ />
        <Skills />
        <Projects repos={repos} />
        <Sidebar />
        {/*  <Contact /> */}
      </Container>
    </>
  );
}
