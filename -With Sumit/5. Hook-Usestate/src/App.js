
import React,{useState} from 'react';

const App = () =>{
  let num = 0;
  const [number, setnumber] = useState(num);

const inc=()=>{
  if(number>0)
  setnumber(number-1);
}
const dec=()=>{
  setnumber(number+1);
}
  return(
    <div>
      <button onClick={inc}> - </button>
      <h1>{number}</h1>
      <button onClick={dec}> + </button>
    </div>
  )
};


export default App;  {/**export that app  */}
