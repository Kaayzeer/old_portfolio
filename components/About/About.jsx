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
const { sidebar } = userData;

//functions
import { SocialAvatars } from "../Sidebar/Sidebar";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function About({ repos }) {
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

  return (
    <StyledContainer id="conctact" xl>
      <Row>
        <Col
          alignItems="center"
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Image
            src="/images/aboutPic.svg"
            alt="about_me_picture"
            height="35"
            width="35"
          />

          <Row>{SocialAvatars(sidebar)}</Row>
        </Col>
        <Col
          alignItems="center"
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text p b color="black">
            Contact me
          </Text>
        </Col>
      </Row>
    </StyledContainer>
  );
}
