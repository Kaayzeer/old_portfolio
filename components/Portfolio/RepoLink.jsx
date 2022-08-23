import React from "react";
// next ui
import { Col, Text, Button } from "@nextui-org/react";

//next ui
import { useTheme } from "@nextui-org/react";

export default function RepoLink({ thisURI }) {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <Col align="center" css={{ padding: "$6", cursor: "pointer" }}>
      <Text p css={{ marginBottom: "10px" }}>
        Take part of the code of this Portfolio :)
      </Text>
      <Button
        shadow
        light
        size="xs"
        color="secondary"
        onClick={() => window.open(thisURI, "_blank")}
        css={{
          "&:hover": {
            backgroundColor: colors.secondaryLightHover.value,
            textShadow: "0 0 0.01px black",
          },
        }}
      >
        Repo
      </Button>
    </Col>
  );
}
