import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ClearIcon from '@material-ui/icons/Clear';
import React,{useState} from 'react';



const NavBar = () =>{
    const [show, setShow] = useState(false);

    const toggleClass = () =>{
        setShow(true);
        // setShow(!show);
    }
    const hiddenHam = () =>{
        setShow(false);
    }

    return(
        <div className="mainclass">
            <div className="nav-links">
                <div style={{display:"flex"}}>
                    <MenuOpenIcon className="hiddenIcn" onClick={()=>toggleClass()} />
                    <h5>GHOST</h5>
                </div>
                <ul className={ show ? "unOrder open" : "unOrder"}>
                    <ClearIcon className="hiddenIcn" onClick={()=>{hiddenHam()}} />
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </div>
        </div>
    )
}
 
export default NavBar;