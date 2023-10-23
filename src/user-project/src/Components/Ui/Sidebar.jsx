import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Person,
  Home,
  Pages,
  Groups,
  AccountBox,
  Storefront,
  Settings,
  ModeNight,
  LightMode,
} from "@mui/icons-material";
import { red } from "@mui/material/colors";

const Sidebar = ({ toggleSidebar, themeMode, isSideOpen }) => {
  let links = [
    { icon: <Home />, title: "Homepage" },
    { icon: <Pages />, title: "Pages" },
    { icon: <Groups />, title: "Groups" },
    { icon: <Storefront />, title: "MarketPlace" },
    { icon: <Person />, title: "Friends" },
    { icon: <Settings />, title: "Settings" },
    { icon: <AccountBox />, title: "Profile" },
  ];

  return (
    <Box
      flex={1}
      p={1}
      // bgcolor={red[200]} // debuging stuff
      sx={{
        display: isSideOpen ? { xs: "none", sm: "block" } : "none",
        minWidth: "200px",
      }}
    >
      <Box position="fixed" bgcolor={red[200]}>
        <List>
          {links.map(({ title, icon }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
