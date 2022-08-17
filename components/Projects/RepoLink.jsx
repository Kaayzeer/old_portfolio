import React from "react";

import { Col, Text, Button } from "@nextui-org/react";

export default function RepoLink() {
  return (
    <Col align="center" css={{ padding: "$4" }}>
      <Text p>Take part of the code of this Portfolio :)</Text>
      <Button
        light
        color="secondary"
        onPress={window.open(
          "https://github.com/Kaayzeer/portfolio_2",
          "_blank"
        )}
      >
        Repo
      </Button>
    </Col>
  );
}
