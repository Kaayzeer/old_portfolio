//styles
import styles from "./projects.module.css";
//nextUI
import {
  Grid,
  useTheme,
  styled,
  Card,
  Text,
  Spacer,
  Button,
} from "@nextui-org/react";

export default function SkillsAvatars({ repo, idx, repos, is2Xl, images }) {
  const {
    theme: { colors },
  } = useTheme();

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

  const StyledText = styled(Text, {
    textAlign: "justify",
    lineHeight: "1.4rem",
    letterSpacing: ".7px",
  });

  //-------- repo data ---------

  //filter repo descriptions
  const description = repos
    .map((repo) => repo.description)
    .filter((repo) => repo !== null && !repo.includes("Creating"));

  console.log(description);

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

  //card buttongroup click
  const handleClick = (e, idx) => {
    if (e.target.name === "demo") window.open(repoDemo[idx], "_blank");
    if (e.target.name === "repo") window.open(repoUrl[idx], "_blank");
  };

  // ----------------------------//

  return (
    <Grid key={idx} xs={12} sm={4} xl={4}>
      <StyledCard
        isHoverable={true}
        css={{
          background: `url(${images[idx]}) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
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
            <Button as="a" name="demo" onPress={(e) => handleClick(e, idx)}>
              Demo
            </Button>
            <Button as="a" name="repo" onPress={(e) => handleClick(e, idx)}>
              Repo
            </Button>
          </Button.Group>
        </Card.Body>
      </StyledCard>
    </Grid>
  );
}
