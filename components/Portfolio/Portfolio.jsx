//nextUI
import { Container, Col, Grid, Tooltip, Text } from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//components
import RepoLink from "./RepoLink";
//userData
import { userData } from "../../data";
import SkillsCards from "./SkillsCards";

//destructuring userData
const {
  projects: { title, repositories, images, languages, thisURI },
} = userData;

const Portfolio = ({ repos }) => {
  const is2Xl = useMediaQuery(1400);
  const isLg = useMediaQuery(1100);
  const isMd = useMediaQuery(835);

  return (
    <>
      <Container
        id="portfolio"
        xl
        responsive
        display="flex"
        alignItems="center"
        justify="center"
        css={{
          padding: `${isLg ? "20%" : "10%"}  ${is2Xl ? "10%" : "20%"} `,
          fontFamily: "Lato",
        }}
      >
        <Col align={`${!isMd ? "center" : "center"}`}>
          <Tooltip content={<RepoLink thisURI={thisURI} />}>
            <Text
              h1
              size={`${!isLg ? "3.6em" : "2.7em"} `}
              weight="bold"
              css={{
                cursor: "pointer",
              }}
            >
              {title}
            </Text>
          </Tooltip>
        </Col>
        <Grid.Container gap={3}>
          {repositories.map((repo, idx) => (
            <SkillsCards
              key={idx}
              repo={repo}
              idx={idx}
              repos={repos}
              images={images}
            />
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};

export default Portfolio;
