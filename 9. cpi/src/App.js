import React from 'react';
import PrintAllData from './component/PrintAllData';
import AddAllData from './component/AddAllData';
import FetchApi from './Api/FetchApi';
import { Button } from '@material-ui/core';

import ComponentA from './useContext/ConponentA';

const App = () => {
  return (
    <>
    {/* <div className="container2">
      <h1>This is app</h1>
      <PrintAllData/>
      <AddAllData/>
    </div> */}
      {/* <div className="github">
      <FetchApi/>
      <Button
      variant="outlined"
      color="secondary"
      >Click Me</Button>
      </div> */}

      <ComponentA/>

    </>
  );
};

export default App;
