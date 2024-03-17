import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import cleanroom from "../assets/cleanrooms.png";
import connectors from "../assets/connectors.png";
import governance from "../assets/governance.png";
import helpcentre from "../assets/helpcentre.png";
import logout from "../assets/logout.png";
import perry from "../assets/Perry 1.png";
import AppBar from "@mui/material/AppBar";
import settings from "../assets/settings.png";
import Logo from "../assets/Logo.png";
import Box from "@mui/material/Box";

const drawerWidth = 240;

export default function Sidenav() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          padding: "0px",
          boxShadow: "none",
          elevation: 0,
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", ml: -2 }}>
            <img
              src={Logo}
              alt="PeriDATA Logo"
              style={{ maxWidth: "100%", maxHeight: "35px" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#027453", ml: 1 }}
            >
              PeriDATA
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: 50 }} />
      <Box
        sx={{
          flexDirection: "column",
          pl: 1.5,
          pb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={perry}
            alt="Avatar"
            style={{ width: 30, height: 30, borderRadius: "50%", mr: 1 }}
          />
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{ ml: 1.5 }}
          >
            Perry
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                src={cleanroom}
                alt="Cleanrooms"
                style={{ width: 15, height: 15 }}
              />
            </ListItemIcon>
            <ListItemText primary="Cleanrooms" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                src={connectors}
                alt="connectors"
                style={{ width: 15, height: 15 }}
              />
            </ListItemIcon>
            <ListItemText primary="Connectors" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                src={governance}
                alt="governance"
                style={{ width: 15, height: 15 }}
              />
            </ListItemIcon>
            <ListItemText primary="Governance" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                src={helpcentre}
                alt="helpcentre"
                style={{ width: 15, height: 15 }}
              />
            </ListItemIcon>
            <ListItemText primary="Help Centre" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                src={logout}
                alt="logout"
                style={{ width: 15, height: 15 }}
              />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                src={settings}
                alt="settings"
                style={{ width: 15, height: 15 }}
              />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
}
