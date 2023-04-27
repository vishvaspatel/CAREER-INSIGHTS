import * as React from 'react';
import Box from '@mui/material/Box';
import "./Style.css"
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from "axios";
import Chart from 'react-apexcharts'
import CountUp from 'react-countup';

export default function MultipleSelectChip() {

  const [selected, setSelected] = React.useState("");
  const [selected2, setSelected2] = React.useState("");
  const [selected3, setSelected3] = React.useState("All");
  const [selected4, setSelected4] = React.useState("All");

  const [states, setStates] = useState("All");
  const [program, setProgram2] = useState("Engineering");
  const [district, setDistrict] = useState("All");
  const [Branch, setBranch] = useState("All");
  const [institutetype, setInstitutetype] = useState("All");

  const [Intake , setIntake ] = useState();
  const [IntakeFu , setIntakeFu ] = useState();
  
  const [Total_institutions , setTotal_institutions ] = useState();
  const [Enrollment , setEnrollment ] = useState();
  const [Placement , setPlacement ] = useState();
  const [EnrollmentFu , setEnrollmentFu ] = useState();
  const [PlacementFu , setPlacementFu ] = useState();



const [ optionsgh1 , setObject] = useState({
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
  },
})

const [series , setSeries] = useState([{
  name: "Intake",
  data:[]
}])

const [ optionsgh2 , setObject2] = useState({
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
  },
  title: {
    text: "Government",
    align: 'center',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#263238'
    },
}
  
})

const [series2 , setSeries2] = useState([{
  name: "Intake",
  data:[]
}])

const [ optionsgh3 , setObject3] = useState({
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
  },
  title: {
    text: "Private",
    align: 'center',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#263238'
    },
}
})

const [series3 , setSeries3] = useState([{
  name: "Intake",
  data:[]
}])

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

     const [seriescir , setSeriescir] = useState(
      [
      76, 67, 61, 90 , 50 , 55 , 45 , 48 , 97 , 88
    ]
    )
      
    const [ optionsgh2cir , setObjectcir] = useState({
      chart: {
        height: 340,
        type: 'radialBar',
      },
      title: {
        text: "Government",
        align: 'Center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },
    },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          offsetX : 100,
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 20,
            size: '10%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: true,
            }
          }
        }
      },

      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels : [], 
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 35,
        offsetY: 40,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 10
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }]
    })
     const [seriescirpri , setSeriescirpri] = useState(
      [
      76, 67, 61, 90 , 50 , 55 , 45 , 48 , 97 , 88
    ]
    )
      
    const [ optionsgh2cirpri , setObjectcirpri] = useState({
      chart: {
        height: 340,
        type: 'radialBar',
      },
      title: {
        text: "Private",
        align: 'Center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },
    },
      plotOptions: {
        radialBar: {
          offsetX : -100,
          offsetY: 0,
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 20,
            size: '10%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: true,
            }
          }
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['2013', '2014', '2015', '2016' , '2017' , '2018' , '2019' , "2020" , "2021" , "2022"],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 450,
        offsetY: 40,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }]
    })


// Graph 1 
useEffect(() =>{
  const Intakegh1 = [];
  var Yeargh1 = [];
    // Yeargh1 = [2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022];
  
  
  const Enrollmentgh1 = [];
  const Placementgh1 = [];

  if(selected2 === "All")
{
    async function getData(){

      const Future = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/All/2022/All/All`); 
  axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/All/All/All/All`).then(responseFu => {

    var Intakegh2 = new Array(10).fill(0);
    var Enrollmentgh2 = new Array(10).fill(0);
    var Placementgh2 = new Array(10).fill(0);
var j = 0;
    for (let i = 0 ; i < 27 ; i = i + 3 , j++){
      Intakegh2[j] = Intakegh2[j] + responseFu.data[i].Intake + responseFu.data[i + 1].Intake + responseFu.data[i + 2].Intake;
      Enrollmentgh2[j] = Enrollmentgh2[j] + responseFu.data[i].Enrollment + responseFu.data[i + 1].Enrollment + responseFu.data[i + 2].Enrollment;
      Placementgh2[j] = Placementgh2 [j] + responseFu.data[i].Placement + responseFu.data[i + 1].Placement + responseFu.data[i + 2].Placement;
      // Yeargh1.push(responseFu.data[i].Year);
    }
    
    Yeargh1 = [2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022];
  
      Intakegh2[j] =  Future.data[0].Intake + Future.data[1].Intake + Future.data[2].Intake;
      Enrollmentgh2[j] =  Future.data[0].total_enrollment + Future.data[1].total_enrollment + Future.data[2].total_enrollment;
      Placementgh2[j] =  Future.data[0].Placement + Future.data[1].Placement + Future.data[2].Placement;
      // Yeargh1.push(2022);

  setObject(
    {
      Chart:{
        id : "apexchart-example"
      },
      xaxis : {
        categories : Yeargh1
      }
    }
   )
  //  Yeargh2.push(2022);
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
    data: Placementgh2,
    type: 'bar',
  }
]
   )

  // console.log("age" , Intakegh2 , Yeargh2 , Enrollmentgh2 , Vacantgov)
}).catch(e =>{
  alert(e);
})
}
getData();
  }else{
    async function getData(){


      const Future = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/All/2022/${district}/${Branch}`); 
      axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/All/All/${district}/${Branch}`).then(responseFu => {
        responseFu.data.map(item =>{
           Intakegh1.push(item.Intake);
           Enrollmentgh1.push(item.Enrollment)
           Placementgh1.push(item.Placement)
           Yeargh1.push(item.Year);
        })
        Yeargh1.push(2022);
        setObject(
          {
            Chart:{
              id : "apexchart-example"
            },
            xaxis : {
              categories : Yeargh1
            }
          }
         )

        
         Intakegh1.push(Future.data[0].Intake);
         Placementgh1.push(Future.data[0].Placement);
         Enrollmentgh1.push(Future.data[0].total_enrollment);
         setSeries([{
          name: "Intake",
          data: Intakegh1 ,
          type: 'bar'
        },{
          name: "Enrollment",
          data: Enrollmentgh1 ,
          type: 'bar',
        },{
          name: "Placement",
          data: Placementgh1 ,
          type: 'bar',
        }
      ]
         )
    
      }).catch(e =>{
        alert(e);
      })
    }
      getData();
  }

}, [states , program , district , Branch  ])

