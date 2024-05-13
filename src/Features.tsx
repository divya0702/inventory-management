import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import theme from './theme';
import { Grid } from "@mui/material";
import DemoButton from './DemoButton';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import UpdateIcon from '@mui/icons-material/Update';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import InsightsIcon from '@mui/icons-material/Insights';

// Define styles using makeStyles
const useStyles = makeStyles({
  featuresSection: {
    // height: '100vh',
  },
  sectionTitle: {
    fontSize: '3rem',
    paddingTop: '5rem',
    margin: 0,
    fontFamily: theme.primaryFont,
    color: theme.headingColor
  },
  gridBox:{
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: '2rem!important',
    overflowX: 'hidden',
  },
  featureItem: {
    margin: '2rem',
    padding: '0 !important'
  },
  featureTitle1: {
    textAlign: 'left',
    fontSize: '1.25rem',
    color: theme.secondaryColor,
    fontFamily: theme.primaryFont,
  },
  featureTitle2: {
    textAlign:'left',
    fontSize: '1.25rem',
    color: theme.primaryColor,
    fontFamily: theme.primaryFont,
  },
  featureDescription: {
    fontSize: '1rem',
    color: theme.textColor,
    fontFamily: theme.secondaryFont,
    textAlign: 'left',
    maxWidth:'20rem',
    wordWrap: 'break-word'
  },
});

const Features = () => {
  // Apply styles using useStyles
  const classes = useStyles();
  const isSmallScreen = useMediaQuery('(min-width:360px) and (max-width:764px)');

  return (
    <>
      <div id='features-section' className={classes.featuresSection}>
        <h4 className={classes.sectionTitle}>Unlock Powerful Capabilities</h4>
        <Grid container spacing={2} className={classes.gridBox}>
          <Grid item xs={isSmallScreen ? 12 : 4} className={classes.featureItem}>
            
            <h5 className={classes.featureTitle1}> <QrCode2Icon sx={{    width: "48px",height: "48px",fill: theme.secondaryColor + "FF"}}/> <br/>Barcode scanning</h5>
            <p className={classes.featureDescription}>Identify and handle products with ease, reducing errors and enhancing efficiency in stock transactions</p>
          </Grid>
        <Grid item xs={isSmallScreen ? 12 : 4} className={classes.featureItem}>
          <h5 className={classes.featureTitle2}><UpdateIcon sx={{    width: "48px",height: "48px",fill: theme.primaryColor + "FF"}}/> <br/>Real time updates</h5>
          <p className={classes.featureDescription}>Get immediate access to accurate stock movement information, ensuring a real-time and dynamic view of your inventory status</p>
      </Grid>

      
      <Grid item xs={isSmallScreen ? 12 : 4} className={classes.featureItem}>
          <h5 className={classes.featureTitle2}><DashboardIcon  sx={{    width: "48px",height: "48px",fill: theme.primaryColor + "FF"}}/> <br/>Customizable dashboard</h5>
          <p className={classes.featureDescription}>Arrange widgets according to your preferences, providing a personalized and focused view of crucial metrics for your business
          </p>
      </Grid>
      <Grid item xs={isSmallScreen ? 12 : 4} className={classes.featureItem}>
          <h5 className={classes.featureTitle2}><WarehouseIcon  sx={{    width: "48px",height: "48px",fill: theme.primaryColor + "FF"}}/> <br/>Multi-Warehouse Support</h5>
          <p className={classes.featureDescription}>
          Control and monitor stock movements from one place for efficient inventory management in a growing business
          </p>
      </Grid>
      <Grid item xs={isSmallScreen ? 12 : 4} className={classes.featureItem}>
          <h5 className={classes.featureTitle2}><MobileScreenShareIcon  sx={{    width: "48px",height: "48px",fill: theme.primaryColor + "FF"}}/> <br/> Accessibility</h5>
          <p className={classes.featureDescription}>
          Control and monitor stock movements from one place for efficient inventory management in a growing business
          </p>
      </Grid>
      <Grid item xs={isSmallScreen ? 12 : 4} className={classes.featureItem}>
          <h5 className={classes.featureTitle1}><InsightsIcon  sx={{    width: "48px",height: "48px",fill: theme.secondaryColor + "FF"}}/> <br/>Reporting and Analytics</h5>
          <p className={classes.featureDescription}>
          Generate detailed reports on stock valuation, sales performance, and more, providing valuable insights for strategic planning
          </p>
      </Grid>
      </Grid>
      <DemoButton/>
      </div>
    </>
  );
}

export default Features;
