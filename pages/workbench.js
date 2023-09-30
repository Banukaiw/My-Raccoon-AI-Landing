import { Box, Card, CardContent, Grid, Paper, styled, Typography } from "@mui/material";
import Head from "next/head";
import styles from "../styles/workbench.module.css";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Item = styled (Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const Workbench = () => {
  return (
    <div className={styles.main}>
      <Grid container spacing={1} paddingLeft={5} paddingRight={5}>
        <Grid item xs={12} paddingRight={5} paddingBottom={12}>
          <Typography
            variant="h5"
            padding={0}
            align="left"
            className={styles.maintopic}
          >
            WORKBENCH
          </Typography>
        </Grid>
      </Grid>

      {/* Get started */}
      <Grid
        container
        spacing={1}
        paddingLeft={5}
        paddingRight={5}
        paddingBottom={25}
      >
        <Grid item xs={12} sm={3}>
          <Typography
            className={styles.topic}
            variant="h6"
            component="h6"
            fontWeight="bold"
          >
            Get Started
          </Typography>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                CASE STUDY
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This case study refers to work that you will lead to analyze
                your data to find the best predicted results.
              </Typography>

              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* Tools to Prepare */}
      <Grid container spacing={1} sx={12} padding={5} direction={"row"}>
        <Grid item xs={12} sm={3}>
          <Typography
            className={styles.topic}
            variant="h6"
            component="h6"
            fontWeight="bold"
          >
            Tools to Prepare
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          sm={4.5}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
        >
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                ANALYZE YOUR DATASET
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This toolkit provides a rich insight in to your dataset. Our
                functions evaluate your dataset 0n-the-spot and provide analysis
                helping you to identify impurities and biases in your data set.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5} flexDirection={{ xs: "column", sm: "row" }}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                PREPROCESS & DOWNLOAD
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This tool takes your dataset in to your system for preprocessing
                and data cleaning. You will be able to download your dataset
                after the cleaning process. The cleaned dataset then can use
                through our machine learning model gallery.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={3}></Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                VISUALIZE YOUR DATASET
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                Data visualization is the graphical representation of
                information and data. By using visual elements like charts,
                graphs and maps, data visualization tools provide an accessible
                way to see and understand trends, outliers and patterns in data.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5}></Grid>
      </Grid>

      {/* ------------------------------------------------------------------------------------------------------------------ */}

      {/* ML Models Gallery */}
      <Grid container spacing={1} sx={12} padding={5} direction={"row"}>
        <Grid item xs={12} sm={3}>
          <Typography
            className={styles.topic}
            variant="h6"
            component="h6"
            fontWeight="bold"
          >
            ML Models Gallery
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          sm={4.5}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                LINEAR REGRESSION
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This machine learning algorithm allows you to identify linear
                pattern between to variable in your dataset. After feeding
                enough data, you will be able to provide a reasonable prediction
                based on your model.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5} flexDirection={{ xs: "column", sm: "row" }}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                MULTIPLE REGRESSION
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This machine learning algorithm allows you to identify linear
                pattern between two or more variables in your dataset. After
                feeding enough data, you will be able to provide a reasonable
                prediction based on our model.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={3}></Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                DECISION THREE
              </Typography>
              <Typography
                sx={{ fontSize: 18 }}
                variant="body1"
                color="#00BFFF"
              ></Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                ARTIFICIAL NEURAL NETWORK
              </Typography>
              <Typography
                sx={{ fontSize: 18 }}
                variant="body1"
                color="#00BFFF"
              ></Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={3}></Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                LOGISTIC REGRESSION
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This is the one of most popular Machine Learning Algorithms,
                which is used for solving classification problems. This
                algorithm predicts the categorical dependent variable using a
                given set of independent variables.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                K NEAREST NEIGHBOR
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                K-Means Clustering is an algorithm that is used to solve the
                clustering problems in machine learning. It allows us to cluster
                the data into different groups and easiest way to discover the
                categories of groups in the unlabeled dataset.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={3}></Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                RANDOM FOREST REGRESSION
              </Typography>
              <Typography
                sx={{ fontSize: 18 }}
                variant="body1"
                color="#00BFFF"
              ></Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5}></Grid>
      </Grid>

      {/* ------------------------------------------------------------------------------------------------------------ */}

      {/* Dataset */}
      <Grid container spacing={1} sx={12} padding={5} direction={"row"}>
        <Grid item xs={12} sm={3}>
          <Typography
            className={styles.topic}
            variant="h6"
            component="h6"
            fontWeight="bold"
          >
            Datasets
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          sm={4.5}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                RICE PRODUCTION
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                Rice production is one of the main productions and staple foods
                in Sri Lanka. This dataset comprised with production of rice in
                both Yala and Maha seasons from 1952 to 2010.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5} flexDirection={{ xs: "column", sm: "row" }}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                COMMUNITY BASED STAT.DATA
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This dataset provides information on the community statical data
                in Sri Lanka. These datasets are based on government-published
                surveys and questions.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={3}></Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                ECONOMICAL DATA
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This dataset has economical data of Sri Lanka mostly focus on
                gross domestic and industrial production.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                GOLD PRICES
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                Because of the change in government gold reserves and interest
                trends gold price changes daily. This graph shows the latest
                upto-date gold price in Sri Lanka.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={3}></Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                AGRONOMY & WEATHER
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                This is an approach to weather forecasting which used machine
                learning algorithms to generate fast global weather forecasts
                based on past weather data.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4.5}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                DOWNLOAD SAMPLE DATASET
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="body1" color="#00BFFF">
                Download data set used in the model gallery example. Available
                in CSV and XLXS format. All the data set we are using is openly
                available in the internet.
              </Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ------------------------------------------------------------------------------------------------------------ */}



      {/* User Login */}
      <Grid
        container
        spacing={1}
        sx={12}
        padding={5}
        direction={"row"}
        paddingBottom={12}
      >
        <Grid item xs={12} sm={3}>
          <Typography
            className={styles.topic}
            variant="h6"
            component="h6"
            fontWeight="bold"
          >
            User Login
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          sm={4.5}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                USER MANAGEMENT
              </Typography>
              <Typography
                sx={{ fontSize: 18 }}
                variant="body1"
                color="#00BFFF"
              ></Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={6} sm={4.5} flexDirection={{ xs: "column", sm: "row" }}>
          <Card
            className={styles.card}
            sx={{ minWidth: 275, cursor: "pointer" }}
          >
            <CardContent>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h6"
                paddingBottom={1}
              >
                SUBSCRIPTION PORTAL
              </Typography>
              <Typography
                sx={{ fontSize: 18 }}
                variant="body1"
                color="#00BFFF"
              ></Typography>
              <Typography
                color="#00BFFF"
                align="right"
                justify-content="flex-end"
                paddingBottom={5}
              >
                <ArrowRightAltIcon />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Workbench;
