import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {

  const [data, setData] = useState([]);
  const [qry, setQry] = useState("")

  useEffect( async() => {

    console.log("Im in useEffect")

    const response = await axios.get("http://localhost:9000/addressList")

    console.log("response", response)

    setData(response.data.addressList)


    
  }, []);
  
  return (
    <div>
      <ul>
        {data.map((elem) => <li>list: {elem.firstname}</li>)}
      </ul>
    </div>
  );
}
