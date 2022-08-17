import React from "react";
import {
  Container,
  Button,
  Col,
  styled,
  useTheme,
  Text,
} from "@nextui-org/react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Contact() {
  const isMd = useMediaQuery(835);
  const {
    theme: { colors },
  } = useTheme();

  const StyledContainer = styled(Container, {
    backgroundColor: colors.purple300.value,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    /* height: "300px", */
    minHeight: "150px",
    padding: isMd ? "5%" : "10%",
  });

  const StyledButton = styled(Button, {
    margin: "0 auto",
    backgroundColor: colors.purple300.value,
  });

  return (
    <StyledContainer id="conctact" xl>
      <Col
        alignItems="center"
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StyledButton light shadow animated color="primary" size="lg">
          <Text p b color="black">
            Contact me
          </Text>
        </StyledButton>
      </Col>
    </StyledContainer>
  );
}
