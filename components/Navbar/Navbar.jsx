import React, { useState } from "react";

//styles
import styles from "./navbar.module.css";

//next icons
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

//react icons
import { GiHamburgerMenu } from "react-icons/gi";

//react-scroll
import { Link } from "react-scroll";

//nextUI
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Image, styled, Button } from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";

const navbarInfo = [
  { section: "Home", href: "home" },
  { section: "Skills", href: "skills" },
  { section: "Portfolio", href: "portfolio" },
  { section: "Contact", href: "contact" },
];

export default function Navbar(
  {
    /* contactRef */
  }
) {
  const [isOpen, setIsOpen] = useState(false);
  const isMd = useMediaQuery(835);

  //Hamburger menu opener
  const handleOpenMenu = () => {
    setIsOpen((prev) => (!prev ? true : false));
  };

  const { setTheme } = useNextTheme();
  const {
    isDark,
    theme: { colors },
  } = useTheme();

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: colors.neutralLight.value }}
    >
      <nav className={styles.nav}>
        {!isDark ? (
          <Link
            to={"home"}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Image
              className={styles.img}
              src="/images/nikolasBlackLogo.png"
              height={50}
              width={100}
            />
          </Link>
        ) : (
          <Link to={"/"} spy={true} smooth={true} offset={-80} duration={500}>
            <Image
              className={styles.img}
              src="/images/nikolasWhiteLogo.png"
              height={50}
              width={100}
            />
          </Link>
        )}
        {/*  <div className={styled.linksContainer}> */}
        {!isMd &&
          navbarInfo.map((info, idx) => (
            <Link
              key={idx}
              to={info.href !== "contact" && info.href}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={styles.link}
            >
              {info.section}
            </Link>
          ))}

        {/*    </div> */}
        {isMd && (
          <GiHamburgerMenu
            className={styles.hamburger}
            onClick={(e) => handleOpenMenu(e)}
          />
        )}
        {isOpen && (
          <div className={styles.menu}>
            <p>aloooo</p>
            <Switch
              checked={isDark}
              size="xs"
              iconOn={<MoonIcon filled />}
              iconOff={<SunIcon filled />}
              onChange={(e) =>
                setTheme((prevEvent) =>
                  prevEvent !== true && e.target.checked ? "dark" : "light"
                )
              }
            />
          </div>
        )}
      </nav>
    </header>
  );
}

/* setTheme((prev) => {
                  if (prev === isDark)
                    return e.target.checked ? "dark" : "light";
                }) */
