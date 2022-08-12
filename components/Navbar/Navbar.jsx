import React, { useState } from "react";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Image } from "@nextui-org/react";
import { Container, Card, Row, Text } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  //Hamburger menu opener
  const handleOpenMenu = () => {
    setIsOpen((prev) => (!prev ? true : false));
  };

  const { setTheme } = useNextTheme();
  const { isDark, theme } = useTheme();

  console.log(theme);
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: theme?.colors.gray300.value }}
    >
      <nav className={styles.nav}>
        <Image
          className={styles.img}
          src="/images/logotest1.svg"
          height={40}
          width={40}
          objectFit="cover"
        />
        {/*  The current theme is: {type} */}
        <GiHamburgerMenu
          className={styles.hamburger}
          onClick={(e) => handleOpenMenu(e)}
        />
        {isOpen && (
          <div className={styles.menu}>
            <p>aloooo</p>
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
