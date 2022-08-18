import React, { useState } from "react";
//styles
import styles from "./navbar.module.css";
//next icons
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
//react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
//react-scroll
import { Link } from "react-scroll";
//functions
import { SocialAvatars } from "../Sidebar/Sidebar";
//framer-motion
import { motion } from "framer-motion";
//nextUI
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Image } from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//userData
import { userData } from "../../data";
const { sidebar } = userData;
const navbarInfo = [
  { section: "Home", href: "home" },
  { section: "Skills", href: "skills" },
  { section: "Portfolio", href: "portfolio" },
  { section: "Contact", href: "contact" },
];

//ThemeSwitcher reusable
export const themeToggler = (theme, x) => {
  return (
    <Switch
      checked={theme}
      size="md"
      color="secondary"
      iconOn={<MoonIcon filled />}
      iconOff={<SunIcon filled />}
      onChange={(e) =>
        x((prevEvent) =>
          prevEvent !== true && e.target.checked ? "dark" : "light"
        )
      }
    />
  );
};

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
        {/* //------------Logo --------------// */}
        {!isDark ? (
          <Link
            to={"home"}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <Image
                className={styles.img}
                src="/images/nikolasBlackLogo.png"
                height={50}
                width={100}
              />
            </motion.div>
          </Link>
        ) : (
          <Link
            to={"home"}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <Image
                className={styles.img}
                src="/images/nikolasWhiteLogo.png"
                height={50}
                width={100}
              />
            </motion.div>
          </Link>
        )}
        {/*   // --------Laptop and up-----------// */}
        {!isMd && (
          <>
            {navbarInfo.map((info, idx) => (
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
            {themeToggler(isDark, setTheme)}
          </>
        )}
        {/*   //-----------Mobile --------------// */}
        {isMd && (
          <GiHamburgerMenu
            className={styles.hamburger}
            onClick={(e) => handleOpenMenu(e)}
          />
        )}
        {isOpen && (
          <>
            <GrClose
              className={styles.close}
              onClick={(e) => handleOpenMenu(e)}
            />

            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.menu}
            >
              {navbarInfo.map((info, idx) => (
                <Link
                  key={idx}
                  to={info.href !== "contact" && info.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={styles.link}
                  onClick={(e) => handleOpenMenu(e)}
                >
                  {info.section}
                </Link>
              ))}

              {themeToggler(isDark, setTheme)}

              <div className={styles.socialContainer}>
                {SocialAvatars(sidebar)}
              </div>
            </motion.div>
          </>
        )}
      </nav>
    </header>
  );
}
