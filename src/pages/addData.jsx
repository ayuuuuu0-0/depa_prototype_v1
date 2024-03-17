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
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i6 from "../assets/i6.png";
import i7 from "../assets/i7.png";

export default function AddData() {
  const navigate = useNavigate();

  const handleAwsClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  const HeaderWrapper = styled(Box)({
    display: "flex",
    alignItems: "center", // Align logo and heading vertically
    marginLeft: "20px", // Add left margin
    marginTop: "10px", // Add top margin (adjust as needed)
  });

  const StyledHeading = styled(Typography)({
    fontSize: "2rem", // Adjust font size as needed
    fontWeight: "bold",
    color: "#027453",
    marginLeft: "10px", // Add space between logo and heading
  });

  const StyledDetails = styled(Typography)({
    fontWeight: "bold",
    color: "#027453",
    fontSize: "sm",
    padding: "0.5rem", // Add padding all over
    backgroundColor: "#E2F6E6",
    borderRadius: "10px", // Add rounded border
    marginLeft: "10px",
  });

  const StyledTextarea = styled(Textarea)({
    width: "300px", // Adjust width as needed
    height: "40px",
    marginLeft: "20px", // Adjust height as needed
  });

  return (
    <>
      <Box sx={{ backgroundColor: "#F9F9F9", display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <HeaderWrapper>
            <img src={Logo} alt="Logo"></img>
            <StyledHeading variant="h4">Add data</StyledHeading>
          </HeaderWrapper>
          <Box sx={{ mt: 4 }}>
            <StyledDetails>Cleanrooom Details</StyledDetails>

            <Card
              size="lg"
              sx={{
                minWidth: 240,
                p: 2,
                marginLeft: "10px",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography fontWeight="bold">Enter Cleanroom Name:</Typography>
                <StyledTextarea
                  name="Outlined"
                  placeholder="CCR_Published_1"
                  variant="outlined"
                />
              </Box>
            </Card>
          </Box>
          <Box sx={{ mt: 4 }}>
            <StyledDetails mb="20px">Add Datasource*</StyledDetails>

            <Grid container spacing={2}>
              <Grid
                item
                xs={2}
                sx={{
                  maxWidth: "900px",
                  marginLeft: "40px",
                  maxHeight: "200px",
                }}
              >
                <Stack spacing={10} direction="row">
                  <Card
                    sx={{
                      minWidth: 280,
                      display: "flex",

                      border: "1px solid #ddd", // Added border with color and width
                      borderRadius: 2,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "row",

                        justifyContent: "flex-start",
                        p: 1,
                        height: 60,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          height: "50px", // Adjust height as needed
                          // width: "auto",
                          padding: "10px", // Maintain aspect ratio
                        }}
                        image={i1}
                        alt="i1"
                      />
                      <Typography
                        sx={{
                          padding: "15px",
                        }}
                      >
                        SnowFlake
                      </Typography>
                    </CardContent>
                  </Card>
                  <div
                    onClick={() => handleAwsClick("/import_data")}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      borderRadius: "2px",
                      display: "flex",
                      minWidth: "280px",
                      justifyContent: "flex-start",
                      height: "60px",
                    }}
                  >
                    <Card
                      sx={{
                        minWidth: 280,
                        display: "flex",

                        border: "1px solid #ddd", // Added border with color and width
                        borderRadius: 2,
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "row",

                          justifyContent: "flex-start",
                          p: 1,
                          height: 10,
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            height: "50px", // Adjust height as needed
                            width: "auto",
                            padding: "10px", // Maintain aspect ratio
                          }}
                          image={i2}
                          alt="i2"
                        />
                        <Typography
                          sx={{
                            textAlign: "center",
                            padding: "15px",
                          }}
                        >
                          AWS
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <Card
                    sx={{
                      minWidth: 280,
                      display: "flex",

                      border: "1px solid #ddd", // Added border with color and width
                      borderRadius: 2,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "row",

                        justifyContent: "flex-start",
                        p: 1,
                        height: 10,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          height: "50px", // Adjust height as needed
                          width: "auto",
                          padding: "10px", // Maintain aspect ratio
                        }}
                        image={i3}
                        alt="i3"
                      />
                      <Typography
                        sx={{
                          textAlign: "center",
                          padding: "15px",
                        }}
                      >
                        SalesForce
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={30} />
            <Grid container spacing={2}>
              <Grid item xs={2} sx={{ maxWidth: "1024px", marginLeft: "40px" }}>
                <Stack spacing={10} direction="row">
                  <Card
                    sx={{
                      minWidth: 280,
                      display: "flex",

                      border: "1px solid #ddd", // Added border with color and width
                      borderRadius: 2,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "row",

                        justifyContent: "flex-start",
                        p: 1,
                        height: 60,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          height: "50px", // Adjust height as needed
                          width: "auto",
                          padding: "10px", // Maintain aspect ratio
                        }}
                        image={i4}
                        alt="i4"
                      />
                      <Typography
                        sx={{
                          textAlign: "center",
                          padding: "15px",
                        }}
                      >
                        GCP
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 280,
                      display: "flex",

                      border: "1px solid #ddd", // Added border with color and width
                      borderRadius: 2,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "row",

                        justifyContent: "flex-start",
                        p: 1,
                        height: 60,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          height: "50px", // Adjust height as needed
                          width: "auto",
                          padding: "10px", // Maintain aspect ratio
                        }}
                        image={i4}
                        alt="i4"
                      />
                      <Typography
                        sx={{
                          textAlign: "center",
                          padding: "15px",
                        }}
                      >
                        Google Ads
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 280,
                      display: "flex",
                      border: "1px solid #ddd", // Added border with color a width
                      borderRadius: 2,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "row",

                        justifyContent: "flex-start",
                        p: 1,
                        height: 60,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          height: "50px", // Adjust height as needed
                          width: "auto",
                          padding: "10px", // Maintain aspect ratio
                        }}
                        image={i6}
                        alt="i6"
                      />
                      <Typography
                        sx={{
                          textAlign: "center",
                          padding: "15px",
                        }}
                      >
                        Meta Ads
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={30} />
            <Grid container spacing={2}>
              <Grid item xs={2} sx={{ maxWidth: "1024px", marginLeft: "40px" }}>
                <Card
                  sx={{
                    minWidth: 280,
                    display: "flex",

                    border: "1px solid #ddd", // Added border with color and width
                    borderRadius: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",

                      justifyContent: "flex-start",
                      p: 1,
                      height: 60,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: "50px", // Adjust height as needed
                        width: "auto",
                        padding: "10px", // Maintain aspect ratio
                      }}
                      image={i7}
                      alt="i7"
                    />
                    <Typography
                      sx={{
                        textAlign: "center",
                        padding: "15px",
                      }}
                    >
                      Azure
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
