import React from "react";

//material ui
import { Avatar } from "@mui/material";

//react-icons
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

const CustomAvatar = ({ social, Icon }) => {
  return (
    <Avatar
      sx={{
        bgcolor: social.color,
        margin: "10px",
        cursor: "pointer",
        zIndex: "2",
        "&:hover": {
          bgColor: social.hovered,
          transition: "all 4s eaase",
        },
      }}
      onClick={() => window.open(social.link, "_blank")}
    >
      {Icon}
    </Avatar>
  );
};

export default CustomAvatar;
