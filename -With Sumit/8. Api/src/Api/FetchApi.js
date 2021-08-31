import axios from 'axios';
import React,{useState,useEffect} from 'react';
const key = process.env.React_App_API_KEY;

const FetchApi = () =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        getApi();
    },[]);
    const getApi = async () =>{
        const req = await axios.get(key);
        console.log(req.data);
        setData(req.data);
    }
 
    return(
        <>
            <img src={data.avatar_url} alt="" />
            <h2>Username:{data.login}</h2>
            <a href={data.html_url}>Click here for visit my github profile</a>
            <h2>Stars</h2>
        </>
    )
}

export default FetchApi;