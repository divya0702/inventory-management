import React from 'react'
import theme from './theme'
import { Button } from '@mui/material'
import { Link } from "react-router-dom";

const DemoButton = () => {
  return (
    <>
    <Button
      sx={{
        backgroundColor: theme.primaryColor,
        color: "#fff",
        fontFamily: theme.primaryFont,
        fontSize: "1rem",
        textTransform: "none",
      }}
      component={Link}
      to="/free-trial"
      disableElevation
      disableRipple
      disableFocusRipple
      disableTouchRipple
    >
            Start a free trial
          </Button>
    </>
  )
}

export default DemoButton
