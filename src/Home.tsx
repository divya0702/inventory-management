import React from "react";
import Features from "./Features"; // Import your Features element
import Hardware from "./Hardware"; // Import your Hardware element
import Pricing from "./Pricing"; // Import your Pricing element
import theme from "./theme";
import DemoButton from "./DemoButton";
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from "@mui/material";

// Define styles using makeStyles
const useStyles = makeStyles({
  introSection: {
    // paddingTop: "7rem",
    height: '100vh',
    display: "grid",
    gridTemplateColumns: "0.75fr 1fr",
    // gridGap: "1rem",
  },
  introMobile: {
    paddingTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  sectionLeft: {
    // padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  sectionRight: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    wordWrap: 'break-word',
    maxWidth: '36rem',
    textAlign:'left'
  },
  title: {
    fontSize: "3rem",
    fontFamily: theme.primaryFont,
    color: theme.primaryColor,
    marginBlock: 0,
  },
  description: {
    // paddingLeft: "7rem",
    fontSize: "1.25rem",
    fontFamily: theme.primaryFont,
    color: theme.textColor,
  },
});

const Home: React.FC = () => {
  // Apply styles using useStyles
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 360px) and (max-width:768px)');

  return (
    <>
      <div id='intro-section' className={isMobile ? classes.introMobile : classes.introSection}>
       
        <section style={{justifyContent: isMobile? 'center': 'flex-end'}} className={classes.sectionLeft}>
          <img
            src={"https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"}
            alt=""
            style={{ width: isMobile ? "40%":"80%" }}
          />
        </section>
        <section className={classes.sectionRight}>
          <h1 className={classes.title}>
            Your Ultimate Inventory Management Solution
          </h1>
          <p className={classes.description}>
            Simplify and optimize your stock management with inventory, the
            ultimate inventory solution.
          </p>
          <div style={{alignItems: isMobile? 'center' : 'flex-start'}}><DemoButton/></div>
        </section>
      </div>
      <Features />
      <Hardware />
      <Pricing />
    </>
  );
};

export default Home;
