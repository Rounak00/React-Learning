//Inner CSS
const alignItems = {
    fontFamily:"arial",
    padding:"1rem 2rem",
    borderRadius:"1rem",
    boxShadow: "2px 5px 23px 1px rgba(0,0,0,0.5)",
    color:"#353b48",
    fontFamily: "Source Code Pro, monospace",
    background:"#7f8fa6"
};
const fontChange={
    fontFamily: "Lobster Two, cursive",
    color:"#2f3640"
};

const Box = (props) =>{
    return(
        <div style={alignItems}>
            <h2><span style={fontChange}>Name:</span>{props.name}</h2>
            <h2><span style={fontChange}>Collage:</span> {props.collage}</h2>
            <h2><span style={fontChange}>Stream:</span>{props.stream}</h2>
            <h2><span style={fontChange}>Rollno:</span>{props.roll}</h2>
        </div>
    )
}

export default Box;