import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Link as MuiLink
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import InventoryIcon from '@mui/icons-material/Inventory';
import theme from "./theme";
import DemoButton from "./DemoButton";
import { makeStyles } from '@mui/styles';

interface AnchorLink {
  name: string;
  path: string;
  id: string | null; // Change path to id
}

interface Props {
  anchorLinks: AnchorLink[];
}

// Define styles using makeStyles
const useStyles = makeStyles({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  toolbar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    marginBlock: 0,
    display: "flex",
    fontFamily: theme.primaryFont + '!important',
    fontWeight: 700,
    letterSpacing: ".3rem",
    textDecoration: "none",
    color: theme.headingColor,
    fontSize: '1.5rem',
    padding: 0
  },
  menuItem: {
    fontFamily: theme.secondaryFont,
    color: theme.primaryColor,
  },
  navbarButton: {
    fontSize: '0.875rem',
    padding: '0 2rem',
    color: theme.textColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.primaryFont,
    textTransform: "none",
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '400',
    "&:hover": {
      backgroundColor: theme.primaryColorLight,
    },
  },
  selected: {
    color: `${theme.primaryColor} !important`,
    fontWeight: 700
  },
});

const Navbar: React.FC<Props> = ({ anchorLinks }) => {
  // Apply styles using useStyles
  const classes = useStyles();

  const [currentPageId, setCurrentPageId] = useState<string | null>(null);
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSection = (id: string | null, path: string) => {
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section?.scrollIntoView({ behavior: "smooth" });
      }
      else{
        window.location.href = '/inventory-management'
      }
    }
  }

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "#FFFFFF", color: theme.primaryColor }}
      >
        <Toolbar disableGutters className={classes.toolbar}>
          <InventoryIcon sx={{ display: { xs: "none", md: "flex" }, marginRight: 1 }} />
          <Typography
            variant="h6"
            noWrap
            className={classes.logo}
          >
            <MuiLink sx={{textDecoration: 'none'}} href="/inventory-management" color="inherit">Inventory</MuiLink>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-evenly",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {anchorLinks.map((link) => (
                <MenuItem
                  key={link.name}
                  onClick={handleCloseNavMenu}
                  className={classes.menuItem}
                >
                  {link.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <InventoryIcon sx={{ display: { xs: "flex", md: "none" }, marginRight: 1 }} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {anchorLinks.map((link) => (
             <button
             type="button"
             className={`${classes.navbarButton} ${currentPageId === link.id ? classes.selected : ""}`}
             style={{backgroundColor: "transparent"}}
             key={link.name}
             onClick={() => {
               setCurrentPageId(link.id);
               handleScrollToSection(link.id, link.path);
             }}
           >
             {link.name}
           </button>
         ))}
          </Box>
          <DemoButton/>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
