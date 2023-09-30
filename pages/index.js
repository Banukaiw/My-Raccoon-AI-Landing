import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "../styles/index.module.css";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Records from "../public/services.json";
//import Test1 from "../components/Test1";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const populatePost = (id, title, description) => {
  console.log(id);
  console.log(title);
  console.log(description);
};

export default function BasicGrid(props) {
  return (
    <>
      <Box
        sx={{ flexGrow: 0, m: 0, border: 0, boxShadow: 0 }}
        style={{
          boxShadow: 0,
        }}
      >
        <Grid container spacing={0} style={{ border: 0, margin: 0 }}>
          <Grid
            item
            xs={12}
            sx={{ flexGrow: 0, m: 0, border: 0 }}
            style={{ backgroundColor: "white" }}
          >
            <Item
              style={{
                borderRadius: 0,
                boxShadow: "none",
                backgroundColor: "#22baec",
              }}
            >
              {/* //1st row box 2///////////////////////// */}
              <head>
                <title>Racoon AI</title>
              </head>

              <Box sx={{ flexGrow: 0, border: 0, boxShadow: 0 }}>
                <Grid container spacing={0} style={{ boxShadow: 0 }}>
                  {/* ////////////// */}
                  <Grid
                    item
                    md={5}
                    sx={{
                      flexGrow: 0,
                      m: 0,
                      border: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Item
                      style={{
                        backgroundColor: "#22baec",
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                    >
                      <div>
                        <section id="workbench1">
                          <h5
                            style={{
                              textDecoration: "none",
                              padding: "0px auto",
                              color: "black",
                              textAlign: "left",
                            }}
                          ></h5>{" "}
                        </section>
                      </div>

                      <p
                        style={{
                          textDecoration: "none",
                          marginLeft: 10,

                          fontSize: 50,
                          lineHeight: "60px",
                          color: "black",
                        }}
                      >
                        AI FOR <br></br>
                        EVERYONE
                      </p>

                      <p
                        style={{
                          textDecoration: "none",
                          marginLeft: 10,
                          marginTop: 10,
                          fontSize: 15,
                          fontFamily: "Arial",
                          letterSpacing: "1.2px",
                          lineHeight: "20px",
                          color: "black",
                        }}
                      >
                        This is a business intelligence platform that runs
                        machine
                        <br></br> learning workloads and visualized result in
                        diffrent forms.
                        <br></br> Variouse ML algorithms are pre-programmed and
                        loaded into <br></br>
                        our backend. Users can play around with the examples and
                        <br></br> sample dataset to get familiarized with the
                        algorithms.
                      </p>

                      <div style={{ padding: "20px 100px" }}>
                        <Button
                          sx={{ cursor: "pointer" }}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            align: "center",
                            padding: "10px 20px",
                          }}
                          variant="contained"
                        >
                          <a href="/workbench">EXPLORE</a>
                        </Button>
                      </div>
                    </Item>
                  </Grid>

                  {/* //////////////////  image*/}

                  <Grid item md={7} sx={{ flexGrow: 0, height: "100%" }}>
                    <Item
                      style={{
                        backgroundColor: "#22baec",
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                    >
                      <img
                        class={styles.profile1}
                        style={{ padding: "10px 100px", borderradius: "15px" }}
                        src="/images/casestudies.jpg"
                        width="100%"
                        height="auto"
                      ></img>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>

          {/* //2nd row grid of 1st box  (row 2 a 1) */}

          {/* //another box for devede to stick nav and of 1st box  (row 2 a 1.1) */}
          <Box sx={{ flexGrow: 0, m: 0 }}>
            <Grid container spacing={0} style={{}}>
              <Grid
                item
                md={1.5}
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{
                  zIndex: 9999999999999,
                  position: "sticky",
                  top: "0px",
                  backgroundColor: "#22baec",
                }}
              >
                <Item
                  style={{
                    lineHeight: "50px",
                    fontSize: "15px",
                    fontWeight: 900,
                    align: "left",
                    borderRadius: 0,
                    boxShadow: "none",
                    backgroundColor: "#22baec",
                  }}
                >
                  <section
                    class={styles.stick1}
                    style={{
                      position: "sticky",
                      top: "0px",
                    }}
                  >
                    <a href="#workbench1">Workbench</a>
                    <br></br> <a href="#servises1">Servises</a>
                    <br></br> <a href="#about1">About</a>
                    <br></br>
                    <a href="#guide1">Guide</a>
                  </section>
                  <div class={styles.stickSup}></div>
                </Item>
              </Grid>

              <Grid item xs={10}>
                <Item style={{ borderRadius: 0, boxShadow: "none" }}>
                  {/* aluthin wena karapu 1ke arambaya */}

                  <section id="servises1">
                    <p
                      style={{
                        fontSize: 25,
                        lineHeight: "20px",
                        textAlign: "left",
                        marginLeft: "2%",
                        marginTop: "3%",
                        color: "black",
                      }}
                    >
                      SERVICES
                    </p>
                  </section>
                  <hr
                    style={{
                      width: "100%",
                      color: "#0040ff",
                      marginLeft: "2%",
                      marginBottom: "5%",
                    }}
                  ></hr>

                  <br></br>

                  <Box sx={{ flexGrow: 1, m: 0 }}>
                    <Grid container spacing={1} style={{ marginLeft: "10%" }}>
                      {Records.map((Records) => {
                        return (
                          <Grid item md={2.5}>
                            <Item class={styles.gallery}>
                              <img
                                class={styles.profile1}
                                src={Records.image}
                              ></img>
                              <div class={styles.desc}> {Records.title} </div>
                              <div
                                class={styles.desc2}
                                style={{ textAlign: "center" }}
                              >
                                {Records.description}
                              </div>

                              <div>
                                <div class={styles.card1stats}>
                                  <div>
                                    <button class={styles.cardstats2}>
                                      {MyComponent(Records.id)}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Item>
                          </Grid>
                        );
                      })}
                      ;
                    </Grid>
                  </Box>

                  {/* //////////////////////////////////////////////// */}

                  {/* another row grid */}

                  <Grid item md={12} sx={{ flexGrow: 0, m: -1 }}>
                    <Item
                      sx={{
                        flexGrow: 0,
                        m: -1,
                        border: 0,
                        boxShadow: "none",
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                      style={{}}
                    >
                      <section id="about1">
                        <p
                          style={{
                            fontSize: 25,
                            lineHeight: "20px",
                            textAlign: "left",
                            marginLeft: "2%",
                            marginTop: "5%",
                            color: "black",
                          }}
                        >
                          ABOUT
                        </p>
                      </section>

                      <hr
                        style={{
                          width: "100%",
                          color: "#0040ff",
                          marginLeft: "2%",
                          marginBottom: "5%",
                        }}
                      ></hr>

                      <Box
                        sx={{
                          flexGrow: 0,
                          m: -1,
                          border: 0,
                          boxShadow: "none",
                        }}
                        style={{ alignItems: "left" }}
                      >
                        <Grid
                          container
                          spacing={0}
                          style={{ padding: "10px 10px" }}
                        >
                          <Grid
                            md={7}
                            sx={{
                              flexGrow: 0,
                              m: 0,
                              border: 0,
                            }}
                          >
                            <Item
                              style={{ borderRadius: 0, boxShadow: "none" }}
                            >
                              <div>
                                <img
                                  style={{
                                    width: "90%",
                                  }}
                                  src="/images/about.jpg"
                                ></img>
                              </div>
                            </Item>
                          </Grid>

                          {/* //////////////////  image*/}

                          <Grid
                            item
                            md={5}
                            sx={{ flexGrow: 0, m: 0, border: 0, width: "100%" }}
                          >
                            <Item
                              style={{
                                padding: "7px 10px",
                                borderRadius: 0,
                                boxShadow: "none",
                              }}
                            >
                              <p
                                style={{
                                  textDecoration: "none",
                                  padding: "0px 30px",
                                  fontSize: 15,
                                  fontFamily: "Arial",
                                  letterSpacing: "1.2px",
                                  lineHeight: "20px",
                                }}
                              >
                                This is a business intelligence platform that
                                runs machine
                                <br></br> learning workloads and visualized
                                result in diffrent forms.
                                <br></br>
                                <br></br> Variouse ML algorithms are
                                pre-programmed and loaded into <br></br>
                                our backend.<br></br>
                                <br></br> Users can play around with the
                                examples and sample dataset<br></br>
                                to get familiarized with the algorithms.
                              </p>

                              <Stack
                                spacing={2}
                                direction="row"
                                style={{ padding: "60px 60px" }}
                              >
                                <Button
                                  sx={{ cursor: "pointer" }}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                    padding: "5px 20px",
                                    minWidth: "110px",
                                  }}
                                  variant="contained"
                                >
                                  <a href="/developmentpage">
                                    Learn about the Development teamr
                                  </a>
                                </Button>
                              </Stack>
                            </Item>
                          </Grid>
                        </Grid>
                      </Box>

                      {/* anothe grid of 1st box */}

                      <section id="guide1">
                        <p
                          style={{
                            fontSize: 25,
                            lineHeight: "20px",
                            textAlign: "left",
                            marginLeft: "2%",
                            marginTop: "5%",
                            color: "black",
                          }}
                        >
                          USER GUIDE
                        </p>
                      </section>

                      <hr
                        style={{
                          width: "100%",
                          color: "#0040ff",
                          marginLeft: "2%",
                          marginBottom: "5%",
                        }}
                      ></hr>

                      <Grid item md={12}>
                        <Item
                          style={{ marginLeft: "10%" }}
                          class={styles.background12}
                        >
                          <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={0}>
                              <center>
                                <div style={{}}>
                                  <Grid item md={9} style={{}}>
                                    <Item style={{ align: "center" }}>
                                      <div style={{ padding: "10px 20px" }}>
                                        <Slider />
                                      </div>
                                    </Item>
                                  </Grid>
                                </div>
                              </center>
                            </Grid>
                          </Box>
                        </Item>
                      </Grid>
                    </Item>
                  </Grid>

                  {/* ///////////////////////////////////////////////////////////////////////////////ara aluth dapu tike end eka  */}
                </Item>
              </Grid>
            </Grid>
          </Box>
          {/* /////// end of (row 2 a 1.1) box  */}
        </Grid>
      </Box>
    </>
  );
}

function MyComponent(conc) {
  const myString = "/DataFlech?val=" + conc;
  return (
    <div>
      <a href={myString}>View</a>
    </div>
  );
}
