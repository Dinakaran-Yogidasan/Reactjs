import React from "react";

import { MenuOutlined, PersonAdd, Settings, Logout } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  ListItemIcon,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4">Navbar</Typography>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/posts/:post_id">Posts</Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topbar;
