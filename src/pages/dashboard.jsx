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
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#F9F9F9", display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <PrimarySearchAppBar />
          <Box height={10} />
          <Grid container spacing={2}>
            <Grid item xs={2} sx={{ maxWidth: "1056px", marginLeft: "40px" }}>
              <Stack spacing={13} direction="row">
                <Card
                  sx={{
                    minWidth: 240,
                    maxHeight: 300,
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #ddd", // Added border with color and width
                    borderRadius: 5,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 2.5,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 50, // Adjust height as needed
                        width: "auto",
                        mt: 7, // Maintain aspect ratio
                      }}
                      image={Cleanroom}
                      alt="cleanrooms"
                    />
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#027453",
                        "&:hover": {
                          backgroundColor: "#d8f4dd",
                          color: "#027453", // Change background color on hover
                        },
                      }}
                      onClick={() => handleButtonClick("/add_data")}
                    >
                      Create Cleanroom
                    </Button>
                  </CardActions>
                </Card>

                <Card
                  sx={{
                    minWidth: 230,
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #ddd",
                    borderRadius: 5,
                    maxHeight: 300,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center", // Center content horizontally
                      p: 1, // Adjust padding if needed
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#000000",
                        fontSize: "19px",
                        fontWeight: 700,
                        textAlign: "center",
                        padding: "20px",
                      }}
                    >
                      Audience Overlap
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontSize: "12px",
                        fontWeight: 500,
                        mr: "120px",
                      }}
                    >
                      Demo
                    </Typography>
                    <Typography
                      mt={5}
                      sx={{
                        color: "grey",
                        fontSize: "15px",
                        fontWeight: 500,
                        mr: "100px",
                      }}
                    >
                      Analysis
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontSize: "15px",
                        fontWeight: 500,
                        mr: "35px",
                      }}
                    >
                      Audience Overlap
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 10,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        color: "#027453",
                        border: "2px solid #027453",
                        backgroundColor: "white",
                      }}
                    >
                      Summary
                    </Button>
                  </CardActions>
                </Card>

                <Card
                  sx={{
                    minWidth: 240,
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #ddd",
                    borderRadius: 5,
                    maxHeight: 300,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center", // Center content horizontally
                      p: 1, // Adjust padding if needed
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: 700,
                        textAlign: "center",
                        padding: "20px",
                      }}
                    >
                      Lookalike Audience
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontSize: "12px",
                        fontWeight: 500,
                        mr: "120px",
                      }}
                    >
                      Demo
                    </Typography>
                    <Typography
                      mt={5}
                      sx={{
                        color: "grey",
                        fontSize: "15px",
                        fontWeight: 500,
                        mr: "100px",
                      }}
                    >
                      Analysis
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontSize: "15px",
                        fontWeight: 500,
                        mr: "30px",
                      }}
                    >
                      Audience Creation
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 10,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        color: "#027453",
                        border: "2px solid #027453",
                        backgroundColor: "white",
                      }}
                    >
                      Summary
                    </Button>
                  </CardActions>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={2} sx={{ maxWidth: "1024px", marginLeft: "40px" }}>
              <Card
                sx={{
                  minWidth: 230,
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid #ddd",
                  borderRadius: 5,
                  maxHeight: 300,
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                    p: 1, // Adjust padding if needed
                  }}
                >
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "19px",
                      fontWeight: 700,
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    Train AI/ML Model
                  </Typography>
                  <Typography
                    sx={{
                      color: "grey",
                      fontSize: "12px",
                      fontWeight: 500,
                      mr: "120px",
                    }}
                  >
                    Demo
                  </Typography>
                  <Typography
                    mt={5}
                    sx={{
                      color: "grey",
                      fontSize: "15px",
                      fontWeight: 500,
                      mr: "100px",
                    }}
                  >
                    Analysis
                  </Typography>
                  <Typography
                    sx={{
                      color: "grey",
                      fontSize: "15px",
                      fontWeight: 500,
                      mr: "125px",
                    }}
                  >
                    Train
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 10,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      color: "#027453",
                      border: "2px solid #027453",
                      backgroundColor: "white",
                    }}
                  >
                    Summary
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
