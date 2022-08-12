import React from "react";
import styles from "./banner.module.css";
import { Image } from "@nextui-org/react";
import { Container, Col, Row, Text, Button, Spacer } from "@nextui-org/react";
import Name from "./Name";
//nextUI

import { motion } from "framer-motion";
export default function Banner() {
  const h1 = "Nikolas Rosinelli";
  const h3 = "Web developer";
  return (
    <Container md responsive>
      <Spacer y={2} />
      <Row justify="center" align="center">
        <Col justify="center" align="start">
          <Text h1>{h1}</Text>
          <Text h3>{h3}</Text>
          <Spacer y={2} />
          <Button color="gradient" size="md">
            click
          </Button>
        </Col>
        <Image
          src={"/images/bannerpic4.svg"}
          height={300}
          width={400}
          alt="Default Image"
          objectFit="cover"
        />
      </Row>
    </Container>
  );
}
