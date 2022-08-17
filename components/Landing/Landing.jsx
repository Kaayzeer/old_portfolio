import React, { useState } from "react";

//styles
import styles from "./landing.module.css";

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

const {
  landing: { title, subtitles, paragraph },
} = userData;

export default function Landing({ contactRef }) {
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

  const StyledH1 = styled(Text, {
    color: "#333",

    fontSize: "3rem",
    fontWeight: "100",
    lineHeight: "1.5",
    whiteSpace: "nowrap",
    overflow: "hidden",
    position: "relative",
    width: "550px",
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
        id="home"
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
            <Text h3 size={`${!isLg ? "2em" : "1.5em"} `}>
              {title}
            </Text>
            <h1 className={styles.h1}>
              <div className={!isMd ? styles.subContainer : null}>
                {subtitles.map((subTitle, idx) => (
                  <div
                    key={idx}
                    className={styles.sub}
                    style={{
                      fontSize: !isMd ? "1.5rem" : "1.1rem",
                      letterSpacing: !isMd ? "0" : "1px",
                    }}
                  >
                    {subTitle}
                    {/* {!isMd ? subTitle : paragraph} */}
                  </div>
                ))}
              </div>
            </h1>
            <Spacer y={1} />

            <StyledButton
              bordered
              ghost
              shadow
              size="lg"
              color="secondary"
              /*  id="contact" */
              onPress={openModal}
              /* ref={contactRef} */
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
