import React from "react";

//nextUi
import { styled } from "@nextui-org/react";

//material ui
import Avatar from "@mui/material/Avatar";

export default function StyledAvatar({
  color,

  Icon,
}) {
  const StyledAvatar = styled(Avatar, {
    marginTop: "1rem",
  });

  return (
    <StyledAvatar
      sx={{
        bgcolor: color,
        margin: "1rem",
        cursor: "pointer",
      }}
    >
      {Icon}
    </StyledAvatar>
  );
}
