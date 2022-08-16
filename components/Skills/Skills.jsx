//nextUi
import {
  Container,
  Col,
  Row,
  Text,
  Spacer,
  Image,
  useTheme,
  styled,
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

export default function Skills() {
  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);
  const { theme } = useTheme();

  let color = skills.languages.map((item) => item.color);

  //custom themes
  const StyledContainer = styled(Container, {
    /* height: "100vh", */
    backgroundColor: theme.colors.purple300.value,
  });

  const StyledCol = styled(Col, {
    marginBottom: "auto",
  });

  const StyledRow = styled(Row, {
    marginBottom: "auto",
    maxWidth: ` ${is2Xl ? "100%" : "80%"}`,
  });

  const StyledAvatar = styled(Avatar, {
    marginTop: "1rem",
  });
  //-------------------//

  return (
    <>
      <StyledContainer
        xl
        responsive
        display="flex"
        alignItems="center"
        justify="center"
        css={{
          padding: `  ${isLg ? "20%" : "10%"}  ${is2Xl ? "10%" : "20%"} `,
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

          <StyledCol align="center">
            <Text h2 size={`${!isLg ? "3.0em" : "2em"} `}>
              {firstLetterToUpperCase(skills.title)}
            </Text>
            <StyledRow justify="center" align="center" wrap="wrap">
              {color.map((color, idx) => {
                if (idx > 13) return;
                const Icon = iconArray[idx];

                return (
                  <StyledAvatar
                    key={idx}
                    sx={{ bgcolor: color, margin: "0px 3px" }}
                  >
                    {Icon}
                  </StyledAvatar>
                );
              })}
            </StyledRow>
          </StyledCol>
        </Row>

        {<Spacer y={2} />}
      </StyledContainer>
    </>
  );
}
