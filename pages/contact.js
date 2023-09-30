import styles from "../styles/contact.module.css";
import Button from "@mui/material/Button";
import { CardContent, colors, TextField, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
   
    <Box sx={{ flexGrow: 0, m: 0 }}>
      <Grid container spacing={0} sx={{ flexGrow: 0, m: 0 }}>
        <Grid item xs={12} sx={{ flexGrow: 0, m: 0 }} style={{}}>
          <Item sx={{ flexGrow: 0, m: 0 }} style={{ borderRadius: 0, boxShadow: "none", backgroundColor:'#d7fafb', }}>
            {/* <div class={styles.image1}>
              <img src="/images/contactus1.jpg"></img>
            </div> */}

            <head>
              <title>Racoon AI</title>
            </head>

            <div class={styles.image1}>
              <div style={{marginLeft:'%', padding:'10% 10% ',textAlign:"left", color:'white'}}>
                <div style={{fontFamily:'Consolas',fontSize:35,fontWeight:700}} >Contact us</div>
                <div style={{fontFamily:'Candara',fontSize:17,fontWeight:700}} >Hava a question or need assistance?<br></br>
                We are here to help you with anything you need!</div>
              <br></br>
             
              </div>
             
              
           
              
            </div>
          </Item>
        </Grid>

        {/* ////////////////////////////////////////aluth kalla */}
        <Grid container spacing={0}>
          

          <Grid
            item
            md={1.5}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center" style={{
              zIndex:9999999999999,
              position: "sticky",
              width:'100%',
               backgroundColor:'#07293d', 
             
             
              top: "0px",
              
              
            }}
          >
            <Item
              style={{
                lineHeight: "50px",
                fontSize: "15px",
                fontWeight: 900,
                align: "left",
                backgroundColor:'#07293d',
                borderRadius: 0, boxShadow: "none"
                
              }}
            >
              <section class={styles.stick1}
                style={{ zIndex:9999999999999,
                  position: "sticky",
              
                  backgroundColor:'#07293d',
                  color:'#d7fafb',
                 
                  top: "50px",
            
                
                }}
              >
                <a href="#contactin">C.Information</a>
                <br></br> <a href="#contactus">Contact Us</a>
               
              </section>
              <div class={styles.stickSup}></div>
            </Item>
          </Grid>

          <Grid item xs={10.5} style={{borderRadius: 0, boxShadow: "none"}}>
          
              <Item style={{borderRadius: 0, boxShadow: "none"}}>
                {/* another box in 1st box */}

                <section id="contactin">
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 20,
                      lineHeight: "20px",
                      textAlign: "left",
                      marginLeft:'2%',
                      color:'black'
                    }}
                  >
                    CONTACT INFORMATION
                  </p>
                </section>

                <hr style={{ width: "90%", color: "#0040ff",  marginLeft:'2%' }}></hr>

                <div class={styles.image2} style={{border:5, borderColor:'black',boxShadow:5 }}></div>
                <img
                      style={{ padding: "30px 10px", border:5, borderColor:'black' }}
                      src="/images/map contact.jpg"
                      width="90%"
                      
                    ></img>



                <div class={styles.center1}>
                  <Box
                    style={{ justifyConten: "center", padding: "10px 20px" }}
                    sx={{ flexGrow: 0 }}
                    md={12}
                  >
                    <Grid container spacing={3} style={{ marginLeft: "10%" }}>
                      {/* <div class={styles.box} > */}
                      <Grid item md={3} style={{  }}>
                        <Item
                          class={styles.card}
                          style={{ padding: "10px 10px" }}
                        >
                          <div>
                            <i class="fas fa-bars"></i>
                            <EmailIcon></EmailIcon>
                            <h3 style={{ marginTop: 5 }}>Email</h3>
                            <div class="pra">
                              <p>
                                aselaeranda@slt.com.lk<br></br>
                                vimukthi@slt.com.lk
                              </p>
                            </div>
                          </div>
                        </Item>
                      </Grid>
                      <Grid item md={3} style={{}}>
                        <Item
                          class={styles.card}
                          style={{ padding: "10px 10px" }}
                        >
                          <div>
                            <i class="fas fa-bars"></i>
                            <PhoneIcon></PhoneIcon>
                            <h3 style={{ marginTop: 5 }}>Phone Number</h3>
                            <div>
                              <p>
                                +9471 534 2109<br></br>
                                +9471 410 9665
                              </p>
                            </div>
                          </div>
                        </Item>
                      </Grid>
                      <Grid item md={3} style={{}}>
                        <Item
                          class={styles.card}
                          style={{ padding: "10px 10px" }}
                        >
                          <div>
                            <i class="fas fa-bars"></i>
                            <PlaceIcon></PlaceIcon>
                            <h3 style={{ marginTop: 5 }}>Location</h3>
                            <div class="pra">
                              <p>
                                SLT Digital lab section <br></br>
                                Sri Lanka Telecom PLC <br></br>
                                Lotus road <br></br>
                                P.O.BOX 503 <br></br>
                                Colombo 01
                              </p>
                            </div>
                          </div>
                        </Item>
                      </Grid>
                    </Grid>

                      <section id="contactus">
                        <p
                          style={{
                            textDecoration: "none",
                            paddingRight: 600,

                            fontSize: 20,
                            lineHeight: "20px",
                            textAlign: "left",
                            color:'black'
                          }}
                        >
                          CONTACT US
                        </p>
                      </section>
                      <hr style={{ width: "100%", color: "#0040ff" }}></hr>

                      <p class={styles.font1} style={{}}>
                        if you have any question or queries, members of staff
                        will always be happy to help. Feel free to contact us by
                        email and we will be sure to<br></br>
                        get back to you as soon as possible
                      </p>

                      <Grid  item md={10} style={{marginLeft: "10%"}}>
                        <Item style={{borderRadius: 0, boxShadow: "none"}} >
                          <div class={styles.card2} >
                            <div>
                              <card>
                                <CardContent>
                                  <Typography gutterBottom variant="h5">
                                    Send Us a message
                                  </Typography>
                                  <form>
                                    <Grid container spacing={1}>
                                      <Grid xs={12} sm={6} item>
                                        <TextField
                                          label="First Name"
                                          placeholder="Enter"
                                          variant="outlined"
                                          fullWidth
                                          required
                                        />
                                      </Grid>

                                      <Grid xs={12} sm={6} item>
                                        <TextField
                                          type="email"
                                          label="First Name"
                                          placeholder="Enter"
                                          variant="outlined"
                                          fullWidth
                                          required
                                        />
                                      </Grid>

                                      <Grid xs={12} item>
                                        <TextField
                                          label="Subject"
                                          placeholder="Enter"
                                          variant="outlined"
                                          fullWidth
                                          required
                                        />
                                      </Grid>

                                      <Grid xs={12} item>
                                        <TextField
                                          label="Massage"
                                          multiline
                                          rows={4}
                                          placeholder="Enter"
                                          variant="outlined"
                                          fullWidth
                                          required
                                        />
                                      </Grid>

                                      <Grid xs={12} item>
                                        <Button
                                          style={{ padding: "10px 50px" }}
                                          type="submit"
                                          variant="contained"
                                          color="primary"
                                        >
                                          Submit
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  </form>
                                </CardContent>
                              </card>
                            </div>
                          </div>
                        </Item>
                      </Grid>
                    
                  </Box>
                </div>
              </Item>
          
          </Grid>
        </Grid>

        {/* ////////////////////////////////////////////////end of aluth eka */}

        
      </Grid>
    </Box>
  );
}
