import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import theme from './theme';

const useStyles = makeStyles({
  hardware: {
    padding: '2rem', // Add padding to create space around the content
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
    textAlign: 'left',
    
  },
  hardwareTitle: {
    fontFamily: theme.primaryFont,
    fontSize: '3rem',
    color: theme.headingColor,
    marginBottom: '1rem', // Add margin bottom for spacing
  },
  hardwareCaption: {
    fontFamily: theme.secondaryFont,
    fontSize: '1rem',
    color: theme.textColor,
    marginBottom: '2rem', // Add margin bottom for spacing
  },
  hardwareImage: {
    maxWidth: '75%', // Ensure the image doesn't overflow its container
    height: 'auto', // Maintain aspect ratio of the image
  },
});

const Hardware = () => {
  const classes = useStyles();
  return (
    <div id='hardware-section' className={classes.hardware}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1 className={classes.hardwareTitle}>Unlock Speed and Precision with Barcode Scanning</h1>
          <p className={classes.hardwareCaption}>Say goodbye to manual data entry and hello to unparalleled speed and accuracy.</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={"https://www.barcoding.co.uk/wp-content/uploads/2019/10/Scanning-a-Barcode-4.jpg"} alt="" className={classes.hardwareImage} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Hardware;
