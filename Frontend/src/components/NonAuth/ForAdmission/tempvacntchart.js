import React, { Component , useState , useEffect  } from 'react';
import Chart from 'react-apexcharts';
import axios from "axios";
const App = () => { 
  const [ series4 , setSeries4] = useState([
     {
      name: 'PRODUCT A',
      data: []
    }, {
      name: 'PRODUCT B',
      data: []
    }, 
  ]);
  const [ optionsgh4 , setObject4] = useState({
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
        },
          zoom: {
            enabled: true
          },
          xaxis: {
            categories: [],
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          },
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
          },
        })
  
        
        useEffect(() =>{
          const Intakegh2 = [];
          const Yeargh2 = [];
          const Enrollmentgh2 = [];
          const Vacantgov = [];
          const Vacantpri = [];
      
         
          async function getData(){

                const resgh4priFu = await axios.get(`https://mlsihapi.herokuapp.com/predict/india/All/Engineering/Private/2022/All`); 
                const resgh4govFu = await axios.get(`https://mlsihapi.herokuapp.com/predict/india/All/Engineering/Government/2022/All`); 
            const resvac = await axios.get(`https://backendapisih.herokuapp.com/api/v1/india/All/Engineering/Government/All/All/All`); 
            console.log(resvac.data)
            resvac.data.map(item =>{
              Vacantgov.push(item.Intake - item.Enrollment)
           })

            axios.get(`https://backendapisih.herokuapp.com/api/v1/india/All/Engineering/Private/All/All/All`).then(response => {
            console.log(response)
            response.data.map(item =>{
               Vacantpri.push(item.Intake - item.Enrollment)
               Yeargh2.push(item.Year)
            })
            setObject4(
              {
                Chart:{
                  id : "apexchart-example"
                },
                xaxis : {
                  categories : Yeargh2
                }
              }
             )
             Yeargh2.push(2022);
             Vacantpri.push(resgh4priFu.data[0].Intake - resgh4priFu.data[0].total_enrollment);
             Vacantgov.push(resgh4govFu.data[0].Intake - resgh4govFu.data[0].total_enrollment);
             setSeries4([{
              name: "Private",
              data: Vacantpri,
              type: 'bar',
            },
            {
              name: "Government",
              data: Vacantgov,
              type: 'bar',
            },
          ]
             )
      
            console.log("age" , Intakegh2 , Yeargh2 , Enrollmentgh2 , Vacantgov)
          }).catch(e =>{
            alert(e);
          })
          }
            getData();
          }, [])

          
        

    return (
      
      <div id="chart">
  <Chart options={optionsgh4} series={series4} type="bar" height={350} width={1200} />
</div>
    

        )  };
        
      
export default App