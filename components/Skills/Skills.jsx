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
  Tooltip,
} from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//functions
import { firstLetterToUpperCase } from "../../functions/reusable";
//iconArray
import { iconArray } from "../../lib/iconArray";
//components
import StyledAvatar from "./StyledAvatar";
//userData
import { userData } from "../../data/";
const { skills } = userData;

export default function Skills() {
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
    backgroundColor: colors.purple300.value,
  });

  const StyledCol = styled(Col, {
    marginBottom: "auto",
  });

  const StyledRow = styled(Row, {
    marginBottom: "auto",
    maxWidth: is2Xl ? "100%" : "80%",
  });

  //-------------------//

  return (
    <>
      <StyledContainer
        id="skills"
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
                if (idx > 14) return;
                const Icon = iconArray[idx];

                return (
                  <Tooltip key={idx} content={language[idx]} color="invert">
                    <StyledAvatar color={color} Icon={Icon} />
                  </Tooltip>
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
