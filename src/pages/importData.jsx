import React from "react";
import Sidenav from "../components/sideNav";
import PrimarySearchAppBar from "../components/searchBar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Cleanroom from "../assets/upload.png";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Logo from "../assets/upload.png";
import Box from "@mui/material/Box";
import amazon from "../assets/amazon.png";
import { useNavigate } from "react-router-dom";
import settings from "../assets/settings1.png";

export default function ImportData() {
  const navigate = useNavigate();

  const handleBackClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  const StyledHeading = styled(Typography)({
    fontSize: "1.75rem", // Adjust font size as needed
    fontWeight: "bold",
    color: "#027453",
    marginLeft: "30px", // Add space between logo and heading
  });

  const StyledTextarea = styled(Textarea)({
    width: "1000px", // Adjust width as needed
    height: "40px",
    marginLeft: "30px",
    marginBottom: "20px",
    marginTop: "20px", // Adjust height as needed
  });

  return (
    <>
      <Box sx={{ backgroundColor: "#F9F9F9", display: "flex" }}>
        <Sidenav />
        <Box
          component="main"
          sx={{ flexGrow: 1, paddingLeft: "10px", paddingTop: "15px" }}
        >
          <StyledHeading>Import Data From External DataSource</StyledHeading>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: "30px",
              paddingLeft: "30px",
              paddingBottom: "10px",
            }}
          >
            <img src={amazon} alt="amazon" style={{ marginRight: "10px" }} />
            <Typography sx={{ mb: "10px", fontSize: "20px", fontWeight: 700 }}>
              Amazon Web Services
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", paddingLeft: "25px" }}
          >
            <img
              src={settings}
              alt="settings"
              height="30px"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            />
            <Typography sx={{ fontSize: "20px", fontWeight: 550 }}>
              Configuration
            </Typography>
          </Box>
          <StyledTextarea
            name="Outlined"
            placeholder="S3 Bucket Name"
            variant="outlined"
          />
          <StyledTextarea
            name="Outlined"
            placeholder="Region Code"
            variant="outlined"
          />
          <StyledTextarea
            name="Outlined"
            placeholder="Object Name [Key]"
            variant="outlined"
          />
          <StyledTextarea
            name="Outlined"
            placeholder="Stored Dataset Name [Optional]"
            variant="outlined"
          />
          <Box
            sx={{ display: "flex", alignItems: "center", paddingLeft: "25px" }}
          >
            <img
              src={settings}
              alt="settings"
              height="30px"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            />
            <Typography sx={{ fontSize: "20px", fontWeight: 550 }}>
              Credentials
            </Typography>
          </Box>
          <StyledTextarea
            name="Outlined"
            placeholder="Access Key"
            variant="outlined"
          />
          <StyledTextarea
            name="Outlined"
            placeholder="Secret Key"
            variant="outlined"
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => handleBackClick("/add_data")}
              variant="contained"
              sx={{
                ml: "30px",
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  backgroundColor: "#d8f4dd",
                  color: "#027453", // Change background color on hover
                },
              }}
            >
              BACK
            </Button>
            <Button
              variant="contained"
              sx={{
                mr: "250px",
                backgroundColor: "#027453",
                "&:hover": {
                  backgroundColor: "#d8f4dd",
                  color: "#027453", // Change background color on hover
                },
              }}
            >
              IMPORT
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
