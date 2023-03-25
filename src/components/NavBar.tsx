import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import RedditIcon from "@mui/icons-material/Reddit";
import { Icon } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  height: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              // border: "1px solid yellow",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "100%",
                width: "10%",
              }}
            >
              <RedditIcon
                sx={{
                  marginRight: "10px",
                }}
              />
              <Typography variant="h3" fontSize={8}>
                Reddit
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50%",
              }}
            >
              <Search
                sx={{
                  width: "100%",
                  borderRadius: 5,
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    width: "100%",
                    borderRadius: 5,
                  }}
                />
              </Search>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  component={"button"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 35,
                    width: 140,
                    borderRadius: 5,
                    paddingTop: 2,
                    paddingBottom: 2,
                    border: "none",
                  }}
                >
                  <QrCodeScannerIcon />
                  <Typography
                    sx={{
                      paddingLeft: 1,
                      color: "#000",
                    }}
                  >
                    Get App
                  </Typography>
                </Box>
              </Box>

              <Box
                component={"button"}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  border: "1px solid black",
                  height: 35,
                  width: 140,
                  marginRight: 2,
                  marginLeft: 2,
                  borderRadius: 5,
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                  }}
                >
                  Login
                </Typography>
              </Box>

              <Box>
                <PersonIcon />
                <ExpandMoreIcon />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