// Graph 2

useEffect(() =>{
  const Intakegh2 = [];
  var Yeargh2 = [];
  const Enrollmentgh2 = [];
  const Placementgh2 = [];

  if(selected2 === "All"){
    async function getData(){

      const Future = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Government/2022/All/All`); 
      // console.log(resgh2.data.Intake , resgh2.data.Placement , resgh2.data.total_enrollment)
      axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Government/All/All/All`).then(responseFu => {
      
      var Intakegh1 = new Array(10).fill(0);
        var Enrollmentgh1 = new Array(10).fill(0);
        var Placementgh1 = new Array(10).fill(0);


        var j = 0;
    for (let i = 0 ; i < 27 ; i = i + 3 , j++){
      Intakegh1[j] = Intakegh1[j] + responseFu.data[i].Intake + responseFu.data[i + 1].Intake + responseFu.data[i + 2].Intake;
      Enrollmentgh1[j] = Enrollmentgh1[j] + responseFu.data[i].Enrollment + responseFu.data[i + 1].Enrollment + responseFu.data[i + 2].Enrollment;
      Placementgh1[j] = Placementgh1 [j] + responseFu.data[i].Placement + responseFu.data[i + 1].Placement + responseFu.data[i + 2].Placement;
    }

    Yeargh2 = [2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022];
  
      Intakegh1[j] =   Future.data[0].Intake + Future.data[1].Intake + Future.data[2].Intake;
      Enrollmentgh1[j] =  Future.data[0].total_enrollment + Future.data[1].total_enrollment + Future.data[2].total_enrollment;
      Placementgh1[j] =   Future.data[0].Placement + Future.data[1].Placement + Future.data[2].Placement;
        setObject2(
          {
            Chart:{
              id : "apexchart-example"
            },
            xaxis : {
              categories : Yeargh2
            }
          }
         )
    
         setSeries2([{
          name: "Intake",
          data: Intakegh1 ,
          type: 'line'
        },{
          name: "Enrollment",
          data: Enrollmentgh1 ,
          type: 'line',
        },{
          name: "Placement",
          data: Placementgh1 ,
          type: 'line',
        }
      ]
         )
    
        // console.log("age" , Intakegh1 , Yeargh1 , Enrollmentgh1 , Placementgh1)
      }).catch(e =>{
        alert(e);
      })
      // console.log("Future" , resgh2.data);
    }
    getData();
  }else{
  async function getData(){

  const resgh2 = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Government/2022/${district}/${Branch}`); 
  // console.log(resgh2.data.Intake , resgh2.data.Placement , resgh2.data.total_enrollment)
  axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Government/All/${district}/${Branch}`).then(responseFu => {
    responseFu.data.map(item =>{
       Intakegh2.push(item.Intake);
       Yeargh2.push(item.Year)
       Enrollmentgh2.push(item.Enrollment)
       Placementgh2.push(item.Placement)
    })
   
    setObject2(
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
     Intakegh2.push(resgh2.data[0].Intake);
     Placementgh2.push(resgh2.data[0].Placement);
     Enrollmentgh2.push(resgh2.data[0].total_enrollment);
     setSeries2([{
      name: "Intake",
      data: Intakegh2 ,
      type: 'line'
    },{
      name: "Enrollment",
      data: Enrollmentgh2 ,
      type: 'line',
    },{
      name: "Placement",
      data: Placementgh2 ,
      type: 'line',
    }
  ]
     )

    // console.log("age" , Intakegh1 , Yeargh1 , Enrollmentgh1 , Placementgh1)
  }).catch(e =>{
    alert(e);
  })
  // console.log("Future" , resgh2.data);
}
getData();
}
  
}, [states , program , district , Branch ])



