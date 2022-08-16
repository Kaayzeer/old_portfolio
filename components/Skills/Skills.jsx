//react
import React, { useState } from "react";

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
  Popover,
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

//iconArray
import { iconArray } from "../../lib/iconArray";

export default function Skills() {
  //toggle language avatar popover
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);
  const {
    theme: { colors },
  } = useTheme();

  //filter skills
  let color = skills.languages.map((item) => item.color);
  let language = skills.languages.map((item) => item.language);

  //custom themes
  const StyledContainer = styled(Container, {
    /* height: "100vh", */
    backgroundColor: colors.purple300.value,
  });

  const StyledCol = styled(Col, {
    marginBottom: "auto",
  });

  const StyledRow = styled(Row, {
    marginBottom: "auto",
    maxWidth: is2Xl ? "100%" : "80%",
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
                  <Popover key={idx} placement="top">
                    <Popover.Trigger>
                      <StyledAvatar
                        value={popoverIsOpen}
                        onClick={() =>
                          setPopoverIsOpen((prev) => (prev ? true : false))
                        }
                        sx={{
                          bgcolor: color,
                          margin: "10px",
                          cursor: "pointer",
                        }}
                      >
                        {Icon}
                      </StyledAvatar>
                    </Popover.Trigger>
                    <Popover.Content
                      css={{ backgroundColor: colors.gray100.value }}
                    >
                      <Text css={{ p: "$6", letterSpacing: ".7px" }}>
                        {language[idx]}
                      </Text>
                    </Popover.Content>
                  </Popover>
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
