import React from "react";
import Header from '../components/Header';
import Box from '../components/Box';
import Div from "../components/Div/Div";
import Calc from "../components/Calc";
import Props from "../components/Props";

const usrname = "rounak";
const Home = (props) => {
  return (
    <div>
      <Header />
      <div className="sumit">
        <Box />
        <Box />
        <Box />
      </div>
      <br /><br />
        <Div/>
        <br /><br />
        <Calc/>


        <div className="container-props">
          <Props
            name={usrname}
            collage="BIMS"
            school="CMS"
          />
          <Props
            name="Sumit"
            collage="BIMS"
            school="GPPI"
          />
          <Props
            name="Devil"
            collage="BIMS"
            school="JCK"
          />
        </div>



    </div>
  );
};

export default Home;
