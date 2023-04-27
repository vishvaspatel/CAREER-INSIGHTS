import React, {Component , useState , useEffect} from 'react'
import Chart from 'react-apexcharts'
import axios from "axios";
import setStates from "./index"

const App = () =>{

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
    name: "Intake",
    data:[]
  }])


  useEffect(() =>{
    const Intakegh2 = [];
    const Yeargh2 = [];
    const Enrollmentgh2 = [];
    const Placementgh2 = [];

    axios.get(`https://backendapisih.herokuapp.com/api/v1/india/All/Engineering/Private/All/All`).then(response => {
      console.log(response)
      response.data.map(item =>{
        console.log("item" , item)
         Intakegh2.push(item.Intake);
         Yeargh2.push(item.Year)
         console.log(item.Year)
         Enrollmentgh2.push(item.Enrollment)
         Placementgh2.push(item.Placement)
      })
      setObject(
        {
          Chart:{
            id : "apexchart-example"
          },
          xaxis : {
            categories : Yeargh2
          }
        }
       )
// Bottom up Approch Push  By New Predicted Api Data

       Yeargh2.push(2022);
       Intakegh2.push(32022);
       Enrollmentgh2.push(16522);
       Placementgh2.push(6002);
       setSeries([{
        name: "Intake",
        data: Intakegh2 ,
        type: 'bar'
      },{
        name: "Enrollment",
        data: Enrollmentgh2 ,
        type: 'bar',
      },{
        name: "Placement",
        data: Placementgh2 ,
        type: 'bar',
      }
    ]
       )

      console.log("age" , Intakegh2 , Yeargh2 , Enrollmentgh2 , Placementgh2)
    }).catch(e =>{
      alert(e);
    })
  }, [])

  return (
<Chart id="chart" options={optionsgh2} series={series} type="line" width={900} height={400}/>
  )
}

export default App