import { handleClientScriptLoad } from "next/script";
import { userAgent, userAgentFromString } from "next/server";
import React from "react";
import { useReducer, useState } from "react";
import Records from "../public/services.json";
import styles from "../styles/MyData.module.css";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MyDataComponent({ data }) {
  const [selectedId, setSelectedId] = useState(data);
  const selectedData = Records.find((item) => item.id === data);
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Item>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <Item
                      style={{
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                    >
                      {/* style={{ marginLeft: "10%" }} */}

                      {Records.map((record) => {
                        if (record.id == data) {
                          return (
                            <>
                              <div class={styles.title}> {record.title1} </div>

                              <hr
                                style={{
                                  width: "100%",
                                  color: "#0040ff",
                                  marginBottom: "5%",
                                  marginTop: "3%",
                                }}
                              ></hr>
                              <div class={styles.description}>
                                {record.description}
                              </div>

                              <div class={styles.description1}>
                                {record.description1}
                              </div>
                            </>
                          );
                        }
                      })}
                    </Item>
                  </Grid>

                  <Grid item md={5} style={{ marginLeft:"10%", marginTop:"2.5%" }}>
                    <Item style={{ borderRadius: 0, boxShadow: "none",  }}
                      
                    >
                      {/* style={{ marginLeft: "10%" }} */}

                      {Records.map((record) => {
                        if (record.id == data) {
                          return (
                            <>
                              <img class={styles.profile2} src={record.image1}></img>
                            </>
                          );
                        }
                      })}
                    </Item>
                  </Grid>
                </Grid>
              </Box>

              <br></br>

              {Records.map((record) => {
                if (record.id == data) {
                  return (
                    <div className="col">
                      <Grid container spacing={1}>
                        {record.subs &&
                          Object.entries(record.subs).map(([key, value]) => (
                            <Grid item xs={2.9}>
                              <Item
                                style={{
                                  borderRadius: 0,
                                  boxShadow: "none",
                                }}
                              >
                                <div key={key}>
                                  <Card
                                    sx={{
                                      maxWidth: 345,
                                      maxHeight: 200,
                                      minHeight: 150,
                                      backgroundColor: "#c6eeec",
                                    }}
                                  >
                                    <CardActionArea>
                                      <CardContent>
                                        <Typography
                                          gutterBottom
                                          variant="h6"
                                          component="div"
                                          style={{
                                            fontSize: 18,
                                            fontWeight: 700,
                                          }}
                                        >
                                          <div>{key}</div>
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          color="text.secondary"
                                        >
                                          <div>{value}</div>
                                        </Typography>
                                      </CardContent>
                                    </CardActionArea>
                                  </Card>
                                </div>
                              </Item>
                            </Grid>
                          ))}
                      </Grid>
                    </div>
                  );
                }
              })}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MyDataComponent;
