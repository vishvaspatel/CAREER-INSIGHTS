import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"
const ComA = () => {
  const [year, setYear] = useState("All");
  const [program, setProgram] = useState("All");
  const [Intake , setIntake ] = useState();



useEffect(() => {
 async function getData(){
  const res = await axios.get(`https://backendapisih.herokuapp.com/api/v1/india/${year}/${program}/All/2021/All/All`);
  
  setIntake(res.data[0].Intake + res.data[1].Intake)
  console.log(res.data[0].Intake + res.data[1].Intake)
 }
 getData();
});



  return (
    <>
    <h1 id="Sht1">Hsc and ssc data</h1>
      <label id='Shd1lable'>Select Year</label>
      <select
        style={{ marginTop: "120px" }}
        value={year}
        id="Shd2"
        onChange={(event) => {
          setYear(event.target.value);
        }}
      >
        <option defaultValue="All">2011</option>
        <option value="2013" >2012</option>
        <option value="2013" >2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
      </select>

      <label id='Shd2lable'>Select Year</label>
      <select
        style={{ marginTop: "120px" }}
        value={program}
        id="Shd3"
        onChange={(event) => {
          setProgram(event.target.value);
        }}
      >
        <option defaultValue="Pharmacy" >All</option>
        <option value="Management">Management</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="Rajasthan">Four</option>
        <option value="5">Five</option>
      </select>

      
<br />
<br />
<br />
<br />
<hr id="SHhr1" />
      <h1 style={{ marginTop: "120px" }}>Hello Number Is {year} Done ! Final Output = {Intake} </h1>
      <h1 style={{ marginTop: "120px" }}>Hello Number Is {program} Done !</h1>
     
      
      <br />
    </>
  );
};


export default ComA;
