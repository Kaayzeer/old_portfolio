import React, { useState } from "react";

//styles
import styles from "./navbar.module.css";

//next icons
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

//react icons
import { GiHamburgerMenu } from "react-icons/gi";

//nextUI
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Image } from "@nextui-org/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  //Hamburger menu opener
  const handleOpenMenu = () => {
    setIsOpen((prev) => (!prev ? true : false));
  };

  const { setTheme } = useNextTheme();
  const {
    isDark,
    theme: { colors },
  } = useTheme();

  console.log(colors);
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: colors.neutralLight.value }}
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
              checked={true}
              size="xl"
              iconOff={<SunIcon filled />}
              iconOn={<MoonIcon filled />}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
