import React from "react";
import Box from "./components/Box";
import Data from "./data";

//Inner CSS
const container = {
  display: "flex",
  justifyContent: "space-between",
  margin: "4rem 1rem",
}; 

// console.log(Data[0]);

const App = (props) => {
  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "Caveat, cursive" }}>
        Props in ReactJS
      </h1>
      <div style={container}>
        {Data.map((value, index) => {
          {/* console.log(index); */}
          return (
            <Box
              key={value.id}
              name={value.name}
              collage={value.collage}
              stream={value.stream}
              roll={value.roll}
            />
          );
        })}

        {/* <Box
          name={Data[1].name}
          collage={Data[1].collage}
          stream={Data[1].stream}
          roll={Data[1].roll}
        />
        <Box
          name={Data[2].name}
          collage={Data[2].collage}
          stream={Data[2].stream}
          roll={Data[2].roll}
        />
        <Box
          name={Data[3].name}
          collage={Data[3].collage}
          stream={Data[3].stream}
          roll={Data[3].roll}
        /> */}
      </div>
    </>
  );
};
export default App;
