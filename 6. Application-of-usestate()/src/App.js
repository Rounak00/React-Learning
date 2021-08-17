import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    name: "Sumit",
    roll: "20",
    class: "X",
  });

  const display = () => {
    setValue({...value,name: "Rounak"});
  };
  
  return (
    <div class="content">
      <h1>
        Name is: {value.name} , Roll: {value.roll} & Class: {value.class}
      </h1>
      <button onClick={display}>Chenge Display</button>
    </div>
  );
};

export default App;