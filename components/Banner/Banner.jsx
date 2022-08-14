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
const { title, subTitle } = data;

//components
import Layout from "../Layout/Layout";

export default function Banner() {
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);

  const { theme } = useTheme();

  return (
    <>
      <Container
        md
        responsive
        display="flex"
        alignItems="center"
        css={{ height: "100vh" }}
      >
        <Row justify="center" align="center">
          <Col
            /*  css={{ justifyContent: "flex-start" }} */
            align={`${!isMd ? "start" : "center"}`}
          >
            <Text h1 size={`${!isLg ? "4em" : "3em"} `}>
              {title}
            </Text>
            <Text h3 size={`${!isLg ? "2em" : "1.5em"} `}>
              {subTitle}
            </Text>
            <Spacer y={2} />

            <Button color="secondary" size="md">
              Get in touch
            </Button>
          </Col>
          {!isMd && (
            <Image
              src={"/images/developer.svg"}
              height={!isLg ? 800 : 700}
              width={!isLg ? 1000 : 800}
              alt="Landing Image"
            />
          )}
        </Row>
      </Container>
    </>
  );
}
