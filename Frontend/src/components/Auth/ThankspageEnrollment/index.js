import React from 'react'
import {Link} from "react-router-dom";

function index() {
  return (
    <div  id="Efmainform" style={{marginTop : "100px" , textAlign : "center" }} >

         <h1 style={{color : "#00FF44" , justifyContent : "center" , paddingTop:"190px" }}>Thanks for submit Form</h1>
         <h3>For Add Another Branch <Link  to="../Enrollmentform" style={{color : "blue"}}>Click Here</Link> </h3>
        </div>
  )
}

export default index