// Graph 3 
useEffect(() =>{
  const Intakegh3 = [];
  var Yeargh3 = [];
  const Enrollmentgh3 = [];
  const Placementgh3 = [];

  if(selected2 === "All"){
    async function getData(){

      const Future = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Private/2022/All/All`); 
      axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Private/All/All/All`).then(responseFu => {
      
      var Intakegh2 = new Array(10).fill(0);
        var Enrollmentgh2 = new Array(10).fill(0);
        var Placementgh2 = new Array(10).fill(0);
        var j = 0;
    for (let i = 0 ; i < 27 ; i = i + 3 , j++){
      Intakegh2[j] = Intakegh2[j] + responseFu.data[i].Intake + responseFu.data[i + 1].Intake + responseFu.data[i + 2].Intake;
      Enrollmentgh2[j] = Enrollmentgh2[j] + responseFu.data[i].Enrollment + responseFu.data[i + 1].Enrollment + responseFu.data[i + 2].Enrollment;
      Placementgh2[j] = Placementgh2 [j] + responseFu.data[i].Placement + responseFu.data[i + 1].Placement + responseFu.data[i + 2].Placement;
    }
  
    Yeargh3 = [2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022];

      Intakegh2[j] =   Future.data[0].Intake + Future.data[1].Intake + Future.data[2].Intake;
      Enrollmentgh2[j] =   Future.data[0].total_enrollment + Future.data[1].total_enrollment + Future.data[2].total_enrollment;
      Placementgh2[j] =   Future.data[0].Placement + Future.data[1].Placement + Future.data[2].Placement;
      setObject3(
          {
            Chart:{
              id : "apexchart-example"
            },
            xaxis : {
              categories : Yeargh3
            }
          }
         )
      
         setSeries3([{
          name: "Intake",
          data: Intakegh2 ,
          type: 'line'
        },{
          name: "Enrollment",
          data: Enrollmentgh2 ,
          type: 'line',
        },{
          name: "Placement",
          data: Placementgh2 ,
          type: 'line',
        }
      ]
         )
    
      }).catch(e =>{
        alert(e);
      })
    }
    getData();
  }
  else{
  async function getData(){

  const Future = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Private/2022/${district}/${Branch}`); 
  axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Private/All/${district}/${Branch}`).then(responseFu => {
    responseFu.data.map(item =>{
       Intakegh3.push(item.Intake);
       Enrollmentgh3.push(item.Enrollment)
       Placementgh3.push(item.Placement)
       Yeargh3.push(item.Year);
    })
    Yeargh3.push(2022);
    setObject3(
      {
        Chart:{
          id : "apexchart-example"
        },
        xaxis : {
          categories : Yeargh3
        }
      }
     )
    
     Intakegh3.push(Future.data[0].Intake);
     Placementgh3.push(Future.data[0].Placement);
     Enrollmentgh3.push(Future.data[0].total_enrollment);
     setSeries3([{
      name: "Intake",
      data: Intakegh3 ,
      type: 'line'
    },{
      name: "Enrollment",
      data: Enrollmentgh3 ,
      type: 'line',
    },{
      name: "Placement",
      data: Placementgh3 ,
      type: 'line',
    }
  ]
     )

  }).catch(e =>{
    alert(e);
  })
}
getData();
}
}, [states , program , district , Branch ])

// Graph 4 start 

useEffect(() =>{
  var Yeargh2 = [];
  const Vacantgov = [];
  const Vacantpri = [];

  if(selected2 === "All"){
    async function getData(){

      const resgh4priFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Private/2022/${district}/${Branch}`); 
      const resgh4govFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Government/2022/${district}/${Branch}`); 
  const responseFugov = await axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Government/All/${district}/${Branch}`); 
  var Intakegh2 = new Array(10).fill(0);
  var Enrollmentgh2 = new Array(10).fill(0);

    
    var j=0

    for (let i = 0 ; i < 27 ; i = i + 3 , j++){
      Intakegh2[j] = Intakegh2[j] + responseFugov.data[i].Intake + responseFugov.data[i + 1].Intake + responseFugov.data[i + 2].Intake;
      Enrollmentgh2[j] = Enrollmentgh2[j] + responseFugov.data[i].Enrollment + responseFugov.data[i + 1].Enrollment + responseFugov.data[i + 2].Enrollment;
      Vacantgov[j]=Intakegh2[j] - Enrollmentgh2[j];
    }

    Yeargh2 = [2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022];
  
      Intakegh2[j] =   resgh4govFu.data[0].Intake + resgh4govFu.data[1].Intake + resgh4govFu.data[2].Intake;
      Enrollmentgh2[j] =   resgh4govFu.data[0].total_enrollment + resgh4govFu.data[1].total_enrollment + resgh4govFu.data[2].total_enrollment;
      

      Vacantgov[j]=Intakegh2[j] - Enrollmentgh2[j];


  axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Private/All/${district}/${Branch}`).then(responseFupri => {

    var Intakegh2 = new Array(10).fill(0);
    var Enrollmentgh2 = new Array(10).fill(0);
  

      var j=0
  
      for (let i = 0 ; i < 27 ; i = i + 3 , j++){
        Intakegh2[j] = Intakegh2[j] + responseFupri.data[i].Intake + responseFupri.data[i + 1].Intake + responseFupri.data[i + 2].Intake;
        Enrollmentgh2[j] = Enrollmentgh2[j] + responseFupri.data[i].Enrollment + responseFupri.data[i + 1].Enrollment + responseFupri.data[i + 2].Enrollment;
        Vacantpri[j] = Intakegh2[j] - Enrollmentgh2[j]
  
      }
        Intakegh2[j] =   resgh4priFu.data[0].Intake + resgh4priFu.data[1].Intake + resgh4priFu.data[2].Intake;
        Enrollmentgh2[j] =   resgh4priFu.data[0].total_enrollment + resgh4priFu.data[1].total_enrollment + resgh4priFu.data[2].total_enrollment;
        
  
        Vacantpri[j] = Intakegh2[j] - Enrollmentgh2[j]

  
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

  // console.log("age" , Intakegh2 , Yeargh2 , Enrollmentgh2 , Vacantgov)
}).catch(e =>{
  alert(e);
})
}
  getData();
   }else{
    async function getData(){

      const resgh4priFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Private/2022/${district}/${Branch}`); 
      const resgh4govFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Government/2022/${district}/${Branch}`); 
  const responsegov = await axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Government/All/${district}/${Branch}`); 

  responsegov.data.map(item =>{
    Vacantgov.push(item.Intake - item.Enrollment)
    Yeargh2.push(item.Year);
 })



  axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Private/All/${district}/${Branch}`).then(responseprivate => {
  responseprivate.data.map(item =>{
     Vacantpri.push(item.Intake - item.Enrollment)
  })
  Yeargh2.push(2022);
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

  // console.log("age" , Intakegh2 , Yeargh2 , Enrollmentgh2 , Vacantgov)
}).catch(e =>{
  alert(e);
})
}
  getData();
   }
  
 

  }, [states , program , district , Branch ])

