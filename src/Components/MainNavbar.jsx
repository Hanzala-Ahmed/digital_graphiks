import React from 'react'
import { makeStyles } from "@material-ui/core";
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const useStyles = makeStyles((theme) => ({}))

const MainNavbar = () => {
    const classes = useStyles();

  return (
    <>
      <Navbar/>
      <MobileNavbar />
    </>
  )
}

export default MainNavbar
