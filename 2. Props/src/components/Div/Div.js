import React from 'react'

const heading = {
    border:"1px solid black",
    padding:"1rem 1.5rem",
    backgroundColor:"red"
};
const htwo={
    fontFamily:"arial",
    color:"#fff"
};
const Div = () => {
    return (
        <div style={heading}>
            <h2 style={htwo}>This is heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto ipsum vel?</p>
        </div>
    )
}

export default Div
