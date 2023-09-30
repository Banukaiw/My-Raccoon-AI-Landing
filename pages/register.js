import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, TextField, Button, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Style from "../styles/Register.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";  
// import { useMediaQuery } from "@mui/material";


const Register = (props) =>{ 
  const handleFormSubmit = (RegisterData) => {
    console.log(RegisterData);
  };
  return <RegisterForm onFormSubmit={handleFormSubmit} />
};
  

 const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(5),
   textAlign: "center",
   color: theme.palette.text.secondary,
   width: "100%",
   margin: theme.spacing(0),
 }));
  
  const RegisterForm = (props) => {

 
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const [passwordError, setPasswordError] = useState(false);

    const enteredFirstname = (e) => {
      setFirstname(e.target.value);
    };
    const enteredLastname = (e) => {
      setLastname(e.target.value);
    };
    const enteredCompanyname = (e) => {
      setCompanyname(e.target.value);
    };
    const enteredEmail = (e) => {
      setEmail(e.target.value);
    };
    const enteredPassword = (e) => {
      setPassword(e.target.value);
    };
    const enteredCpassword = (e) => {
      setCpassword(e.target.value);
    };



    const passwordErrorMessage = (
      <Typography variant='caption' color='error'>Password and Confirm Password should be same</Typography>
    );



    const registerFormSubmitHandler = (e) => {
      e.preventDefault();

      if (password === cpassword) {
        const RegisterData = {
          firstname,
          lastname,
          companyname,
          email,
          password,

        };

        props.onFormSubmit(RegisterData);
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    };



    return (
      <Grid container>
        <Grid item display={{ xs: "none", sm: "block" }} sm={4} >
          <Item style={{ background: "#f2f2f2" }}>
            <Typography
              variant="h5"
              component="h5"
              padding={10}
              margin-top={10}
              margin-bottom={10}
              align="left"
              color="#9A9A9A"
              justify-content="flex-start"
            >
              Create Your Raccoon AI Account
            </Typography>

            <div>
             
             
                  <img
                    src="/images/SEEK Cover Image.png"
                    alt=""
                    height='auto'
                    width='80%'
                    component="img"
                    padding="100px 100px"
                    sx={{
                      height: 233,
                      width: 350,
                      maxWidth: { xs: 350, md: 250 },
                    }}
                  />
                
              
            </div>
          </Item>
        </Grid>

        <Grid item xs={12} sm={8} >
          <Item style={{ padding: 70, paddingTop: 40, paddingBottom: 40 }}>
            <Typography variant="h6" component="h6" padding={0} align="left">
              Already have an Raccoon AI account?{" "}
              <Button>
                <Link href="/login" style={{ textDecoration: "underline" }}>
                  Log in
                </Link>
              </Button>
            </Typography>

            <br />

            <form
              onSubmit={registerFormSubmitHandler}
              style={{
                paddingLeft: 40,
                paddingRight: 40,
                justifyContent: "center",
              }}
            >
              <TextField
                label="First Name"
                margin="normal"
                id="outlined-basic"
                name="firstname"
                type="name"
                variant="outlined"
                placeholder="Enter Your First Name"
                fullWidth
                value={firstname}
                onChange={enteredFirstname}
                required
              />

              <br />

              <TextField
                label="Last Name"
                margin="normal"
                id="lastname"
                name="lastname"
                type="name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                value={lastname}
                onChange={enteredLastname}
                required
              />

              <br />

              <TextField
                margin="normal"
                label="Company Name"
                id="companyname"
                name="companyname"
                type="name"
                variant="outlined"
                placeholder="Enter Your company Name"
                fullWidth
                value={companyname}
                onChange={enteredCompanyname}
                required
              />

              <br />

              <TextField
                margin="normal"
                label="Email Address"
                id="email"
                name="email"
                type="email"
                variant="outlined"
                placeholder="Enter Your Email"
                fullWidth
                value={email}
                onChange={enteredEmail}
                required
              />

              <br />

              <TextField
                margin="normal"
                label="Password"
                id="password"
                name="password"
                type="password"
                variant="outlined"
                placeholder="Enter a strong Password"
                fullWidth
                value={password}
                onChange={enteredPassword}
                required
              />

              <br />

              <TextField
                margin="normal"
                label="Confirm Password"
                id="cpassword"
                name="cpassword"
                type="password"
                variant="outlined"
                placeholder="Confirm Your strong Password"
                fullWidth
                value={cpassword}
                onChange={enteredCpassword}
                error={passwordError ? true : false}
                required
              />

              <br />

              {passwordError && passwordErrorMessage}

              <br />

              <Button
                type="submit"
                variant="contained"
                size="large"
                className={Style.btn}
              >
                Register
              </Button>
            </form>
          </Item>
        </Grid>
      </Grid>
    );
  }


export default Register;
