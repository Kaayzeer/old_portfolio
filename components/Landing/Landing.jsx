import React, { useState } from "react";
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
  styled,
} from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//components
import FormModal from "../FormModal/FormModal";
//userData
import { userData } from "../../data";

const { title, subTitle } = userData;

export default function Landing() {
  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);

  //modal toggler
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => {
    setVisible(false);
  };

  const {
    isDark,
    theme: { colors },
  } = useTheme();
  console.log(colors);

  //customStyles

  const StyledContainer = styled(Container, {
    /* height: "100vh", */
    /* padding: `0 ${is2Xl ? "10%" : "20%"} `, */
  });

  const StyledButton = styled(Button, {
    color: colors.gray900.value,
    padding: "30px 0",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: ".7px",
  });

  /* ----------------------- */
  return (
    <>
      <FormModal closeModal={closeModal} visible={visible} />
      <StyledContainer
        xl
        responsive
        display="flex"
        alignItems="center"
        justify="center"
        css={{
          padding: `  ${isLg ? "30%" : "10%"}  ${is2Xl ? "10%" : "20%"} `,
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
            <Spacer y={1} />

            <StyledButton
              bordered
              ghost
              shadow
              size="lg"
              color="secondary"
              onPress={openModal}
            >
              Get in touch
            </StyledButton>
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
      </StyledContainer>
    </>
  );
}
