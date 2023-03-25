import { Home, Share } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const MenuFieldFeeds = () => {
  return (
    <Box pl={3} pr={3} pt={2}>
      <Typography
        variant="caption"
        sx={{
          color: "GrayText",
        }}
      >
        Feeds
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Home />
        <Typography pl={1} >Home</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Share />
        <Typography pl={1}>Popular</Typography>
      </Box>
      
    </Box>
  );
};

export default MenuFieldFeeds;
