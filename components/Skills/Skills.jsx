//nextUi
import {
  Container,
  Col,
  Row,
  Text,
  Button,
  Spacer,
  Image,
  User,
  useTheme,
} from "@nextui-org/react";
//userData
import { data } from "../../data/";
const { skills } = data;
//material ui
import Avatar from "@mui/material/Avatar";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//functions
import { firstLetterToUpperCase } from "../../functions/reusable";
//react
import React from "react";
//iconArray
import { iconArray } from "./iconArray";
//components
import Layout from "../Layout/Layout";

export default function Skills() {
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);

  let color = skills.languages.map((item, idx) => item.color);

  const { theme } = useTheme();

  return (
    <>
      <Container
        md
        responsive
        css={{ height: "100vh", backgroundColor: theme?.colors.gray50.value }}
      >
        <Spacer y={5} />
        <Row justify="center" align="center">
          <Image
            src={"/images/device.svg"}
            height={400}
            width={1000}
            alt="Skills Image"
          />

          <Col css={{ marginBottom: "auto" }} align="center">
            <Text h1>{firstLetterToUpperCase(skills.title)}</Text>
            <Row
              justify="center"
              align="center"
              wrap="wrap"
              css={{ maxWidth: "50%" }}
            >
              {color.map((color, idx) => {
                if (idx > 13) return;
                const Icon = iconArray[idx];

                return (
                  <Avatar
                    key={idx}
                    sx={{ bgcolor: color, margin: "0px 3px" }}
                    /* variant="rounded" */
                    style={{ marginTop: "10px" }}
                  >
                    {Icon}
                  </Avatar>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Spacer y={2} />
      </Container>
    </>
  );
}