// graph5 cir 

useEffect(() =>{
  const Vacangovcir = new Array(10).fill(0);
  // var Yeargh5a= [2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022];
  var Yeargh5= [];
  if(selected2 === "All"){
    async function getData(){

      const resgh4govFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Government/2022/${district}/${Branch}`); 
      axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Government/All/${district}/${Branch}`).then(response => {
      console.log(response.data)

  var Intakegovcriall = 0 ;
  var Enrollmentgovcriall = 0 
  var j = 0;
      for (let i=0 ; i < response.data.length ; i = i + 3 , j++){
      
        Intakegovcriall = response.data[i].Intake + response.data[i + 1].Intake + response.data[i + 2].Intake
        Enrollmentgovcriall = response.data[i].Enrollment + response.data[i + 1].Enrollment + response.data[i + 2].Enrollment
        
        Vacangovcir[j] = (((Intakegovcriall) - Enrollmentgovcriall)*100)/(Intakegovcriall);
        Vacangovcir[j] =   Vacangovcir[j].toFixed(2)
      }

   
      setObjectcir(
        {
          Chart:{
            id : "apexchart-example"
          },
          labels :[2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022],
          xaxis : {
            categories : Yeargh5
          }
        }
       )
       Intakegovcriall = resgh4govFu.data[0].Intake + resgh4govFu.data[1].Intake + resgh4govFu.data[2].Intake
       Enrollmentgovcriall = resgh4govFu.data[0].total_enrollment + resgh4govFu.data[1].total_enrollment + resgh4govFu.data[2].total_enrollment

       

       Vacangovcir[9] = (((Intakegovcriall - Enrollmentgovcriall)*100)/Intakegovcriall)
       Vacangovcir[9] =   Vacangovcir[9].toFixed(2)
       setSeriescir(
        Vacangovcir
       )
    })
    }
    getData();
  }else{
    async function getData(){

      const resgh4govFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Government/2022/${district}/${Branch}`); 
      axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Government/All/${district}/${Branch}`).then(response => {
      // console.log(response.data)
      var j=0;
      for (let i=0 ; i < response.data.length ; i++,j++){
      
        Vacangovcir[i] = (((response.data[i].Intake) - response.data[i].Enrollment)*100)/(response.data[i].Intake);
        Vacangovcir[i] =   Vacangovcir[i].toFixed(2)
        
      }
      
      console.log( "tryyy", Vacangovcir)
      if (selected3 === "All")
      {
        Yeargh5 = []
       Yeargh5 =  [2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022 ]
      } else{
        Yeargh5 =  [2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022 ]
        // Yeargh5=Yeargh5.slice(0 , 6) 
   
        Vacangovcir.pop()
        Vacangovcir.pop()
        
      }
      console.log("Yeargh5",Yeargh5)
      
      setObjectcir(
        {
          Chart:{
            id : "apexchart-example"
          },
          labels : Yeargh5,
          xaxis : {
            categories : []
          }
        }
       )
       
       Vacangovcir[j] = (((resgh4govFu.data[0].Intake - resgh4govFu.data[0].total_enrollment)*100)/resgh4govFu.data[0].Intake)
       Vacangovcir[j] =   Vacangovcir[j].toFixed(2)
       setSeriescir(
        Vacangovcir
       )
    })
    }
    getData();
  }
  }, [states , program , district , Branch  ])



// graph6 cir chart start

