import { Typography } from "@mui/material";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import styles from '../styles/footer.module.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Footer = () => {
  return (
    


 <Box  sx={{ flexGrow: 1,
   backgroundColor: "#2E2E2E",
    color: "bg-gray-100 container mx-auto px-6 pt-10 pb-6 ",
    bottom: 0,
    width: "100%",
    height:"250px",
    position: "relative",
    border:'none'
   }}>


 <Grid  container spacing={0} sx={{ border: 0 }}>
   <Grid   item md sx={{ border: 0 ,width:'100%'}}>
     <Item style={{ backgroundColor:'#2E2E2E', borderRadius: 0,
                  boxShadow: "none",}} sx={{ border: 0 }}>

     <Image style={{marginTop:35 }}src="/images/raccoon-new-full.png" width="144" height="33"></Image> 
    
                    <Typography> <p style={{  color:'white'}}>
                      SLT Digital lab section <br></br>
                    Sri Lanka Telecom PLC <br></br>              
                    Lotus road <br></br>
                    P.O.BOX 503 <br></br>
                    Colombo 01</p></Typography>

     </Item>
   </Grid>
   <Grid item md={6} style={{ width:'100%', height:'100%'}}>
     <Item style={{ backgroundColor:'#2E2E2E', borderRadius: 0,
                  boxShadow: "none",}}>

     <div class={styles.nav} >
                          <ul class={styles.stick1}>
                            <li><Typography><a>Home</a></Typography></li>
                            <li><Typography><a >Index</a></Typography></li>
                            <li><Typography><a>Privacy Policy</a></Typography></li>
                            <li><Typography><a >Contact</a></Typography></li>
                          
                          </ul>
                          </div> 


                            <hr style={{padding:'0px 0px', color:'white',  }}></hr> 

                             <div style={{ color:'white', textAlign:'center', padding:'25px 10px'}} class={styles.stick1}>
                        Raccoon AI Version 0.2.7 | Workbench Version 0.2.7 <br></br>
                        Copyright &copy; Web Coding Pro.2022 | Raccoon AI <br></br> 
                        Design by <span style={{ color:'blue' }}>SLT Digital Lab</span> <br></br>
                        All Rights Reserved
                        </div> 


                     </Item>
   </Grid>
   <Grid item md sx={{ border: 0, borderBottom:'none', }} style={{ width:'100%', height:'100%'}}>
     <Item style={{ backgroundColor:'#2E2E2E', borderBottom:0, height:'100%',  borderRadius: 0,
                  boxShadow: "none",}} sx={{ border: 0 ,border:0}}>


     <div class={styles.sociallink}>
                          <ul class={styles.stick1}>
                            <li class={styles.socialitem}><a href="https://facebook.com/"><FacebookIcon sx={{ fontSize: 30 }} ></FacebookIcon></a></li>
                            <li class={styles.socialitem}><a href="https://twitter.com/"><TwitterIcon sx={{ fontSize: 30 }}></TwitterIcon></a></li>
                            <li class={styles.socialitem}><a href="https://www.youtube.com/"><YouTubeIcon sx={{ fontSize: 30 }}></YouTubeIcon></a></li>
                            <li class={styles.socialitem}><a href="https://github.com/"><GitHubIcon sx={{ fontSize: 30 }}></GitHubIcon></a></li>
                            <li class={styles.socialitem}><a href="https://lk.linkedin.com/"><LinkedInIcon sx={{ fontSize: 30 }}></LinkedInIcon></a></li>
                          </ul> 

                        </div>  

                       


     </Item>
   </Grid>
 </Grid>
</Box>


  );
}

export default Footer