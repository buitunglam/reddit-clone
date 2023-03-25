import {
  Gamepad,
  KeyboardArrowDown,
  Sports,
  SportsBasketball,
} from "@mui/icons-material";
import { Avatar, Box, styled, Typography } from "@mui/material";
import React from "react";

const TitleTopic = styled(Typography)({
  color: "GrayText",
});

const WrapContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
  marginTop: 20
});

const TopicItemContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const MenuFieldTopic = () => {
  return (
    <Box pl={3} pr={3} pt={2}>
      <TitleTopic variant="caption">Topics</TitleTopic>
      <WrapContainer>
        <TopicItemContainer>
          <Gamepad />
          <Typography pl={1}>Home</Typography>
        </TopicItemContainer>
        <KeyboardArrowDown />
      </WrapContainer>
      <WrapContainer>
        <TopicItemContainer>
          <SportsBasketball />
          <Typography pl={1}>Popular</Typography>
        </TopicItemContainer>
        <KeyboardArrowDown />
      </WrapContainer>
      <WrapContainer>
        <TopicItemContainer>
          <SportsBasketball />
          <Typography pl={1}>Popular</Typography>
        </TopicItemContainer>
        <KeyboardArrowDown />
      </WrapContainer>
    </Box>
  );
};

export default MenuFieldTopic;
