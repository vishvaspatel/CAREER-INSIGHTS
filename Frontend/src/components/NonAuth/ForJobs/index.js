import React from 'react'
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import axios from "axios";
import "./Style.css"

function App() {

  const [states, setStates] = useState("All");
  const [states55, setStates55] = useState("All");
  const [selected, setSelected] = useState("Gujarat");
  const [selected2, setSelected2] = React.useState("Business services");
  const [selected5, setSelected5] = React.useState("");
  const [program, setProgram2] = useState("Engineering");


  const [ optionsgh2 , setObject] = useState({
    Chart:{
      id : "bar"
    },
    stroke: {
      width: [1, 1, 1]
    },
    markers: {
      size: 0
    },
    xaxis : {
      categories : []
    }
  })

  const [series , setSeries] = useState([{
    name: "Total Companies",
    data:[]
  }])
  const [ optionsgh5 , setObject5] = useState({
    Chart:{
      id : "bar"
    },
    stroke: {
      width: [1, 1, 1]
    },
    markers: {
      size: 0
    },
    xaxis : {
      categories : []
    }
  })

  const [series5 , setSeries5] = useState([{
    name: "Total Companies",
    data:[]
  }])

  useEffect(() =>{
    const Total = [];

    axios.get(`http://127.0.0.1:9000/api/v1/MCA/${selected}/${selected2}`).then(response => {
      console.log(response)
      response.data.map(item =>{

        Total.push(item.Total);

      })
      setObject(
        {
          Chart:{
            id : "apexchart-example"
          },
          xaxis : {
            categories : [2016 , 2017, 2018, 2019, 2020, 2021]
          }
        }
       )
// Bottom up Approch Push  By New Predicted Api Data

     
       setSeries([{
        name: "New Registered Companies",
        data: Total ,
        type: 'line'
      },
    ]
       )
    }).catch(e =>{
      alert(e);
    })
  }, [selected , selected2])

//   useEffect(() =>{
//     const Total = [];

//     axios.get(`https://backendapisih.herokuapp.com/api/v1/require/${selected5}`).then(response => {
//       console.log(response)
//       response.data.map(item =>{

//         Total.push(item.Total);

//       })
//       setObject(
//         {
//           Chart:{
//             id : "apexchart-example"
//           },
//           xaxis : {
//             categories : [2016 , 2017, 2018, 2019, 2020, 2021]
//           }
//         }
//        )
// // Bottom up Approch Push  By New Predicted Api Data

     
//        setSeries([{
//         name: "Intake",
//         data: Total ,
//         type: 'line'
//       },
//     ]
//        )
//     }).catch(e =>{
//       alert(e);
//     })
//   }, [selected5])

  return (
    <>
    
    <div ></div>
    <form>
        <div>
        <label id='fjd1text2'>Select State</label>
        <select
             id='fjd2fjj'
          value={states}
          onChange={ (event) => {
          setSelected(event.target.value); setStates(event.target.value);
  }}>
            <option>Gujarat</option>
            <option>Andhra Pradesh</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Delhi</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Puducherry</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Tamil Nadu</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
          </select>
        </div>
        <div>
        <label id='fjd1text3'>Select Industry</label>
        <select value={program} id='fjd3jjj'  onChange={ (event) => { setSelected2(event.target.value);  setProgram2(event.target.value);}}>
        <option>Business services</option>
<option>Air transport</option>
<option>Construction</option>
<option>Electricity, gas & water companies</option>
<option>Electricity, gas, steam and ho</option>
<option>Finance</option>
<option>Financial intermediation, exce</option>
<option>Fishing,operation of fish hatc</option>
<option>Healthcare</option>
<option>Hotels and restaurants</option>
<option>Insurance</option>
<option>Manufacture</option>
<option>Media and communications</option>
<option>Mining & quarrying</option>
<option>Other business activities</option>
<option>Other mining and quarrying</option>
<option>Other service activities</option>
<option>Pharmaceuticalll</option>
<option>Post and telecommunications</option>
<option>Prarmaceutical</option>
<option>Publishing, printing and repro</option>
<option>Real estate activities</option>
<option>Real estate and renting</option>
<option>Research and development</option>
<option>Retail trade,except of motor v</option>
<option>Sale,maintenance&repair of mot</option>
<option>Software</option>
<option>Supporting and auxiliary trans</option>
<option>Tanning and dressing of leathe</option>
<option>Trading</option>
<option>Transport, storage and communications</option>
<option>Water transport</option>

         
          </select>
        
        </div>
        <div>
        
        </div>
      </form>
      <h2  className='h1fjjj' style={{marginTop : "180px"}}>New Registred Companies From 2016 - 2021</h2>
      <Chart id="chart" className="chartgh3fjj" options={optionsgh2} series={series} type="line" width={900} height={400}/>
{/* <select
             id='fjd2'
          value={states}
          onChange={ (event) => {
          setSelected5(event.target.value); setStates55(event.target.value);
  }}>
            <option>Construction</option>
            <option>Consumer goods</option>
            <option>Corporate services</option>
            <option>Design</option>
            <option>Education</option>
            <option>Energy and mining</option>
            <option>Entertainment</option>
            <option>Finance</option>
            <option>Hardware and networking</option>
            <option>Healthcare</option>
            <option>Legal</option>
            <option>Manufacturing</option>
            <option>Media and communications</option>
            <option>Nonprofit</option>
            <option>Real estate</option>
            <option>Recreation and travel</option>
            <option>Retail</option>
            <option>Software and it services</option>
            <option>Transportation and logistics</option>
            <option>Wellness and fitness</option>
          </select> */}
      


    </>
  )
}

export default App