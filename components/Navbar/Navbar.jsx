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
        {!isDark ? (
          <Image
            className={styles.img}
            src="/images/nikolasBlackLogo.png"
            height={50}
            width={100}
          />
        ) : (
          <Image
            className={styles.img}
            src="/images/nikolasWhiteLogo.png"
            height={50}
            width={100}
          />
        )}

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
              size="xs"
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
