//react-icons
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";
//userData
import { userData } from "../../data";
//styles
import styles from "./sidebar.module.css";
//components
import CustomAvatar from "./CustomAvatar";

const { sidebar } = userData;
console.log("sidebar:", sidebar);

const iconArray = [<SiGithub />, <SiLinkedin />, <SiDiscord />];

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        {sidebar.map((social, idx) => {
          if (idx > 2) return;
          const Icon = iconArray[idx];
          return <CustomAvatar key={idx} social={social} Icon={Icon} />;
        })}
      </nav>
    </aside>
  );
}
