import React from "react";
//next ui
import {
  Container,
  Row,
  Col,
  styled,
  useTheme,
  Text,
  Image,
} from "@nextui-org/react";

//userData
import { userData } from "../../data";
const {
  about: { title, description, picture, description2 },
} = userData;

//functions

import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function About() {
  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);
  const {
    theme: { colors },
  } = useTheme();

  const StyledContainer = styled(Container, {
    backgroundColor: colors.purple300.value,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "150px",
    padding: isMd ? "5%" : "10%",
  });

  const StyledText = styled(Text, {
    paddingTop: "10px",
    textAlign: "left",
    lineHeight: "1.4rem",
    letterSpacing: ".7px",
    fontSize: !isMd ? "20px" : "14px",
  });

  return (
    <StyledContainer
      id="conctact"
      xl
      responsive
      display="flex"
      alignItems="center"
      justify="center"
      /*  css={{
        padding: `   ${isLg ? "30%" : "10%"}  ${is2Xl ? "10%" : "20%"} `,
      }} */
    >
      <Row justify="center" align="center">
        <Col alignItems="center">
          <Image
            src="/images/aboutPic.svg"
            alt="about_me_picture"
            height="35"
            width="35"
          />
        </Col>

        <Col alignItems="flex-start">
          <StyledText h3>Myself</StyledText>

          <StyledText p>{description}</StyledText>
          <StyledText p>{description2}</StyledText>
        </Col>
      </Row>
    </StyledContainer>
  );
}
