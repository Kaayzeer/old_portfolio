import React from "react";
//components
import Landing from "../components/Landing/Landing.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
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
        <Navbar />
        <Sidebar />
        <Landing />
        <Skills />
        <Portfolio repos={repos} />
        {/*  <Contact /> */}
      </Container>
    </>
  );
}