useEffect(() =>{
  const Vacangovcir = new Array(10).fill(0);
  var Yeargh5 =[]
  if(selected2 === "All"){
    async function getData(){

      const resgh4govFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Private/2022/${district}/${Branch}`); 
      axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Private/All/${district}/${Branch}`).then(response => {
      // console.log(response.data)

  var Intakegovcriall = 0 ;
  var Enrollmentgovcriall = 0 
  var j = 0;
      for (let i=0 ; i < response.data.length ; i = i + 3 , j++){
      
        Intakegovcriall = response.data[i].Intake + response.data[i + 1].Intake + response.data[i + 2].Intake
        Enrollmentgovcriall = response.data[i].Enrollment + response.data[i + 1].Enrollment + response.data[i + 2].Enrollment
        
        Vacangovcir[j] = (((Intakegovcriall) - Enrollmentgovcriall)*100)/(Intakegovcriall);
        Vacangovcir[j] =   Vacangovcir[j].toFixed(2)
      }
      setObjectcir(
        {
          Chart:{
            id : "apexchart-example"
          },
          labels :[2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022],
          xaxis : {
            categories :[]
          }
        }
       )
       Intakegovcriall = resgh4govFu.data[0].Intake + resgh4govFu.data[1].Intake + resgh4govFu.data[2].Intake
       Enrollmentgovcriall = resgh4govFu.data[0].total_enrollment + resgh4govFu.data[1].total_enrollment + resgh4govFu.data[2].total_enrollment

       Vacangovcir[9] = (((Intakegovcriall - Enrollmentgovcriall)*100)/Intakegovcriall)
       Vacangovcir[9] =   Vacangovcir[9].toFixed(2)
       setSeriescir(
        Vacangovcir
       )
    })
    }
    getData();
  }else{
    async function getData(){

      const resgh4govFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/Private/2022/${district}/${Branch}`); 
      axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/Private/All/${district}/${Branch}`).then(response => {
    
      var j=0;
      for (let i=0 ; i < response.data.length ; i++,j++){
      
        Vacangovcir[i] = (((response.data[i].Intake) - response.data[i].Enrollment)*100)/(response.data[i].Intake);
        Vacangovcir[i] =   Vacangovcir[i].toFixed(2)
      }
      if (selected3 === "All")
      {
        Yeargh5 = []
       Yeargh5 =  [2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022]
      } else{
        Yeargh5 =  [2015 , 2016 , 2017 , 2018 , 2019 , 2020 , 2021 , 2022 ]
        // Yeargh5=Yeargh5.slice(0 , 6) 
   
        Vacangovcir.pop()
        Vacangovcir.pop()
        
      }
      setObjectcirpri(
        {
          Chart:{
            id : "apexchart-example"
          },
          labels : Yeargh5,
          xaxis : {
            categories :[]
          }
        }
       )
       Vacangovcir[j] = (((resgh4govFu.data[0].Intake - resgh4govFu.data[0].total_enrollment)*100)/resgh4govFu.data[0].Intake)
       Vacangovcir[j] =   Vacangovcir[j].toFixed(2)
       setSeriescirpri(
        Vacangovcir
       )
    })
    }
    getData();
  }
  }, [states , program , district , Branch  ])



