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

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
                        Meet Our<br></br>
                        <span style={{ color: "blue" }}>Development Team</span>
                      </p>

                      <p
                        style={{
                          textDecoration: "none",
                          marginLeft: 10,
                          marginTop: 10,
                          fontSize: 19,
                          fontFamily: "Merriweather",
                          letterSpacing: "1.2px",
                          lineHeight: "20px",
                          color: "#232121",
                        }}
                      >

                      

                        Our development team creates innovative and high-quality
                        solutions for clients. We approach each project with a
                        fresh perspective, utilizing the latest technologies and
                        tools. Our talented professionals work collaboratively
                        to exceed expectations and deliver tailored solutions
                        that add real value to our clients' businesses.
                      </p>
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
                        src="/images/devteam.jpeg"
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

          {/*  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
       
      </Grid>
    </Box> */}

          {/* /////////////////////////////////////////////////////////////////////////// */}



          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                style={{ backgroundColor: "#010b24", border: 0, boxShadow: 0 }}
              >
                <Item style={{  borderRadius: 0,
                                    boxShadow: "none", }}>


                  {Records.map((record) => {
                    return (
                      <div style={{}} class={styles.center1}>
                        <center>
                          <Box
                            sx={{ flexGrow: 1 }}
                            style={{ border: 0, boxShadow: 0 }}
                          >
                            <Grid
                              container
                              spacing={0}
                              style={{ border: 0, boxShadow: 0 }}
                            >
                              <Grid item md={2} style={{ width: "100%" }}>
                                <Item style={{ height: "100%",  borderRadius: 0,
                                    boxShadow: "none", }}></Item>
                              </Grid>

                              <Grid item md={4} style={{ width: "100%" }}>
                                <Item
                                  style={{
                                    height: "100%",
                                    border: 0,
                                    boxShadow: 0,
                                  }}
                                >
                                  <div class={styles.product1}>
                                    <img
                                      class={styles.profile1}
                                      src={record.image}
                                    ></img>

                                    <br></br>
                                  </div>
                                </Item>
                              </Grid>

                              <Grid
                                item
                                md={4}
                                style={{
                                  width: "100%",
                                  border: 0,
                                  boxShadow: 0,
                                }}
                              >
                                <Item
                                  style={{
                                    height: "100%",
                                    borderRadius: 0,
                                    boxShadow: "none",
                                  }}
                                >
                                  <div class={styles.product} style={{}}>
                                    <p class={styles.title}>{record.name}</p>
                                    <p class={styles.description}>
                                      {record.description}
                                    </p>
                                    <p class={styles.price}>
                                      <span>{record.position}</span>
                                    </p>

                                    <center>
                                      <div
                                        class={styles.sociallink}
                                        style={{ paddingLeft: "15%" }}
                                      >
                                        <ul class={styles.stick1}>
                                          <li class={styles.socialitem}>
                                            <a href="https://facebook.com/">
                                              <FacebookIcon
                                                sx={{ fontSize: 30 }}
                                              ></FacebookIcon>
                                            </a>
                                          </li>
                                          <li class={styles.socialitem}>
                                            <a href="https://twitter.com/">
                                              <TwitterIcon
                                                sx={{ fontSize: 30 }}
                                              ></TwitterIcon>
                                            </a>
                                          </li>

                                          <li class={styles.socialitem}>
                                            <a href="https://github.com/">
                                              <GitHubIcon
                                                sx={{ fontSize: 30 }}
                                              ></GitHubIcon>
                                            </a>
                                          </li>
                                          <li class={styles.socialitem}>
                                            <a href="https://lk.linkedin.com/">
                                              <LinkedInIcon
                                                sx={{ fontSize: 30 }}
                                              ></LinkedInIcon>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </center>

                                    <br></br>
                                  </div>
                                </Item>
                              </Grid>

                              {/*  <Grid item md={2} style={{width:"100%"}}>
                              <Item style={{height:"100%"}}>
                                 </Item>
                            </Grid> */}
                            </Grid>
                          </Box>
                        </center>
                      </div>
                    );
                  })}
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
