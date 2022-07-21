import { FormControl, InputLabel, makeStyles, Select } from "@material-ui/core";
import React, { useState } from "react";
import bgImg from "../Assets/Images/bg.jpg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: "100%",
    height: "fit-content",
    // backgroundColor: "red",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      marginTop: "0px",
    },
  },
  bgDiv: {
    width: "98%",
    height: "500px",
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "44px 0px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  bgDiv2: {
    display: "none",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "column",
    },
  },
  headingDiv: {
    // backgroundColor: "red",
    width: "80%",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  tabsDiv: {
    // backgroundColor: "blue",
    width: "80%",
    height: "65px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
  },
  tabBox: {
    width: "350px",
    height: "44px",
    backgroundColor: "#373B3E",
    borderRadius: "10px",
    padding: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    "& div": {
      width: "50%",
      height: "100%",
      borderRadius: "10px",
    },
  },
  propertySearch: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& span": {
      fontSize: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#373B3E",
    },
  },
  propertySearch2: {
    backgroundColor: "#373B3E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& span": {
      fontSize: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
  },

  TruValue: {
    backgroundColor: "#373B3E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& span": {
      fontSize: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      "& sup": {
        fontSize: "10px",
      },
    },
  },
  TruValue2: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& span": {
      fontSize: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#373B3E",
      "& sup": {
        fontSize: "10px",
      },
    },
  },

  SearchDiv: {
    // backgroundColor: "yellow",
    width: "80%",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SearchDivClose: {
    display: "none",
  },
  SearchDiv2: {
    // backgroundColor: "yellow",
    width: "80%",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SearchDiv2Close: {
    display: "none",
  },
  searchBox: {
    width: "700px",
    height: "200px",
    backgroundColor: "#373B3E",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "14px 10px",
  },
  searchBoxx: {
    width: "700px",
    height: "160px",
    backgroundColor: "#373B3E",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "14px 10px",
  },
  searchBox1: {
    width: "98%",
    height: "60px",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBox2: {
    width: "98%",
    height: "60px",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  searchBox3: {
    width: "98%",
    height: "60px",
    // backgroundColor: "yellow",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  searchBox33: {
    width: "98%",
    height: "20px",
    // backgroundColor: "yellow",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "10px",
  },
  formControl: {
    // margin: theme.spacing(0.9),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectBox: {
    backgroundColor: "white",
    border: "none",
    "&:hover": {
      outline: "none",
    },
  },
  inputSearch: {
    backgroundColor: "white",
    width: "334px",
    height: "57px",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputSearch2: {
    backgroundColor: "white",
    width: "160px",
    height: "57px",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBox: {
    width: "70%",
    height: "100%",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& input": {
      width: "100%",
      height: "80%",
      outline: "transparent",
      paddingLeft: "10px",
      fontSize: "16px",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:placeholder": {
        marginLeft: "10px",
      },
    },
  },
  inputBox2: {
    width: "100%",
    height: "100%",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& input": {
      width: "100%",
      height: "80%",
      outline: "transparent",
      paddingLeft: "10px",
      fontSize: "16px",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:placeholder": {
        marginLeft: "10px",
      },
    },
  },
  iconBox: {
    width: "30%",
    height: "80%",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  locationIcon: {
    color: "#989898",
  },
  findBtn: {
    width: "160px",
    height: "90%",
    border: "none",
    outline: "none",
    borderRadius: "3px",
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "#28B16D",
    cursor: "pointer",
  },
  adBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: "3px",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    paddingLeft: "14px",
    cursor: "pointer",
  },
  adBox2: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: "14px",
    color: "white",
    "& span": {
      cursor: "pointer",
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
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#373B3E",
    "& span": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "8px",
    },
  },
  searchBox22: {
    backgroundColor: "#222222",
    width: "100%",
    height: "140px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBox2Head: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "40px",
    // backgroundColor: "red",
    color: "white",
    marginTop: "20px",
  },
  searchBox2Btns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "60px",
    // backgroundColor: "red",
    marginBottom: "20px",
    color: "white",
  },
  propertyDivBtn: {
    width: "40%",
    height: "40px",
    backgroundColor: "#28B16D",
    borderRadius: "10px",
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  truValueDivBtn: {
    width: "40%",
    height: "40px",
    backgroundColor: "#28B16D",
    borderRadius: "10px",
    marginLeft: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    "& sup": {
        fontSize: "8px"
    }
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    age: "",
    name: "hai",
  });
  const [property, setProperty] = useState(true);
  const [trueValue, settrueValue] = useState(false);

  const propertyHandle = () => {
    setProperty(true);
    settrueValue(false);
    console.log(property);
  };
  const trueHandle = () => {
    settrueValue(true);
    setProperty(false);
    console.log(trueValue);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.bgDiv}>
          <div className={classes.headingDiv}>
            <h1>Search Properties for sale and to rent in the UAE</h1>
          </div>
          <div className={classes.tabsDiv}>
            <div className={classes.tabBox}>
              <div
                className={
                  property ? classes.propertySearch : classes.propertySearch2
                }
                onClick={propertyHandle}
              >
                <span>Property Search</span>
              </div>
              <div
                className={!trueValue ? classes.TruValue : classes.TruValue2}
                onClick={trueHandle}
              >
                <span>
                  TruValue<sup>TM</sup>
                </span>
              </div>
            </div>
          </div>
          <div
            className={property ? classes.SearchDiv : classes.SearchDivClose}
          >
            <div className={classes.searchBox}>
              <div className={classes.searchBox1}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Rent
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <div className={classes.inputSearch}>
                  <div className={classes.inputBox}>
                    <input type="text" placeholder="Enter Location" />
                  </div>
                  <div className={classes.iconBox}>
                    <LocationOnIcon className={classes.locationIcon} />
                  </div>
                </div>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Residential
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.searchBox2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Rent
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Rent
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Rent
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <button className={classes.findBtn}>Find</button>
              </div>
              <div className={classes.searchBox3}>
                <div className={classes.adBox}>
                  <div className={classes.newBox}>
                    <div>
                      <span>New</span>
                    </div>
                  </div>
                  <div className={classes.textBox}>
                    <span style={{ fontWeight: "bold" }}>Search 2.0</span>
                    <span>
                      Find homes by commute time{" "}
                      <ArrowForwardIosIcon
                        style={{ width: "12px", marginLeft: "6px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={trueValue ? classes.SearchDiv2 : classes.SearchDiv2Close}
          >
            <div className={classes.searchBoxx}>
              <div className={classes.searchBox1}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Buy
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <div className={classes.inputSearch}>
                  <div className={classes.inputBox}>
                    <input type="text" placeholder="Enter Location" />
                  </div>
                  <div className={classes.iconBox}>
                    <LocationOnIcon className={classes.locationIcon} />
                  </div>
                </div>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Property Type
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.searchBox2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Beds
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    className={classes.selectBox}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{ display: "none", color: "#989898" }}
                    >
                      Baths
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <div className={classes.inputSearch2}>
                  <div className={classes.inputBox2}>
                    <input type="text" placeholder="eg. 1078 sqft" />
                  </div>
                </div>
                <button className={classes.findBtn}>Find</button>
              </div>
              <div className={classes.searchBox33}>
                <div className={classes.adBox2}>
                  <span>Reset Search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bgDiv2}>
          <div className={classes.searchBox22}>
            <div className={classes.searchBox2Head}>
              <h3>Search properties for sale to rent in the UAE</h3>
            </div>
            <div className={classes.searchBox2Btns}>
              <div className={classes.propertyDivBtn}>Property Search</div>
              <div className={classes.truValueDivBtn}>TruValue<sup>TM</sup></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
