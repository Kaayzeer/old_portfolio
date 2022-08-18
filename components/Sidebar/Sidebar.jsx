//react-icons
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";
//userData
import { userData } from "../../data";
//styles
import styles from "./sidebar.module.css";
//components
import CustomAvatar from "./CustomAvatar";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";

import cls from "classnames";

const { sidebar } = userData;
console.log("sidebar:", sidebar);

const iconArray = [<SiGithub />, <SiLinkedin />, <SiDiscord />];

const SocialAvatars = (sidebar) => {
  return sidebar.map((social, idx) => {
    if (idx > 2) return;
    const Icon = iconArray[idx];
    return <CustomAvatar key={idx} social={social} Icon={Icon} />;
  });
};

export default function Sidebar() {
  const isMd = useMediaQuery(835);
  return (
    <>
      {!isMd && (
        <aside className={styles.aside}>
          <nav className={!isMd ? styles.nav : styles.atSidebar}>
            {SocialAvatars(sidebar)}
          </nav>
        </aside>
      )}
    </>
  );
}

export { SocialAvatars };
/*   {sidebar.map((social, idx) => {
              if (idx > 2) return;
              const Icon = iconArray[idx];
              return <CustomAvatar key={idx} social={social} Icon={Icon} />;
            })} */
