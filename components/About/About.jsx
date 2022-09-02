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
  about: { subtitle, title, description, picture, description2 },
  sidebar,
} = userData;

//functions
import { useMediaQuery } from "../../hooks/useMediaQuery";

//socialAvatars
import { SocialAvatars } from "../Sidebar/Sidebar";

export default function About() {
  const isMd = useMediaQuery(835);
  const isSm = useMediaQuery(700);
  const {
    theme: { colors },
  } = useTheme();

  const StyledContainer = styled(Container, {
    backgroundColor: colors.purple300.value,
    minHeight: "150px",
    padding: isMd ? "5%" : "2% 20%",
  });

  const StyledP = styled(Text, {
    paddingTop: "10px",
    textAlign: !isSm ? "left" : "center",
    lineHeight: "1.4rem",
    letterSpacing: ".7px",
    fontSize: !isMd ? "18px" : "14px",
  });

  const StyledH2 = styled(Text, {
    paddingTop: "10px",
    textAlign: !isSm ? "left" : "center",
    lineHeight: "1.4rem",
    letterSpacing: ".7px",
    fontSize: !isMd ? "24px" : "18px",
  });

  const StyledH3 = styled(Text, {
    paddingTop: "10px",
    textAlign: !isSm ? "left" : "center",
    lineHeight: "1.4rem",
    letterSpacing: ".7px",
    fontSize: !isMd ? "20px" : "16px",
    fontWeight: "400",
  });

  return (
    <StyledContainer
      id="about"
      xl
      responsive
      display="flex"
      alignItems="center"
      justify="center"
    >
      {!isSm ? (
        <Row justify="center" align="center">
          <Col alignItems="center" style={{ width: "50%" }}>
            <Image
              src={picture}
              alt="about_me_picture"
              height="35"
              width="35"
            />
          </Col>

          <Col alignItems="flex-start">
            <div style={{ width: isMd ? "80%" : "70%", margin: "0 auto" }}>
              <StyledH2 h2>{title}</StyledH2>
              <StyledH3 h3>{subtitle}</StyledH3>
              <StyledP p>{description}</StyledP>
              <StyledP p>{description2}</StyledP>
              <div
                style={{
                  paddingTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {SocialAvatars(sidebar)}
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Col justify="center" align="center">
          <div style={{ width: "70%" }}>
            <Image
              src="/images/aboutImg.svg"
              alt="about_me_picture"
              height="35"
              width="35"
            />
          </div>

          <div style={{ width: "80%", margin: "0 auto" }}>
            <StyledH2 h2 style={{ textAlign: "center" }}>
              {title}
            </StyledH2>
            <StyledH3 h3>{subtitle}</StyledH3>
            <StyledP p>{description}</StyledP>
            <StyledP p>{description2}</StyledP>
            <div
              style={{
                paddingTop: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {SocialAvatars(sidebar)}
            </div>
          </div>
        </Col>
      )}
    </StyledContainer>
  );
}
