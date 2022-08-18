import React from "react";

import { Col, Text, Button } from "@nextui-org/react";

export default function RepoLink({ thisURI }) {
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
      >
        Repo
      </Button>
    </Col>
  );
}
