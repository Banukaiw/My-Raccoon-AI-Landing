import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "../styles/developstyle.module.css";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet";
import Records from "./team.json";

<Helmet>
  <script src="/path/to/resource.js" type="text/javascript" />
</Helmet>;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
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
                          fontFamily: "Audiowide",
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
                            color: "black",
                            align: "center",
                            padding: "10px 20px",
                          }}
                          variant="contained"
                        >
                          EXPLORE
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
                        style={{ padding: "10px 100px" }}
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

          {/* /////////////////////////////////////////////////////////////////// */}

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={5} style={{ backgroundColor: "#12172b" }}>
                <Item style={{ backgroundColor: "#12172b" }}>
                  {Records.map((record) => {
                    return (
                      <div class={styles.product} style={{}}>
                        <img
                          class={styles.profile1}
                          src={record.image}
                          alt={record.image}
                        ></img>

                        <br></br>
                      </div>
                    );
                  })}
                </Item>
              </Grid>
              <Grid item xs={7}>
                <Item>
                  {Records.map((record) => {
                    return (
                      <div class={styles.product} style={{}}>
                        <p class={styles.title}>{record.name}</p>
                        <p class={styles.description}>{record.description}</p>

                        <p class={styles.price}>
                          <span>{record.facebook}</span>
                        </p>

                        <br></br>
                      </div>
                    );
                  })}

                  <head>
                    <title>Racoon AI</title>
                  </head>

                  <body>
                    <div class={styles.products}></div>

                    <script src="developscript.js"></script>
                    <script src="developscript.js"></script>
                    <script
                      src="/pages/developscript.js"
                      type="text/javascript"
                    />

                    <Helmet>
                      sssss
                      <script
                        src="/pages/developscript.js"
                        type="text/javascript"
                      />
                    </Helmet>
                  </body>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
