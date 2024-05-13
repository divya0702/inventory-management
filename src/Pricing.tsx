import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, useMediaQuery } from '@mui/material';
import theme from './theme';
import DoneIcon from '@mui/icons-material/Done';

const useStyles = makeStyles({
  pricingSection: {
    height: '100vh',
    justifyContent: 'center',
    paddingTop: '5rem'
  },
  pricingTitle: {
    fontFamily: theme.primaryFont,
    fontColor: theme.headingColor,
    fontSize: '3rem',
    fontWeight: '700'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    width: '21.1875rem', // converted from 339px to rem
    height: '20rem',
    background: '#FFFFFF',
    borderRadius: '1rem',
    borderWidth: '0.0625rem', // converted from 1px to rem
    borderColor: '#DEE1E6',
    borderStyle: 'solid',
    padding: '2rem',
    textAlign: 'left',
    overflowX: 'hidden',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
  boxText: {
    fontFamily: theme.secondaryFont,
    fontSize: '1.5rem',
    lineHeight: '1.75rem', // converted from 28px to rem
    fontWeight: 400,
    color: '#171A1FFF',
    margin: 0,
    padding: 0
  },
  boxPrice: {
    fontFamily: theme.primaryFont,
    fontSize: '3rem', // converted from 48px to rem
    lineHeight: '4.25rem', // converted from 68px to rem
    fontWeight: 700,
    color: theme.primaryColor + "FF",
  },
  boxTime: {
    fontFamily: theme.secondaryFont,
    fontSize: '1rem', // converted from 16px to rem
    lineHeight: '1.625rem', // converted from 26px to rem
    fontWeight: 400,
    color: '#6F7787FF'
  },
  boxFor: {
    fontFamily: theme.secondaryFont,
    fontSize: '1rem',
    lineHeight: '1.75rem', // converted from 28px to rem
    fontWeight: 400,
    color: '#171A1FFF',
    margin: 0,
    padding: 0
  },
  iconTick: {
    width: '1.5rem', // converted from 24px to rem
    height: '1.5rem', // converted from 24px to rem
    fill: '#A17561FF !important',
  },
  iconTick2: {
    width: '1.5rem', // converted from 24px to rem
    height: '1.5rem', // converted from 24px to rem
    fill: '#FFF !important',
  },
  iconFeature: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center', 
    margin: 0,
    padding: 0
  },
  tag: {
    height: '2.625rem', // converted from 28px to rem
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: theme.secondaryFont,
    fontSize: '0.75rem', // converted from 12px to rem
    lineHeight: '1.25rem', // converted from 20px to rem
    fontWeight: 400,
    opacity: 1,
    margin: '0.5rem'
  },
  tagItem: {
    height: '2.625rem', // converted from 28px to rem
    paddingLeft: '0.375rem', // converted from 6px to rem
    paddingRight: '0.375rem', // converted from 6px to rem
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.875rem', // converted from 14px to rem
    flexWrap: 'wrap', // added to wrap content vertically
  },
  tagItemContent: {
    paddingLeft: '0.125rem', // converted from 2px to rem
    paddingRight: '0.125rem', // converted from 2px to rem
    whiteSpace:'nowrap'
  },
  tagItem1: {
    fontFamily: theme.secondaryFont,
    fontSize: '0.75rem', // converted from 12px to rem
    lineHeight: '1.25rem', // converted from 20px to rem
    fontWeight: 400,
    color: theme.primaryColor + "FF",
    background: '#F9F7F5FF',
    '&:hover': {
      color: theme.primaryColor + "FF",
      background: theme.primaryColorLight,
    },
    '&:hover:active': {
      color: theme.primaryColor + "FF",
      background: '#CDB7ACFF',
    },
    '&:disabled': {
      color: theme.primaryColor + "FF",
      background: '#F9F7F5FF',
    },
  },
  boxFeature: {
    display: 'flex',
  },
  boxMobile: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const TagItem = ({ content }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.tag}>
      <div className={`${classes.tagItem} ${classes.tagItem1}`}>
        <div className={classes.tagItemContent}>{content}</div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 360px) and (max-width:768px)');

  return (
    <div id='pricing-section' className={classes.pricingSection}>
      <h1 className={classes.pricingTitle}>
        Flexible plans
      </h1>
      <Grid container className={classes.box}>
        <Box className={classes.container}>
          <h4 className={classes.boxText}>Basic Plan</h4>
          <div>
            <span className={classes.boxPrice}>$24</span><span className={classes.boxTime}> /month</span>
          </div>
          <p className={classes.boxFor}>Idea for small business</p>
          <div className={classes.iconFeature}>
            <DoneIcon className={classes.iconTick} /><p>Single feature</p>
          </div>
          <div className={classes.iconFeature}>
            <DoneIcon className={classes.iconTick} /><p>Core features:</p>
          </div>
          <div className={ isMobile ? classes.boxMobile : classes.boxFeature}>
            <TagItem content="Barcode Scanning" />
            <TagItem content="Real-Time Updates" />
          </div>
        </Box>
        <Box className={classes.container} sx={{backgroundColor: theme.primaryColor, color: '#fff !important'}}>
          <h4 className={classes.boxText} style={{color: '#fff'}} >Standard Plan</h4>
          <div>
            <span style={{color: '#fff'}} className={classes.boxPrice}>$59</span><span  style={{color: '#fff'}} className={classes.boxTime}> /month</span>
          </div>
          <p style={{color: '#fff'}} className={classes.boxFor}>Suitable for growing business</p>
          <div className={classes.iconFeature}>
            <DoneIcon className={classes.iconTick2} /><p>Multi-user access (up to 5 users)</p>
          </div>
          <div className={classes.iconFeature}>
            <DoneIcon className={classes.iconTick2} /><p>Advanced features:</p>
          </div>
          <div className={ isMobile ? classes.boxMobile : classes.boxFeature}>
            <TagItem content="Customizable Dashbooard" />
            <TagItem content="Order Fullfilment Workflow" />
          </div>
        </Box>
        <Box className={classes.container}>
          <h4 className={classes.boxText}>Premium Plan</h4>
          <div>
            <span className={classes.boxPrice}>$99</span><span className={classes.boxTime}> /month</span>
          </div>
          <p className={classes.boxFor}>Perfect for large enterprises</p>
          <div className={classes.iconFeature}>
            <DoneIcon className={classes.iconTick} /><p>Unlimited users</p>
          </div>
          <div className={classes.iconFeature}>
            <DoneIcon className={classes.iconTick} /><p>Advanced features:</p>
          </div>
          <div className={ isMobile ? classes.boxMobile : classes.boxFeature}>
            <TagItem content="Multi-Warehouse Support" />
            <TagItem content="Quality Control Checks" />
          </div>
        </Box>
      </Grid>
    </div>
  );
}

export default Pricing;
