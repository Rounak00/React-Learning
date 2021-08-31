import React, { useState } from "react";
import { setData } from "../Service/api";

const initialData = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddAllData = () => {
  const [sentData, setSentData] = useState(initialData);
  const { name, username, email, phone } = sentData;

  const sentUsrVal = (e) => {
      console.log(e.target.value);
    setSentData({...sentData,[e.target.name]:e.target.value});
  };
  const subData = () =>{
      setData(sentData);
  }
  return (
    <div className="container">
      <h1>Form</h1>
      <form>
        <label for="fname">Name</label>
        <input
          type="text"
          id="fname"
          name="name"
          placeholder="Your name.."
          onChange={(e) => sentUsrVal(e)}
        />
        <label for="Username">User Name</label>
        <input
          type="text"
          id="lname"
          name="username"
          placeholder="Your user name.."
          onChange={(e) => sentUsrVal(e)}
        />
        <label for="lname">Email</label>
        <input type="text" id="lname" name="email" placeholder="Your Email" onChange={(e) => sentUsrVal(e)}/>
        <label for="lname">Phone Name</label>
        <input type="text" id="lname" name="phone" placeholder="Your Phone.." onChange={(e) => sentUsrVal(e)}/>

        <input onClick={subData} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddAllData;
