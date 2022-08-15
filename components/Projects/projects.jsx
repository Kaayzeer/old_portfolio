import React from "react";
//next
import Image from "next/image";
//nextUI
import {
  Container,
  Col,
  Row,
  Text,
  Button,
  Spacer,
  useTheme,
} from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//userData
import { data } from "../../data/";
const { projects } = data;

export default function Banner() {
  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);

  return (
    <>
      <Container
        xl
        responsive
        display="flex"
        alignItems="center"
        justify="center"
        css={{
          height: "100vh",
          padding: `0 ${is2Xl ? "10%" : "20%"} `,
        }}
      >
        <Col align={`${!isMd ? "start" : "center"}`}>
          <Text h1 size={`${!isLg ? "3.6em" : "2.7em"} `}>
            {projects.title}
          </Text>
          {/* <Text h3 size={`${!isLg ? "2em" : "1.5em"} `}>
            {subTitle}
          </Text> */}
          <Spacer y={2} />
        </Col>
      </Container>
    </>
  );
}
