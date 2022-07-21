import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import whiteLogo from "../Assets/Images/whiteLogo.svg";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import googlePlayIcon from "../Assets/Images/googlePlayIcon.svg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      position: "absolute",
      top: "0%",
      width: "100%"
    },
    "& > div":{
        width:"0%"
    }
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "85%",
    height: "60px",
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#373B3E",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: "300px",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
    height: "fit-content",
  },
  logoBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "140px",
    height: "40px",
    backgroundImage: `url(${whiteLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  languageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#006169",
    fontSize: "20px",
    "& span": {
      marginRight: "20px",
      marginLeft: "2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  btnBox: {
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  signButton: {
    backgroundColor: "#006169",
    width: "90%",
    height: "36px",
    border: "none",
    outline: "none",
    fontSize: "16px",
    color: "white",
    borderRadius: "10px",
  },
  appDownload: {
    width: "100%",
    height: "100px",
    // backgroundColor: "red",
    paddingLeft: "16px",
    margin: "20px 0px",
  },
  googleIconSpan: {
    backgroundImage: `url(${googlePlayIcon})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "140px",
    height: "40px",
    marginTop: "20px",
  },
}));

export default function MobileNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoBox}>
            <div className={classes.logo}></div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div className={classes.languageBox}>
            <span>
              <SettingsIcon />
            </span>
            <span>Arabic</span>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <div className={classes.btnBox}>
          <button className={classes.signButton}>Sign up or Log in</button>
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Find an Agency" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Floor Plans" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Guides" />
            <span>
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          <ListItem>
            <ListItemText primary="Market Intelligence" />
            <span>
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          <ListItem>
            <ListItemText primary="Agent Portal" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Events" />
            <span>
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          <ListItem>
            <ListItemText primary="Careers" />
          </ListItem>
          <ListItem></ListItem>
          <ListItem>
            <ListItemText primary="Company" />
            <span>
              <ArrowDropDownIcon />
            </span>
          </ListItem>
        </List>
        <Divider />
        <div className={classes.appDownload}>
          <span>Download the Bayut App</span>
          <div className={classes.googleIconSpan}></div>
        </div>
        <Divider />

        <List>
          <ListItem>
            <ListItemText primary="Change Country" />
            <span>
              <ArrowDropDownIcon />
            </span>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
