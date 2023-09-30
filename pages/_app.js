import '../styles/globals.css'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function MyApp({ Component, pageProps }) {
  return(  

       <>
       <Nav/>  
   
    <Component {...pageProps} />
    <Footer/>

   
    </>

  ) 
}

export default MyApp
