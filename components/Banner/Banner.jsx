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
import { userData } from "../../data/";
const { title, subTitle } = userData;

export default function Banner() {
  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);

  const {
    theme: { colors },
  } = useTheme();

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
        <Row justify="center" align="center">
          <Col align={`${!isMd ? "start" : "center"}`}>
            <Text h1 size={`${!isLg ? "3.6em" : "2.7em"} `}>
              {title}
            </Text>
            <Text h3 size={`${!isLg ? "2em" : "1.5em"} `}>
              {subTitle}
            </Text>
            <Spacer y={2} />

            <Button
              css={{
                backgroundColor: colors.red400.value,
                color: colors.gray800.value,
              }}
              size="md"
            >
              Get in touch
            </Button>
          </Col>
          {!isMd && (
            <Image
              src={"/images/developer.svg"}
              height={!isLg ? 700 : 600}
              width={!isLg ? 900 : 700}
              alt="Landing Image"
            />
          )}
        </Row>
      </Container>
    </>
  );
}
