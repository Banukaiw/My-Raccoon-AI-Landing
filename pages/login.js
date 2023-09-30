import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

const login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPass: false,
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    margin: theme.spacing(0),
  }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isVerified, setisVerified] = useState(false);
  const recaptchaRef = React.createRef();

  const initialValues = {
    email: "",
    password: "",
  };

  const enteredEmail = (e) => {
    setEmail(e.target.value);
  };

  const enteredPassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePassVisibility = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const recaptchaLoaded = () => {
    console.log("captcha successfully loaded");
  };

  const verifyCallback = (response) => {
    if (response) {
      setisVerified(true);
    }
  };

  const handleLogin = () => {
    if (isVerified) {
      console.log("You have successfully Login!");
    } else {
      console.log("Please verify that you are a human!");
    }
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string(),
  });

  const onSubmit = (value, props) => {
    console.log(values);
  };

  return (
    <div>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js?&render=explicit"
          async
          defer
        ></script>
      </Head>

      <div style={{ width: 700, marginTop:400,  margin:'80px auto', }}>

      <Container  style={{ width:'900' }} maxWidth="xl">
        <Grid
          
          container
          spacing={2}
          direction="column"
          justifyContent="top"
          style={{ minHeight: "80vh",}}
        >
          <Paper elevation={2} sx={{ padding: 5 }}>
            <Grid container direction="column" spacing={2}>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <Grid item>
                      <Typography
                        variant="h5"
                        component="h5"
                        padding={1}
                        paddingLeft={0}
                        marginLeft={1}
                        marginTop={0}
                        color="#9A9A9A"
                        justify-content="flex-start"
                      >
                        Login to Raccoon AI
                      </Typography>
                    </Grid>
                    <br />

                    <Grid item>
                      <TextField
                        type="email"
                        fullWidth
                        id="email"
                        label="Email"
                        placeholder="Enter Your Email"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={enteredEmail}
                        required
                      ></TextField>
                    </Grid>

                    <br />

                    <Grid item>
                      <TextField
                        type={values.showPass ? "text" : "password"}
                        fullWidth
                        label="Password"
                        placeholder="Enter Your Password"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handlePassVisibility}
                                aria-label="toggle password"
                                edge="end"
                              >
                                {values.showPass ? (
                                  <VisibilityOffIcon />
                                ) : (
                                  <VisibilityIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        name="password"
                        value={password}
                        onChange={enteredPassword}
                        required
                        helperText={<ErrorMessage name="password" />}
                      ></TextField>
                    </Grid>

                    <br />

                    <Grid item>
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        class="g-reCaptcha"
                        fullWidth
                        sitekey="6LdRDlwjAAAAAER4CTDUDYTJfPQkuCMtYADCKv9H"
                        render="explicit"
                        theme="light"
                        onloadCallback={recaptchaLoaded}
                        verifyCallback={verifyCallback}
                        // onChange={this.handleOnchange}
                      />

                      <br />

                      <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        justifyContent="center"
                        alignItems="center"
                        size="large"
                        onClick={handleLogin}
                      >
                        LOGIN <ArrowForwardRoundedIcon />
                      </Button>
                    </Grid>
                  </Form>
                )}
              </Formik>

              <br />

              <Grid item spacing={2}>
                <Typography component="spam" padding={3}>
                  Do not have an account?
                  <Button>
                    <Link
                      href="/register"
                      style={{ textDecoration: "underline" }}
                    >
                      Create an Raccoon AI Account
                    </Link>
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>

  </div>
  );
};

export default login;


