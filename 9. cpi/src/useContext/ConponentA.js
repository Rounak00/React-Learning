import React,{createContext} from "react";
import ComponentB from "./ComponentB";

const userData = createContext();

const Component = () =>{
    return(
        <>
        
            <h1>Comp A</h1>
            <userData.Provider value={"Rounak"}>
                <ComponentB/>
            </userData.Provider>
            
        </>
    )
}
 export default Component;
 export {userData};