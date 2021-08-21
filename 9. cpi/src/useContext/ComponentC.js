import React,{useContext} from "react";
import {userData} from './ConponentA';

const ComponentC = () =>{

    const context = useContext(userData);

    return(
        <>
            <h1>Component {context}</h1>
        </>
    )
}

export default ComponentC;