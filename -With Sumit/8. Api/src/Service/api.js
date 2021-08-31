import axios from "axios";

const url = "http://127.0.0.1:5000/users";

export const getData = async () =>{
    return await axios.get(url);
}

export const setData = async(data) =>{
    return await axios.post(url,data);
}
