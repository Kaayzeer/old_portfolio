import React, { useEffect, useState } from "react";
//styles
import styles from "./navbar.module.css";
//next icons
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
//react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
//react-scroll
import { Link } from "react-scroll";
//functions
import { SocialAvatars } from "../Sidebar/Sidebar";
//framer-motion
import { motion, AnimatePresence } from "framer-motion";
//nextUI
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Image, styled, Text } from "@nextui-org/react";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//userData
import { userData } from "../../data";

const { sidebar } = userData;
const navbarInfo = [
  { section: "Home", href: "home" },
  { section: "Skills", href: "skills" },
  { section: "Portfolio", href: "portfolio" },
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  /*  const [prevScrollY, setPrevScrollY] = useState(0);

  const hideOrShowNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > prevScrollY) {
        //hide nav on scroll down
        setShowNav(false);
      } else {
        // show nav on scroll up
        setShowNav(true);
      }
      setPrevScrollY(window.scrollY);
    }
  };

  //listen to the window scrollY event whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", hideOrShowNavbar);

      return () => {
        window.removeEventListener("scroll", hideOrShowNavbar);
      };
    }
  }, [prevScrollY]); */

  useEffect(() => {
    //prevent scroll when modal is open
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

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
      className={showNav ? styles.header : styles.hiddenHeader}
      style={{ backgroundColor: colors.neutralLight.value }}
    >
      <nav className={styles.nav}>
        {/* //------------Logo --------------// */}
        {!isDark ? (
          <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
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
                alt="black-logo"
              />
            </motion.div>
          </Link>
        ) : (
          <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
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
                alt="white-logo"
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
                to={info.href}
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
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              <AiOutlineClose
                className={styles.close}
                onClick={(e) => handleOpenMenu(e)}
              />
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                exit={{ x: "100vw" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
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
        </AnimatePresence>
      </nav>
    </header>
  );
}
