import Post from '../components/Postindex'

//import postData from "./data.json"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//import Records from "./services.json";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import styles from "../styles/index.module.css";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


export default function Home(props) {
  const { postData } = props

  return (

    <div className={styles.container}>
      <h1>The JS Show</h1>
      
            <div>
           {/*  {postData.map((post)=>
             <Post key={post.id} id={post.id} title={post.title} body={post.description} />
             )}  */}
              
      </div>     
   
      

             <div>
          {postData.map((post)=> <Post key={post.id} id={post.id} title={post.title} body={post.body} /> )}
      </div>    
 

    </div> 
  )
}



 
/* Home.getInitialProps = async (context) => {
let postData = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
  
  return {
      postData
      
  }
}   
  */

  Home.getInitialProps = async (context) => {
  let postData = fetch('./services.json')
  
  return {
      postData
      
  }
}      



     /*  Home.getInitialProps = async (context) => {
   const postID = context.query.id; 
    
 let postData = fetch("./services.json")
    
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
     
      console.log(item);
    });
  })
  .catch(error => console.error(error));
    return {
        postData       
    }
}       */
  