import React, { useEffect, useState } from "react";
import { getData } from "../Service/api";

const PrintAllData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    printAllUsers();
  }, []);

  const printAllUsers = async () => {
    const res = await getData();
    setUserData(res.data);
  };

  return (
    <div className="container">
      <table id="customers">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
        </tr>
        {userData.map((usr) => {
          return (
            <tr>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.username}</td>
              <td>{usr.email}</td>
              <td>{usr.phone}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default PrintAllData;
