import React from "react";

//nextUI
import {
  Container,
  Col,
  Card,
  Grid,
  Text,
  useTheme,
  Image,
} from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//userData
import { userData } from "../../data";
const {
  projects: { title, repositories, languages },
} = userData;

export default function Projects({ repos }) {
  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1068);
  const isMd = useMediaQuery(835);

  const {
    theme: { colors },
  } = useTheme();

  const description = repos
    .map((repo) => repo.description)
    .filter((repo) => repo !== null);

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
        }}
      >
        <Col
          align={`${!isMd ? "center" : "center"}`}
          css={{
            position: "relative",
          }}
        >
          {!isLg && (
            <div
              style={{
                position: "absolute",
                transition: "transform(-50%, -50%)",
              }}
            >
              <Image
                src={"/images/bannerpic2.svg"}
                height={!isLg ? 700 : 600}
                width={!isLg ? 900 : 700}
                alt="Landing Image"
              />
            </div>
          )}

          <Text h1 size={`${!isLg ? "3.6em" : "2.7em"} `}>
            {title}
          </Text>
          {/*   <Text h3 size={`${!isLg ? "2em" : "1.5em"} `}>
            {subTitle}
          </Text>  */}
        </Col>
        <Grid.Container gap={3} css={{ marginTop: "auto" }}>
          {repositories.map((repo, idx) => (
            <Grid key={idx} xs={12} sm={idx - 2 ? 6 : 12} xl={4}>
              <Card
                isHoverable={true}
                css={{ backgroundColor: colors.purple300.value }}
              >
                <Card.Body>
                  <Text h3 size="1.2rem" display="flex" align="center">
                    {repo}
                  </Text>

                  <Text h4 size=".8rem">
                    {description[idx]}
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </>
  );
}

/*  <Grid xs={3}>
            <Card
              isHoverable={true}
              css={{ backgroundColor: colors.purple300.value }}
            >
              <Card.Body>
                <Text h3 size="1.2rem" display="flex" align="center">
                  {repositories[1]}
                </Text>
                <Text h4 size=".8rem">
                  {description[3]}
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card
              isHoverable={true}
              css={{ backgroundColor: colors.purple300.value }}
            >
              <Card.Body>
                <Text h3 size="1.2rem" display="flex" align="center">
                  {repositories[2]}
                </Text>
                <Text h4 size=".8rem">
                  {description[0]}
                </Text>
              </Card.Body>
            </Card>
          </Grid> */
