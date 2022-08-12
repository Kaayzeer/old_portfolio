import React from "react";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Image } from "@nextui-org/react";
import { Container, Card, Row, Text } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

export default function Navbar() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image
          className={styles.img}
          src="/images/logotest1.svg"
          height={40}
          width={40}
          objectFit="cover"
        />
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        The current theme is: {type}
        <GiHamburgerMenu className={styles.hamburger} />
      </nav>
    </header>
  );
}
