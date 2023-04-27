import React, { Component , useState , useEffect  } from 'react';
import Chart from 'react-apexcharts';
import axios from "axios";

const App = () =>{


  const [optionssh , setOptionssh] = useState(
    {
    chart: {
      type: 'bar',
      height: 450,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Fiction Books Sales'
    },
    xaxis: {
      categories: ["Pharmacy" , 2 , 3 , 4 , 5 , 6 ,7 ,8 , 9 , 10, 1 , 2 , 3 , 4 , 5 , 6 ,7 ,8 , 9 , 10, 1 , 2 , 3 , 4 , 5 , 6 ,7 ,8 , 9 , 10, 31 , 32],
      labels: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
})
    const [seriessh , setSeriessh] = useState([
      {
        name: 'Male',
        data: [44, 55, 41, 37, 22, 43, 21 , 44, 55, 41, 37, 22, 43, 21 , 44, 55, 41, 37, 22, 43, 21 , 44, 55, 41, 37, 22, 43, 21 , 44, 55, 41, 37]
      }, {
        
        name: 'Female',
        data: [25, 12, 19, 32, 25, 24, 10 , 11 , 22 , 24 , 25 , 65 , 89 , 100 , 25 , 36  ,25, 12, 19, 32, 25, 24, 10 , 11 , 22 , 24 , 25 , 65 , 89 , 100 , 25 , 36 ,]
      }, 
    ])
    
    

    return (
      

<div id="chart">
<Chart options={optionssh} series={seriessh} type="bar" height={750} />
</div>


    )
}

export default App;