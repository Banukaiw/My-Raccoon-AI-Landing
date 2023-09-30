import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/Home.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>


          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12 ggggggggggggggggg
                xs=3 gggggggg


                <>
        <div>
       <Image style={{ marginLeft:700,marginTop:50}}src="/images/125.png" width="600" height="500"></Image>  
      <div style={{ marginTop:-550}}class={styles.container3}></div>

    
   

    <h2 style={{textDecoration:'none', marginLeft:30,marginTop:-630, color:'black'}}>WorkBench</h2>     


    <p style={{textDecoration:'none', marginLeft:150,marginTop:70, fontSize:50,lineHeight:'60px', color:'black'}}>AI FOR <br></br>
        EVERYONE</p>

        <p style={{textDecoration:'none', marginLeft:150,marginTop:50, fontSize:15, fontFamily:'Arial', letterSpacing:'1.2px',lineHeight:'20px', color:'black'}}>This is a business intelligence platform that runs machine 
        <br></br> learning workloads and visualized result in diffrent forms. <br></br> Variouse ML algorithms are pre-programmed and loaded into <br></br>
        our backend. Users can play around with the examples and <br></br> sample dataset to get familiarized with the algorithms.
        </p>

         {/* <Stack spacing={2} direction="row">
         <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:150,marginTop:50,align:'center',}}  variant="contained">EXPLORE</Button>
         </Stack> */}

        <div class={styles.nav1}>
          <a class={styles.nav2} href='#'>Servises</a>
          <a class={styles.nav2} href='#'>About</a>
          <a class={styles.nav2} href='#'>Guide</a>
          
        </div>


         
        <h2 style={{textDecoration:'none', marginLeft:300,marginTop:20, fontSize:40, fontFamily:'Lucida Console'}}>SERVISES</h2> 

        <div style={{ marginLeft:150}}>
         <div class={styles.gallery} >
          <img src ="/images/127.jpg"></img>
          <div class={styles.desc}> Case Study</div>
          <div class={styles.des2}> This is providing the case studies where you can adopt your data into decisions</div>
          </div>

          <div class={styles.gallery}>
          <img src ="/images/128.jpg"></img>
          <div class={styles.desc}> Tools</div>
          <div class={styles.des2}>Prepare your datasets here </div>
          </div>

          <div class={styles.gallery}>
          <img src ="/images/129.jpg"></img>
          <div class={styles.desc}>ML Model Gallery</div>
          <div class={styles.des2}> Test our built models before you walk in, See the power</div>
          </div>
          
          <div class={styles.gallery}>
          <img src ="/images/130.jpg"></img>
          <div class={styles.desc}> Datasets</div>
          <div class={styles.des2}>This is where you can find datasets that derive you to a analysis to use for your business </div>
          </div>
        </div>

        <div>
         <h2 style={{textDecoration:'none', marginLeft:300,marginTop:450, fontSize:40, fontFamily:'Lucida Console'}}>ABOUT</h2> 

        {/*  <Image style={{ marginLeft:300,marginTop:0}}src="/images/126.png" width="500" height="500"></Image> */} 
         </div>

         <p style={{textDecoration:'none', marginLeft:900,marginTop:-350, fontSize:15, fontFamily:'Arial', letterSpacing:'1.2px',lineHeight:'20px'}}>This is a business intelligence platform that runs machine 
        <br></br> learning workloads and visualized result in diffrent forms. <br></br><br></br> Variouse ML algorithms are pre-programmed and loaded into <br></br>
        our backend.<br></br><br></br> Users can play around with the examples and  sample dataset<br></br> to get familiarized with the algorithms.
        </p>

      {/*   <Stack spacing={2} direction="row">
         <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:900,marginTop:90,align:'center',}}  variant="contained">Learn about the Development team</Button>
         </Stack>
 */}

         <h2 style={{textDecoration:'none', marginLeft:300,marginTop:120, fontSize:40, fontFamily:'Lucida Console'}}>USER GUIDE</h2>

         
         
         <div class={styles.body4}>
         <div class={styles.slider}>
           <div class={styles.images1}>
            <input type ="radio" name="slide" id="img1" checked></input>
            <input type ="radio" name="slide" id="img2"></input>
            <input type ="radio" name="slide" id="img3"></input>
            <input type ="radio" name="slide" id="img4"></input>
            <input type ="radio" name="slide" id="img5"></input>
             <img src="/images/132.jpg" class="m1" alt ="img1"></img>
             <img src="/images/133.jpg" class="m2" alt ="img2"></img>
             <img src="/images/134.jpg" class="m3" alt ="img3"></img>
             <img src="/images/135.jpg" class="m4" alt ="img4"></img>
             <img src="/images/136.jpg" class="m5" alt ="img5"></img>
            </div>

            <div class={styles.dots}>
              <lable for="img1"></lable>
              <lable for="img2"></lable>
              <lable for="img3"></lable>
              <lable for="img4"></lable>
            </div>
        </div>

        </div>        
</div>
</>
                
                
                
                </Paper>
          </Grid>
         
        </Grid>
      </div>
    );
  }
  
  

