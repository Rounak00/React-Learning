import React from 'react'

const heading = {
    border:"1px solid black",
    padding:"1rem 1.5rem",
    backgroundColor:"#085373",
    fontFamily :"arial"
};
const text = {
    color:"#fff"
};

const Props = (props) => {
    const {name,school,collage} = props;
    return (
        <div style={heading}>
            <h1 style={text}>My name is {name}</h1>
            <h2>School: {school}</h2>
            <h2>Collage: {collage}</h2>
        </div>
    )
}

export default Props
