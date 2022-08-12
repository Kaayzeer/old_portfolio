import React from "react";
import styles from "./banner.module.css";
import { Image } from "@nextui-org/react";
import { Container, Card, Row, Text } from "@nextui-org/react";
import Name from "./Name";

export default function Banner() {
  return (
    <main className={styles.main}>
      <Name />
      <Image
        src={"/images/bannerpic4.svg"}
        height={300}
        width={400}
        alt="Default Image"
        objectFit="cover"
      />
    </main>
  );
}
