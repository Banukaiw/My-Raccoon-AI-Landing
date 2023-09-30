import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
;

///grid
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

///grid
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

export default function About() {
  return (
    <>
    <div>
        <Head>
            <title>Create next App</title>       
        </Head>
  

    <div>
      <h2 style={{textDecoration:'none', marginLeft:30,marginTop:10}}>WorkBench</h2>     
    </div>
   
    <div>
      <h2 style={{textDecoration:'none',color:'#0040ff', marginLeft:170,marginTop:110,fontSize: '20px'}}>Get Started</h2>
      <hr style={{width:'300px', height:'3px', color:'#0040ff', marginLeft:90,marginTop:-17, }}></hr>
  
    </div>

    


    <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-5,
        border: '5px solid red',
        maxWidth: 700,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>CASE STUDY</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This case study refers to works that you will lead to analyze your data to find the best prdicted result</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:400,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>



    <div>
      <h2 style={{textDecoration:'none',color:'#0040ff', marginLeft:170,marginTop:210,fontSize: '20px'}}>Tools to Prepair</h2>
      <hr style={{width:'300px', height:'3px', color:'#0040ff', marginLeft:100,marginTop:-17, }}></hr>
    </div>


    <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-7,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>ANALYZE YOUR DATASET</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This toolkit provides a rich insight in to your dataset. Our funtions evaluate your 
      dataset on-the-spot and provides analysis helping you to identify impurities and biases in your data set.</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>




      <Paper 
      sx={{
        p: 3,
        marginLeft:125,
        marginTop:-31,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>PREPROCESS & DOWNLOAD</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This tool takes your dataset in to our system for preprocessing and data cleaning.
      you will be able to download your dataset after the cleaning process. The cleaned dataset then can use through our machine learning model gallery.</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:80,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>

      
<Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-4,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>ANALYZE YOUR DATASET</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This toolkit provides a rich insight in to your dataset. Our funtions evaluate your 
      dataset on-the-spot and provides analysis helping you to identify impurities and biases in your data set.</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>
      




      <div>
      <h2 style={{textDecoration:'none',color:'#0040ff', marginLeft:170,marginTop:210,fontSize: '20px'}}>ML Models Gallery</h2>
    </div>
    <hr style={{width:'300px', height:'3px', color:'#0040ff', marginLeft:100,marginTop:-17, }}></hr>

    <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-7,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>LINEAR REGRESSION</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This machine learning algorithm allows you to identify linear pattern between two variables
      in your dataset. After feeding enough data, you will be able to provide a reasonable prediction based on our model</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>


      <Paper 
      sx={{
        p: 3,
        marginLeft:125,
        marginTop:-34,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>MULTIPLE REGRESSION</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This Machine Learning algorithm alllows you to identify linear pattern between two or more variable in your dataset.after feeding enough data, you will be able to provide a reasonable prediction based on our model.</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:80,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>

      <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:1,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>DECISION THREE</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}></h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>


      <Paper 
      sx={{
        p: 3,
        marginLeft:125,
        marginTop:-18,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>ARTIFICIAL NEURAL NETWORK</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}></h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:80,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>


      <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-2,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>LOGISTIC REGRESSION</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This is one of the most popular Machine learning algorithms, which is used for solving 
       classification problems.this algorithm predict the categorical dependent variable using a given set of independent variable</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>



      <Paper 
      sx={{
        p: 3,
        marginLeft:125,
        marginTop:-31,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>K NEAREST NEIGHBOUR</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This tool takes your dataset in to our system for preprocessing and data cleaning.
      you will be able to download your dataset after the cleaning process. The cleaned dataset then can use through our machine learning model gallery.</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:80,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>


      <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-4,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>RANDOM FOREST REGRESSION</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}></h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>





      <div>
      <h2 style={{textDecoration:'none',color:'#0040ff', marginLeft:170,marginTop:130,fontSize: '20px'}}>Datasets</h2>
      <hr style={{width:'300px', height:'3px', color:'#0040ff', marginLeft:70,marginTop:-17, }}></hr>
    </div>


    <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-7,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>RICE PRODUCTION</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>Rice production is one of the main production and staple food in srilanka. This dataset comprised with production 
       of rice in both yala and maha seasons from 1952 to 2010</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>


      <Paper 
      sx={{
        p: 3,
        marginLeft:125,
        marginTop:-31,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>COMMUNITY BASED STAT.DATA</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This dataset provides information on the community staticcal data in srilanka.
      These dataset are based on goverment published survey and questiones</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:80,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>

      <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-3,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>ECONOMICAL DATA</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This dataset has econimical data of Sri lanka mostly forcus on gross domestic and industrial production.</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>


      <Paper 
      sx={{
        p: 3,
        marginLeft:125,
        marginTop:-23,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>GOLD PRICES</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>Because of the change in goverment gold resrves and intrest trends gold price changes daily.This
      graph shows the latest upto-date gold price in sri lanka</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:80,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>


      <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-8,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>AGRONOMY & WEATHER</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>This is an approach to weather forecasting which uses machine learning algorithms to genetate
       fast gloable weather forcasts based on past weather data</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>



      <Paper 
      sx={{
        p: 3,
        marginLeft:125,
        marginTop:-23,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>DOWNLOAD SAMPLE DATASETS</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}>Download data set used in the model gallery examples.Availble in CSV and XLXS format.
      All the dataset we are using is openly available in the internet</h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:80,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>
     

      <div>
      <h2 style={{textDecoration:'none',color:'#0040ff', marginLeft:170,marginTop:130,fontSize: '20px'}}>User Login</h2>
      

      <hr style={{width:'300px', height:'3px', color:'#0040ff', marginLeft:80,marginTop:-17, }}></hr>
    </div>
    

    <Paper 
      sx={{
        p: 3,
        marginLeft:80,
        marginTop:-7,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>USER MANAGEMENT</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}></h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:50,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>


      <Paper 
      sx={{
        p: 3,
        marginLeft:125,
        marginTop:-17,
        border: '5px solid red',
        maxWidth: 350,
        flexGrow: 1,
        
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#77CCFF' : '#77CCFF',
      }}
    >
      <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '20px'}}>SUBSCRIPTION PORTAL</h2> 
     </div>

     <div>
      <h2 style={{textDecoration:'none', marginLeft:10,marginTop:-5, fontSize: '15px'}}></h2> 
     </div>
   
  
      <Stack spacing={2} direction="row">
             <Button sx={{ cursor: 'pointer' }}  style={{textDecoration:'none',color:'black', marginLeft:80,marginTop:10,align:'center',}}  variant="contained">View addtion details</Button>
             </Stack>
      </Paper>

      <br></br>

      



      
    
  

    </div>
    </>
  );
} 