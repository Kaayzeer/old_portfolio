//styles
import styles from "./portfolio.module.css";
//nextUI
import {
  Grid,
  useTheme,
  styled,
  Card,
  Text,
  Spacer,
  Button,
  Row,
  Col,
  Image,
} from "@nextui-org/react";

//userData
import { userData } from "../../data";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";

const {
  projects: { nvUrl, nvDesc, languages },
} = userData;

export default function SkillsCards({ repo, idx, repos, is2Xl, images }) {
  const {
    theme: { colors },
  } = useTheme();
  const isMd = useMediaQuery(835);

  const StyledCard = styled(Card, {
    backgroundColor: "transparent",
    border: `1px solid ${colors.purple300.value}`,
    padding: "1rem .7rem",

    minHeight: isMd ? "180px" : "400px",
  });

  const StyledText = styled(Text, {
    textAlign: "left",
    lineHeight: "1.4rem",
    letterSpacing: ".7px",

    paddingBottom: "5px",

    width: "95%",
  });

  const StyledBadge = styled(Text, {
    textAlign: "center",

    lineHeight: "1.5rem",
    letterSpacing: ".7px",
    border: `1px solid ${colors.purple300.value}`,
    /*  borderBottom: `1px solid ${colors.text.value}`, */
    width: "120px",
    borderRadius: "4px",
    cursor: "crosshair",
    color: colors.purple100.value,

    "&:hover": {
      backgroundColor: colors.purple700.value,
      transition: "all 0.3s ease-in-out",
    },
  });

  //-------- repo data ---------

  //filter repo descriptions
  const description = repos
    .map((repo) => repo.description)
    .filter((repo) => repo !== null && !repo.includes("Creating"));

  //filter repoURL´s
  const repoUrl = repos
    .map((repo) => repo.html_url)
    .filter(
      (repo) =>
        repo.includes("scuf") ||
        repo.includes("country-guide") ||
        repo.includes("cities-app")
    );

  //filter repo Demos
  const repoDemo = repos
    .map((repo) => repo.homepage)
    .filter(
      (repo) =>
        repo !== "portfolio-2-dusky.vercel.app" &&
        repo !== null &&
        repo.length > 0
    );

  //card buttongroup click
  const handleClick = (e, idx) => {
    if (e.target.name === "demo")
      window.open(repo === "Next Venture" ? nvUrl : repoDemo[idx], "_blank");
    if (e.target.name === "repo") window.open(repoUrl[idx], "_blank");
  };
  // ----------------------------//

  const toLowerCaseMatches = (a) => {
    const regex = /[^A-Z0-9]/gi;
    return a.toLowerCase().replace(regex, "").trim("");
  };
  const repoIndex = toLowerCaseMatches(repo);

  return (
    <Grid xs={12} sm={6}>
      <StyledCard isHoverable={true}>
        <Card.Body>
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
          <Row>
            <Col>
              <StyledText h4 size=".8rem">
                {repo === "Next Venture" ? nvDesc : description[idx]}
              </StyledText>
              <Row
                gap={1}
                wrap="wrap"
                style={{
                  marginTop: "5px",
                  marginRight: "5px",
                  width: "95%",
                  /* width: isMd ? "90%" : "0%", */
                  marginLeft: "0px",
                }}
              >
                {languages[repoIndex].map((language, idx) => (
                  <StyledBadge key={idx} p size=".6rem">
                    {language}
                  </StyledBadge>
                ))}
              </Row>
            </Col>
            <Image src={images[idx]} height={200} width={200} />
          </Row>
          <hr className={styles.hr} />
          <Button.Group
            color="secondary"
            ghost
            animated
            size="md"
            borderWeight="bold"
            css={{ margin: "auto auto 0", cursor: "pointer" }}
          >
            <Button as="a" name="demo" onPress={(e) => handleClick(e, idx)}>
              Demo
            </Button>
            {repo !== "Next Venture" && (
              <Button as="a" name="repo" onPress={(e) => handleClick(e, idx)}>
                Repo
              </Button>
            )}
          </Button.Group>
        </Card.Body>
      </StyledCard>
    </Grid>
  );
}
