import React from "react";

//material ui
import { Avatar } from "@mui/material";
//next ui
import { useTheme } from "@nextui-org/react";

const CustomAvatar = ({ social, Icon }) => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <Avatar
      sx={{
        bgcolor: social.color,
        margin: "10px",
        cursor: "pointer",
        zIndex: "2",
        transition: "all 0.4s eaase",
        "&:hover": {
          bgcolor: colors.neutralSolidHover.value,
        },
      }}
      onClick={() => window.open(social.link, "_blank")}
    >
      {Icon}
    </Avatar>
  );
};

export default CustomAvatar;
