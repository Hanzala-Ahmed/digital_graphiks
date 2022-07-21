import React from "react";
import { makeStyles } from "@material-ui/core";
import featureBg1 from "../Assets/Images/featureBg1.svg";
import featureBg2 from "../Assets/Images/featureBg2.svg";
import featureBg3 from "../Assets/Images/featureBg3.svg";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    width: "100%",
    height: "300px",
    // backgroundColor: "red",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        height: "600px"
    },
  },
  featureBox: {
    // backgroundColor: "white",
    width: "85%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  },
  featureBox1: {
    backgroundImage: `url(${featureBg1})`,
    backgroundRepeat: "no-repaeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "32%",
    borderRadius: "10px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      marginTop: "20px",
    },
  },
  featureBox2: {
    backgroundImage: `url(${featureBg2})`,
    backgroundRepeat: "no-repaeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "32%",
    borderRadius: "10px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      marginTop: "20px",
    },
  },
  featureBox3: {
    backgroundImage: `url(${featureBg3})`,
    backgroundRepeat: "no-repaeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "32%",
    borderRadius: "10px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
  headingBox: {
    width: "90%",
    height: "fit-content",
    // backgroundColor: "red",
    marginTop: "20px",
    marginLeft: "10px",
    display: "flex",
    "& h2": {
      display: "flex",
      "& sup": {
        fontSize: "12px",
      },
    },
  },

  newBox: {
    backgroundColor: "#F73131",
    width: "40px",
    height: "16px",
    padding: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    color: "white",
    fontSize: "12px",
    marginLeft: "10px",
  },

  textBox: {
    display: "flex",
    alignItems: "center",
    color: "#373B3E",
    // backgroundColor: "white",
    marginLeft: "10px",
    marginTop: "20px",
    "& span": {
      width: "60%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      lineHeight: "26px",
    },
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainBox}>
        <div className={classes.featureBox}>
          <div className={classes.featureBox1}>
            <div className={classes.headingBox}>
              <h2>
                TruCheck<sup>TM</sup>
              </h2>
            </div>
            <div className={classes.textBox}>
              <span>
                Filter your results with validated, available listings >
              </span>
            </div>
          </div>
          <div className={classes.featureBox2}>
            <div className={classes.headingBox}>
              <h2>
                Search 2.0
                <div className={classes.newBox}>
                  <div>
                    <span>New</span>
                  </div>
                </div>
              </h2>
            </div>
            <div className={classes.textBox}>
              <span>Find homes by commute time ></span>
            </div>
          </div>
          <div className={classes.featureBox3}>
            <div className={classes.headingBox}>
              <h2>Map View</h2>
            </div>
            <div className={classes.textBox}>
              <span>Search for properties in prefered areas using a map ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
