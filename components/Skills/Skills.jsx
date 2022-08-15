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
import { userData } from "../../data/";
const { skills } = userData;
//material ui
import Avatar from "@mui/material/Avatar";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//functions
import { firstLetterToUpperCase } from "../../functions/reusable";
//react
import React from "react";
//iconArray
import { iconArray } from "../../lib/iconArray";
//components
import Layout from "../Layout/Layout";

export default function Skills() {
  const is2Xl = useMediaQuery(1400);

  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);

  let color = skills.languages.map((item, idx) => item.color);

  const { theme } = useTheme();

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
          backgroundColor: theme.colors.purple300.value,
        }}
      >
        <Spacer y={5} />
        <Row justify="center" align="center">
          {!isMd && (
            <Image
              src={"/images/device.svg"}
              height={!isLg ? 400 : 200}
              width={!isLg ? 1000 : 700}
              alt="Skills Image"
            />
          )}

          <Col css={{ marginBottom: "auto" }} align="center">
            <Text h2 size={`${!isLg ? "3.0em" : "2em"} `}>
              {firstLetterToUpperCase(skills.title)}
            </Text>
            <Row
              justify="center"
              align="center"
              wrap="wrap"
              css={{ maxWidth: ` ${is2Xl ? "100%" : "80%"}` }}
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

        {<Spacer y={2} />}
      </Container>
    </>
  );
}