useEffect(() => {
 async function getData(){
  const res = await axios.get(`http://localhost:9000/api/v1/india/${states}/${program}/${institutetype}/2021/${district}/${Branch}`);
  const resFu = await axios.get(`http://127.0.0.1:5000/predict/india/${states}/${program}/All/2022/${district}/${Branch}`);
  

  
 console.log("hello" , resFu.data)
  let Total_institutions = 0;
  let Intake = 0;
  let Enrollment = 0;
  let Placement = 0;
  let IntakeFu = 0;
  let EnrollmentFu = 0;
  let PlacementFu = 0;

  console.log("testiiii" , resFu.data)
  for (let i = 0; i < resFu.data.length; i++) {
    IntakeFu = IntakeFu + resFu.data[i].Intake;
    EnrollmentFu = EnrollmentFu + resFu.data[i].total_enrollment;
    PlacementFu = PlacementFu + resFu.data[i].Placement;
    
  }
  console.log("testi" ,IntakeFu )
  
for (let i = 0; i < res.data.length; i++) {
  Total_institutions = Total_institutions +  res.data[i].Total_institutions;
  Intake = Intake +  res.data[i].Intake;
  Enrollment = Enrollment +  res.data[i].Enrollment;
  Placement = Placement +  res.data[i].Placement;
}

// console.log({Intake});

  // console.log(res.data);
  setIntake(Intake)
  setTotal_institutions(Total_institutions)
  setEnrollment(Enrollment)
  setPlacement(Placement)
  setIntakeFu(IntakeFu)
  setEnrollmentFu(EnrollmentFu)
  setPlacementFu(PlacementFu)

 
 }
 getData();
} , [states , program , institutetype , district , Branch]);

  const GujaratAll = [
   <option value="All">All</option> ,
   <option value="Ahmedabad">Ahmedabad</option> ,
   <option value="Amreli">Amreli</option> ,
   <option value="Anand">Anand</option> ,
   <option value="Bharuch">Bharuch</option> ,
   <option value="Bhavnagar">Bhavnagar</option> ,
   <option value="Gandhinagar">Gandhinagar</option> ,
   <option value="Jamnagar">Jamnagar</option> ,
   <option value="Junagadh">Junagadh</option> ,
   <option value="Kutch">Kutch</option> ,
   <option value="Mehsana">Mehsana</option> ,
   <option value="Rajkot">Rajkot</option> ,
   <option value="Sabarkantha">Sabarkantha</option> ,
   <option value="Surat">Surat</option> ,
   <option value="Surendranagar">Surendranagar</option> ,
   <option value="Vadodara">Vadodara</option> ,
   <option value="Valsad">Valsad</option> ,

  ];
  const Gujarateng = [
    <option value="All">All</option> ,
    <option value="Ahmedabad">Ahmedabad</option> ,
    <option value="Anand">Anand</option> ,
    <option value="Aravalli">Aravalli</option> ,
    <option value="Banaskantha">Banaskantha</option> ,
    <option value="Bharuch">Bharuch</option>, 
    <option value="Bhavnagar">Bhavnagar</option>, 
    <option value="Dahod">Dahod</option> ,
    <option value="Gandhinagar">Gandhinagar</option> ,
    <option value="Jamnagar">Jamnagar</option> ,
    <option value="Junagadh">Junagadh</option> ,
    <option value="Kheda">Kheda</option> ,
    <option value="Kutch">Kutch</option> ,
    <option value="Mehsana">Mehsana</option> ,
    <option value="Morbi">Morbi</option> ,
    <option value="Navsari">Navsari</option> ,
    <option value="Panchmahal">Panchmahal</option> ,
    <option value="Patan">Patan</option> ,
    <option value="Rajkot">Rajkot</option> ,
    <option value="Sabarkantha">Sabarkantha</option> ,
    <option value="Surat">Surat</option> ,
    <option value="Surendranagar">Surendranagar</option> ,
    <option value="Vadodara">Vadodara</option> ,
    <option value="Valsad">Valsad</option> ,
  ];
  const Gujaratmanage = [
   <option value="All">All</option>,
   <option value="Ahmedabad">Ahmedabad</option>,
   <option value="Anand">Anand</option>,
   <option value="Aravalli">Aravalli</option>,
   <option value="Bharuch">Bharuch</option>,
   <option value="Bhavnagar">Bhavnagar</option>,
   <option value="Gandhinagar">Gandhinagar</option>,
   <option value="Jamnagar">Jamnagar</option>,
   <option value="Junagadh">Junagadh</option>,
   <option value="Kheda">Kheda</option>,
   <option value="Kutch">Kutch</option>,
   <option value="Mehsana">Mehsana</option>,
   <option value="Navsari">Navsari</option>,
   <option value="Patan">Patan</option>,
   <option value="Porbandar">Porbandar</option>,
   <option value="Rajkot">Rajkot</option>,
   <option value="Sabarkantha">Sabarkantha</option>,
   <option value="Surat">Surat</option>,
   <option value="Surendranagar">Surendranagar</option>,
   <option value="Vadodara">Vadodara</option>,
   <option value="Valsad">Valsad</option>,
  ];
  const Gujaratpharma = [
   <option value="All">All</option>,
   <option value="Ahmedabad">Ahmedabad</option>,
   <option value="Amreli">Anand</option>,
   <option value="Anand">Aravalli</option>,
   <option value="Bharuch">Bharuch</option>,
   <option value="Bhavnagar">Bhavnagar</option>,
   <option value="Gandhinagar">Gandhinagar</option>,
   <option value="Jamnagar">Jamnagar</option>,
   <option value="Junagadh">Junagadh</option>,
   <option value="Kheda">Kheda</option>,
   <option value="Kutch">Kutch</option>,
   <option value="Mehsana">Mehsana</option>,
   <option value="Panchmahal">Panchmahal</option>,
   <option value="Rajkot">Rajkot</option>,
   <option value="Sabarkantha">Sabarkantha</option>,
   <option value="Surat">Surat</option>,
   <option value="Surendranagar">Surendranagar</option>,
   <option value="Vadodara">Vadodara</option>,
   <option value="Valsad">Valsad</option>,
  ];
  const StateAll = [
   <option value="All">All</option>
  ];

 
  const EngGuj1 = [
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Information technology">Information technology</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
   ];

   const EngGuj2 = [
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Information technology">Information technology</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
   ];

   const EngGuj3 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Information technology">Information technology</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
   ];

   const EngGuj4 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
   ];

   const EngGuj5 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];

   const EngGuj6 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];

   const EngGuj7 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
   ];
   const EngGuj8 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj9 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj10 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj11 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
   ];
   const EngGuj12 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
   ];
   const EngGuj13 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj14 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj15 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
   ];
   const EngGuj16 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    
   ];
   const EngGuj17 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
   ];
   const EngGuj18 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj19 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj20 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj21 = [
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj22 = [
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
   const EngGuj23 = [
    <option value="Automobile engineering">Automobile engineering</option> ,
    <option value="Civil engineering">Civil engineering</option> ,
    <option value="Electrical engineering">Electrical engineering</option> ,
    <option value="Electronics & communication engineering">Electronics & communication engineering</option> ,
    <option value="Computer engineering">Computer engineering</option> ,
    <option value="Mechanical engineering">Mechanical engineering</option> ,
    <option value="Chemical engineering">Chemical engineering</option> ,
    <option value="Information technology">Information technology</option> ,
   ];
  

  const ProgramAll = [
    <option value="All">All</option> ,
   ];


  let type = null;
  let type2 = null;
  let options = null;
  let options2 = null;


  if (selected2 === "All" && selected === "Gujarat" ) {
    type = StateAll;
  } else if (selected === "Gujarat" && selected2 === "Engineering"){
    type = Gujarateng;
  } else if (selected === "Gujarat" && selected2 === "Management"){
    type = Gujaratmanage;
  } else if (selected === "Gujarat" && selected2 === "Pharmacy"){
    type = Gujaratpharma;
  }
  else{
    type = StateAll
  }
if(selected2 === "Engineering" && selected === "Gujarat"){
  if (selected3 === "Ahmedabad") {
    type2 = EngGuj1;
  }
  else if (selected3 === "Anand") {
    type2 = EngGuj2;
  }
  else if (selected3 === "Aravalli") {
    type2 = EngGuj3;
  }
  else if (selected3 === "Banaskantha") {
    type2 = EngGuj4;
  }
  else if (selected3 === "Bharuch") {
    type2 = EngGuj5;
  }
  else if (selected3 === "Bhavnagar") {
    type2 = EngGuj6;
  }
  else if (selected3 === "Dahod") {
    type2 = EngGuj7;
  }
  else if (selected3 === "Gandhinagar") {
    type2 = EngGuj8;
  }
  else if (selected3 === "Jamnagar") {
    type2 = EngGuj9;
  }
  else if (selected3 === "Junagadh") {
    type2 = EngGuj10;
  }
  else if (selected3 === "Kheda") {
    type2 = EngGuj11;
  }
  else if (selected3 === "Kutch") {
    type2 = EngGuj12;
  }
  else if (selected3 === "Mehsana") {
    type2 = EngGuj13;
  }
  else if (selected3 === "Morbi") {
    type2 = EngGuj14;
  }
  else if (selected3 === "Navsari") {
    type2 = EngGuj15;
  }
  else if (selected3 === "Panchmahal") {
    type2 = EngGuj16;
  }
  else if (selected3 === "Patan") {
    type2 = EngGuj17;
  }
  else if (selected3 === "Rajkot") {
    type2 = EngGuj18;
  }
  else if (selected3 === "Sabarkantha") {
    type2 = EngGuj19;
  }
  else if (selected3 === "Surat") {
    type2 = EngGuj20;
  }
  else if (selected3 === "Surendranagar") {
    type2 = EngGuj21;
  }
  else if (selected3 === "Vadodara") {
    type2 = EngGuj22;
  }
  else if (selected3 === "Valsad") {
    type2 = EngGuj23;
  }
  else{
    type2 = ProgramAll;
  }
}else{
  type2 = ProgramAll;
}

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>); 
  }
  if (type2) {
    options2 = type2.map((el) => <option key={el}>{el}</option>); 
  }




  return (
    
      <Box >
        <Typography id="fjboxtitle" style={{fontfamily : 'Poppins' , textAlign : 'center' , marginTop : "100px"}}>
        Admissions and Placement Analysis on basis of AICTE
        </Typography>
        {/* <hr/> */}

 <div
      style={{
        padding: "16px",
        marginTop: "120px",
      }}
    >
      <form>
        <div>
        <label id='fjd1text2'>Select State</label>
          <select
             id='fjd2'
          value={states}
          onChange={ (event) => {
          setSelected(event.target.value); setStates(event.target.value);
  }}>
            <option value="All">All States</option>
            <option>Andhra Pradesh</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Delhi</option>
            <option value="Gujarat">Gujarat</option>
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
        <label id='fjd1text3'>Select District</label>
        <select
        id='fjd3'
          value={district}
          onChange={ (event) => {  setSelected3(event.target.value);  setDistrict(event.target.value);}} > 
          
            {
              options
            }
          </select>
           <label id='fjd1text4'>Select Branch</label>
        <select
        id='fjd4'
          value={Branch}
          onChange={ (event) => {  setSelected4(event.target.value);  setBranch(event.target.value);}} > 
          
            {
              options2
            }
          </select>
        </div>
        <div>
        <label id='fjd1text1'>Select Program</label>
        <select value={program} id='fjd1'  onChange={ (event) => { setSelected2(event.target.value);  setProgram2(event.target.value);}}>
        <option value="All">All</option>
        <option value="Engineering">Engineering</option>
        <option value="Management">Management</option>
        <option value="Pharmacy">Pharmacy</option>
        </select>
        </div>
      </form>
    </div>
<hr style={{marginTop : "30px"}} />

    <Typography id="fatypo2">
   Data of Previous Year for <span style={{color : "green"}}>{program}</span> program of <span style={{color : "green"}}>{states}</span> State And <span style={{color : "green"}}>{district} </span>District   [Branch : <span style={{color : "green"}}>{selected4}</span>]
    </Typography>

<Box className="wrapper">
  <Box id='FaB1'><Typography className='FaB1txtsp'> <CountUp end={Total_institutions} duration={0.7}></CountUp></Typography></Box>
  <Typography id="FaBsmtxt1a"> Total Institutions</Typography>
  <Typography id="FaBsmtxt1b"> Total institutions As per  the <br /> Selected choice of your <br /> convenience. </Typography>
  <Box id='FaB2'><Typography className='FaB1txtsp'><CountUp end={Intake} duration={0.7}></CountUp></Typography></Box>
  <Typography id="FaBsmtxt2a"> Total Intakes</Typography>
  <Typography id="FaBsmtxt2b"> Total Intakes As per  the <br /> Selected choice of your <br /> convenience. </Typography>
  <Box id='FaB3'><Typography className='FaB1txtsp'><CountUp end={Enrollment} duration={0.7}></CountUp></Typography></Box>
  <Typography id="FaBsmtxt3a"> Total Enrollments</Typography>
  <Typography id="FaBsmtxt3b"> Total Enrollments As per  the <br /> Selected choice of your <br /> convenience. </Typography>
  <Box id='FaB4'><Typography className='FaB1txtsp'><CountUp end={Placement} duration={0.7}></CountUp></Typography></Box>
  <Typography id="FaBsmtxt4a"> Total Placements</Typography>
  <Typography id="FaBsmtxt4b"> Total Placements As per  the <br /> Selected choice of your <br /> convenience. </Typography>
</Box>
<hr style={{color:"#2C4AB4" , marginTop: "120px", }}  />
<Typography id="fatypo2">
Data of Upcoming Year for <span style={{color : "green"}}>{program}</span> program of <span style={{color : "green"}}>{states}</span> State And <span style={{color : "green"}}>{district} </span> District [Branch : <span style={{color : "green"}}>{selected4}</span>]
    </Typography>
<Box className="wrapper2">
  <Box id='FaB2' className='FaB2real'><Typography  className='FaB1txtspb2' ><CountUp end={IntakeFu} duration={0.7}></CountUp></Typography></Box>
  <Typography id="FaBsmtxt2aFu"> Total Intakes</Typography>
  <Typography id="FaBsmtxt2bFu"> Total Intakes As per  the <br /> Selected choice of your <br /> convenience. </Typography>
  <Box id='FaB3'><Typography className='FaB1txtspb2'><CountUp end={EnrollmentFu} duration={0.7}></CountUp></Typography></Box>
  <Typography id="FaBsmtxt3aFu"> Total Enrollments</Typography>
  <Typography id="FaBsmtxt3bFu"> Total Enrollments As per  the <br /> Selected choice of your <br /> convenience. </Typography>
  <Box id='FaB4'><Typography className='FaB1txtspb2'><CountUp end={PlacementFu} duration={0.7}></CountUp></Typography></Box>
  <Typography id="FaBsmtxt4aFu"> Total Placements</Typography>
  <Typography id="FaBsmtxt4bFu"> Total Placements As per  the <br /> Selected choice of your <br /> convenience. </Typography>
</Box>

<hr  style={{color:"#2C4AB4" , marginTop: "125px", }} id='fahr2'/>
<Box> <Typography id="fatypo2">Analysis of Intake, Enrollment and Placement for <span style={{color : "green"}}>{program}</span> program of <span style={{color : "green"}}>{states}</span> State And <span style={{color : "green"}}>{district} </span> District [Branch : <span style={{color : "green"}}>{selected4}</span>]</Typography> </Box>


<Chart id="chart" className="chart1all" options={optionsgh1} series={series} type="line" width={900} height={400}/>

<hr  style={{color:"#2C4AB4" , marginTop: "60px", }} id='fahr2'/>
<Box><Typography id="fatypo2"> Analysis and Comparison of Intake, Enrollment and Placement for <span style={{color : "green"}}>{program}</span> program of <span style={{color : "green"}}>{states}</span> State And <span style={{color : "green"}}>{district} </span> District [Branch : <span style={{color : "green"}}>{selected4}</span>] </Typography> </Box>


<Chart id="chart" className="chartgh2" options={optionsgh2} series={series2} type="line" width={650} height={400}/>

<Chart id="chart" className="chartgh3" options={optionsgh3} series={series3} type="line" width={650} height={400}/>

<hr  style={{color:"#2C4AB4" , marginTop: "490px", }} id='fahr2'/>
<Box> <Typography id="fatypo2">  Analysis and Comparison of Vacancy for <span style={{color : "green"}}>{program}</span> program of <span style={{color : "green"}}>{states}</span> State And <span style={{color : "green"}}>{district} </span> District [Branch : <span style={{color : "green"}}>{selected4}</span>] </Typography> </Box>
<Chart options={optionsgh4} className="vacnt1" series={series4} type="bar" height={350} width={1200} />
<Chart options={optionsgh2cir} className="vacntcri1" series={seriescir} type="radialBar" height={420} width={650} />
<Chart options={optionsgh2cirpri} className="vacntcri2"  series={seriescirpri} type="radialBar"  height={420} width={650} />
<br />

<hr  style={{color:"#2C4AB4" , marginTop: "1000px", }} id='fahr2'/>
{/* <Graph3 /> */}
      </Box>
 
  );
}
