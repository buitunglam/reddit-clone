import { Home, Share } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const MenuFieldRecent = () => {
  return (
    <Box pl={3} pr={3} pt={2}>
      <Typography
        variant="caption"
        sx={{
          color: "GrayText",
        }}
      >
        Recent
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography pl={1}>r/MemeOnpice</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography pl={1}>r/Memepice</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography pl={1}>r/GlobalOffensice</Typography>
      </Box>
    </Box>
  );
};

export default MenuFieldRecent;
