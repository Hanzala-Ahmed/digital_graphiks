import React from "react";
import Features from "../Components/Features";
import MainNavbar from "../Components/MainNavbar";
import SearchBox from "../Components/SearchBox";
import Toolbar from "../Components/Toolbar";

const Home = () => {
  return (
    <div>
      <Toolbar />
      <MainNavbar />
      <SearchBox />
      <Features />
    </div>
  );
};

export default Home;
