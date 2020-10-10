import React from 'react';
import { AppBar, IconButton, Typography, Toolbar, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" >
            T20 Live
        </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
