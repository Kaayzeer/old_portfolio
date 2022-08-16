import React from "react";
//styles
import styles from "./projects.module.css";

//next
import { useRouter } from "next/router";

//nextUI
import {
  Container,
  Col,
  Card,
  Grid,
  Text,
  useTheme,
  Spacer,
  styled,
  Button,
} from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//userData
import { userData } from "../../data";
//destructuring userData
const {
  projects: { title, repositories, languages, images, thisURI },
} = userData;

export default function Projects({ repos }) {
  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1100);
  const isMd = useMediaQuery(835);
  const router = useRouter();

  const {
    theme: { colors },
  } = useTheme();

  //-------- repo data ---------

  //filter repo descriptions
  const description = repos
    .map((repo) => repo.description)
    .filter((repo) => repo !== null);

  //filter repoURL´s
  const repoUrl = repos
    .map((repo) => repo.html_url)
    .filter(
      (repo) =>
        repo.includes("scuf") ||
        repo.includes("nv_vercel") ||
        repo.includes("cities-app")
    );

  //filter repo Demos
  const repoDemo = repos.map((repo) => repo.homepage).filter((repo) => repo);

  const repoName = repos
    .map((repo) => repo.name)
    .filter(
      (repo) =>
        repo.includes("scuf") ||
        repo.includes("nv_vercel") ||
        repo.includes("cities-app")
    );

  /*   console.log(repoDemo); */

  //card buttongroup click
  const handleClick = (e, idx) => {
    const openDemo = window.open(repoDemo[idx], "_blank");
    const openRepo = window.open(repoUrl[idx], "_blank");

    if (e.target.name === "demo") openDemo;
    if (e.target.name === "repo") openRepo;
  };

  // ----------------------------//

  //customStyles
  const StyledContainer = styled(Container, {
    padding: `10% ${is2Xl ? "10%" : "20%"} `,
    fontFamily: "Lato",
  });

  const StyledCard = styled(Card, {
    backgroundColor: colors.neutralBorder.value,
    padding: "1rem 2.5rem",
    height: !is2Xl ? "400px" : null,
    minHeight: "180px",
    cursor: "pointer",

    "> *": {
      opacity: 0,

      "&:hover": {
        opacity: 1,
      },
    },

    "&:hover": {
      backgroundImage: "none",
      backgroundColor: colors.purple300.value,
      transition: "5s ease all",
    },
  });

  const StyledCardBody = styled(Card.Body, {});

  const StyledText = styled(Text, {
    textAlign: "justify",
    lineHeight: "1.4rem",
    letterSpacing: ".7px",
  });

  /* ------------------------ */

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
        <Col align={`${!isMd ? "center" : "center"}`}>
          <Text
            h1
            size={`${!isLg ? "3.6em" : "2.7em"} `}
            weight="bold"
            onClick={() => window.open(thisURI, "_blank")}
            css={{
              cursor: "pointer",
            }}
          >
            {title}
          </Text>
        </Col>
        <Grid.Container gap={3}>
          {repositories.map((repo, idx) => (
            <Grid key={idx} xs={12} sm={4} xl={4}>
              <StyledCard
                isHoverable={true}
                css={{
                  background: `url(${images[idx]}) no-repeat center`,
                  backgroundSize: "cover",
                }}
              >
                <StyledCardBody>
                  <StyledText
                    h3
                    size="1.2rem"
                    display="flex"
                    align="center"
                    css={{ textAlign: "center" }}
                  >
                    {repo}
                  </StyledText>
                  <Spacer y={1} />
                  <hr className={styles.hr} />
                  <StyledText h4 size=".8rem" css={{ paddingBottom: "5px" }}>
                    {description[idx]}
                  </StyledText>
                  <hr className={styles.hr} />
                  <Button.Group
                    color="secondary"
                    ghost
                    animated
                    size="md"
                    borderWeight="bold"
                    css={{ margin: "auto auto 0" }}
                  >
                    <Button
                      as="a"
                      name="demo"
                      onPress={(e) => handleClick(e, idx)}
                    >
                      Demo
                    </Button>
                    <Button
                      as="a"
                      name="repo"
                      onPress={(e) => handleClick(e, idx)}
                    >
                      Repo
                    </Button>
                  </Button.Group>
                </StyledCardBody>
              </StyledCard>
            </Grid>
          ))}
        </Grid.Container>
      </StyledContainer>
    </>
  );
}
