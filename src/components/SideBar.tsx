import MenuFieldFeeds from "@/components/MenuFieldFeeds";
import MenuFieldRecent from "@/components/MenuFieldRecent";
import MenuFieldTopic from "@/components/MenuFieldTopic";
import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      sx={{
        bgcolor: "lightcoral",
        border: '1px solid red'
      }}
    >
      <MenuFieldFeeds />
      <MenuFieldRecent/>
      <MenuFieldTopic/>
    </Box>
  );
};

export default Sidebar;
