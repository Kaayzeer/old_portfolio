import React from "react";
import { Avatar } from "@mui/material";
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

import { userData } from "../../data";

const { sidebar } = userData;
console.log("sidebar:", sidebar);
const iconArray = [<SiGithub />, <SiLinkedin />, <SiDiscord />];

import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        {sidebar.map((social, idx) => {
          if (idx > 2) return;
          const Icon = iconArray[idx];
          return (
            <Avatar
              sx={{
                bgcolor: social.color,
                margin: "10px",
                cursor: "pointer",

                "&:hover": {
                  bgColor: social.hovered,
                  transition: "all 4s eaase",
                },
              }}
              variant="rounded"
              onClick={() => window.open(social.link, "_blank")}
            >
              {Icon}
            </Avatar>
          );
        })}
      </nav>
    </aside>
  );
}
