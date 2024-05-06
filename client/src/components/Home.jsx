import React, { useState } from "react";
import axios from "axios"
export default function Home() {
    const [formdata, setFormdata] = useState({
        name:"",
        fname:"",
        mname:""
    })
    const handleChange=(e)=>{
      setFormdata({
        ...formdata,
        [e.target.name] : e.target.value
      }) 
    }
  

    const handlesubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("/upload", formdata);
        alert("Registered Successfully");
      } catch (error) {
        console.error(error);
      }
    };
    


  return (
    <form onSubmit={handlesubmit}>
      <div>
        <label htmlFor="">Name</label>
        <br />
        <input type="text" name="name" id="" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Father's name</label>
        <br />
        <input type="text" name="fname" id="" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Mother's name</label>
        <br />
        <input type="text" name="mname" id=""  onChange={handleChange}/>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
