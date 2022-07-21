import { makeStyles } from "@material-ui/core";
import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    backgroundColor: "#f5f5f5",
    height: "35px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  innerDiv: {
    width: "85%",
    height: "35px",
    // backgroundColor: "tomato",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  div1: {
    // backgroundColor: "cyan",
    // height: "30px",
    display: "flex",
  },
  div2: {
    // backgroundColor: "pink",
    height: "30px",
    width: "50px",
  },
  divMargin: {
    marginRight: 20,
  },
  divMargin1: {
    marginLeft: 20,
  },
}));
const Toolbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.innerDiv}>
          <div className={classes.div1}>
            <div className={classes.divMargin}>
              {/* <p>UAE</p> */}
              <select name="" id="">
                <option value="" selected>UAE</option>
                <option value="" >Saudi Arabia</option>
                <option value="" >Jordan</option>
                <option value="" >Morocco</option>
                <option value="" >Bangladesh</option>
                <option value="" >Mexico</option>
                <option value="" >Philppines</option>
                <option value="" >Indonesia</option>
                <option value="" >Thailand</option>
              </select>
            </div>
            <div className={classes.divMargin}>
              <p>Arabic</p>
            </div>
            <div className={classes.divMargin} style={{ display: "flex" }}>
              <SettingsIcon style={{ color: "#555" }} />
              <p>Site Settings</p>
            </div>
          </div>

          <div className={classes.div1}>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <FavoriteIcon style={{ color: "#555" }} />
              <p>Favourite properties</p>
            </div>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <StarIcon style={{ color: "#555" }} />
              <p>Saved searches</p>
            </div>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <AccountCircleIcon style={{ color: "#555" }} />
              <p>Log in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
