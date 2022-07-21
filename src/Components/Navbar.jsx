import { makeStyles } from "@material-ui/core";
import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import greenLogo from "../Assets/Images/greenLogo.svg";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    backgroundColor: "#fff",
    height: "35px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  innerDiv: {
    width: "85%",
    height: "35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  div1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      marginLeft: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& span": {
        marginTop: "6px",
      },
    },
  },
  div2: {
    height: "30px",
    width: "50px",
  },
  divMargin: {
    marginRight: "20px",
    backgroundImage: `url(${greenLogo})`,
    height: 33,
    width: 120,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.innerDiv}>
          <div className={classes.div1}>
            <div className={classes.divMargin}></div>
          </div>

          <div className={classes.div1}>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <p>Blog</p>
            </div>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <p>Find an Agency</p>
            </div>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <p>Floor Plans</p>
            </div>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <p>
                Guides{" "}
                <span>
                  <ArrowDropDownIcon />
                </span>{" "}
              </p>
            </div>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <p>
                Market Intelligence{" "}
                <span>
                  <ArrowDropDownIcon />
                </span>{" "}
              </p>
            </div>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <p>Agent Portal</p>
            </div>
            <div className={classes.divMargin1} style={{ display: "flex" }}>
              <p>
                Events{" "}
                <span>
                  <ArrowDropDownIcon />
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
