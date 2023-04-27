import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from 'react-apexcharts';
import "./style.css"
const ComA = () => {
  const [programsh, setProgramsh] = useState("");
  const [branch, setBranch] = useState("All");
  const [selected2, setSelected2] = React.useState("Agriculture");
  const [selected3, setSelected3] = React.useState("All");

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
  const [ optionsgh4 , setObject4] = useState({
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
  
  const [series4 , setSeries4] = useState([{
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
      text: [`All over Trend of  ${selected2} (Branch: ${selected3})`],
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '14px',
        fontWeight:  'semibold',
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
      text: `Girls Trend of  ${selected2} (Branch: ${selected3})`,
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '14px',
        fontWeight:  'semibold',
        fontFamily:  undefined,
        color:  '#263238'
      },
  }
  })
  
  const [series3 , setSeries3] = useState([{
    name: "Intake",
    data:[]
  }])

  // const [ optionsgh5 , setObject5] = useState({
  //          chart: {
  //            width: 680,
  //            type: 'pie',
  //          },
  //          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  //          plotOptions: {
  //           pie : {
  //             offsetX: 50,
  //              offsetY:0,
  //  width : 500
  //           },
  //          },
  //          legend: {
  //           show: true,
  //           floating: true,
  //           fontSize: '16px',
  //           position: 'left',
  //           offsetX: 405,
  //           offsetY: 0,
  //           labels: {
  //             useSeriesColors: true,
  //           },
  //           markers: {
  //             size: 1
  //           },
  //           formatter: function(seriesName, opts) {
  //             return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
  //           },
  //           itemMargin: {
  //             vertical: 0.1
  //           }
  //         },
     
       
  //      })
   
  //      const [series5 , setSeries5] = useState(
  //       [
  //         76, 67, 61, 90 , 50 
  //       ]
  //      )

  
  
  let type = null;
  let options = null;



  const ProgramEng = [
    <option  selected value="Aeronautical Engineering">Aeronautical Engineering</option>,
    <option  value="Agriculture Engineering">Agriculture Engineering</option>,
    <option  value="Architecture Engineering">Architecture Engineering</option>,
    <option  value="Chemical Engineering">Chemical Engineering</option>,
    <option  value="Civil Engineering">Civil Engineering</option>,
    <option  value="Computer Engineering">Computer Engineering</option>,
    <option  value="Dairy Technology">Dairy Technology</option>,
    <option  value="Electrical Engineering">Electrical Engineering</option>,
    <option  value="Electronics Engineering">Electronics Engineering</option>,
    <option  value="Food Technology Engineering">Food Technology</option>,
    <option  value="Information Technology Engineering">Information Technology</option>,
    <option  value="Marine Engineering Engineering">Marine Engineering</option>,
    <option  value="Mechanical Engineering">Mechanical Engineering</option>,
    <option  value="Metallurgical Engineering">Metallurgical Engineering</option>,
    <option  value="Mining Engineering">Mining Engineering</option>,
    <option  value="Other Engineering">Other Engineering & Technology</option>,
    <option  value="Planning Engineering">Planning</option>,
 
   ];
   const ProgramOther = [
    <option value="All">All</option>,
   ];


  if (selected2 === "Engineering" ) {
    type = ProgramEng;
  }
  else{
    type = ProgramOther
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>); 
  }

  useEffect(() =>{
    const trend = [];
    async function getData(){
  
    // console.log(resgh2.data.Intake , resgh2.data.Placement , resgh2.data.total_enrollment)
    axios.get(`http://127.0.0.1:9000/api/v1/trend/${selected2}/${selected3}/Total/SSC`).then(responseFu => {
      responseFu.data.map(item =>{
         for(let i=2009 ;i<=2019;i++)
         {
            trend.push(item[i].toFixed(3))
         }
      }) 
     
      setObject2(
        {
          Chart:{
            id : "apexchart-example"
          },
          xaxis : {
            categories :  [ 2009 , 2010 , 2011 , 2012 , 2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 ]
          },
          title: {
            text: `All over Trend of  ${selected2} (Branch: ${selected3})`,
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  'semibold',
              fontFamily:  undefined,
              color:  '#263238'
            },
        }
        }
       )
       setSeries2([{
        name: "Trend",
        data:  trend,
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
  }, [selected2 , selected3])
  
  useEffect(() =>{
    const Girls_trend = [];
    async function getData(){

      // console.log(resgh2.data.Intake , resgh2.data.Placement , resgh2.data.total_enrollment)
      axios.get(`http://127.0.0.1:9000/api/v1/trend/${selected2}/${selected3}/Girls/SSC`).then(responseFu => {
        responseFu.data.map(item =>{
           for(let i=2009 ;i<=2019;i++)
           {
            Girls_trend.push(item[i].toFixed(3))
           }
        }) 
       
        setObject3(
          {
            Chart:{
              id : "apexchart-example"
            },
            xaxis : {
              categories :  [ 2009 , 2010 , 2011 , 2012 , 2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 ]
            },
            title: {
              text: `Girl's Trend of  ${selected2} (Branch: ${selected3})`,
              align: 'center',
              margin: 10,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize:  '14px',
                fontWeight:  'semibold',
                fontFamily:  undefined,
                color:  '#263238'
              },
          }
          }
         )
         setSeries3([{
          name: "Trend",
          data:  Girls_trend,
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
  }, [selected2 , selected3])
  
  
 

  useEffect(() =>{
    
    const Yeargh1 = [ 2009 , 2010 , 2011 , 2012 , 2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 ];
const shsscArr1 = [];
const shsscArr2 = [];
const shsscArr3 = [];
   
      if (selected2 === "Arts_Social_Sciences" ){
        var hsc_type = "HSC Arts"
    }else if(selected2 === "Commerce" || selected2 === "Management" || selected2 === "Law"){
      var hsc_type = "HSC Commerse"
    }else{
      var hsc_type = "HSC SCI"
    }
    async function getData(){
      const Shssc1 = await axios.get(`http://127.0.0.1:9000/api/v1/ssc_hsc/SSC/All/Total`); 
      const Shssc2 = await axios.get(`http://127.0.0.1:9000/api/v1/ssc_hsc/${hsc_type}/All/Total`);
     const Shssc3 = await axios.get(`http://127.0.0.1:9000/api/v1/ssc_hsc/${selected2}/${selected3}/Total`);
     console.log("h" ,Shssc3 )
     console.log("selected" ,selected2)
     Shssc1.data.map(item =>{
      // console.log("in" , item[2009] )
      for(let i=2009; i<=2019;i++)
      {
       shsscArr1.push( item[i]);
       console.log("infor" , item[i] )
      }
   })
     Shssc2.data.map(item =>{
      for(let i=2009;i<=2019;i++)
      {
       shsscArr2.push( item[i]);
      }
   })
     Shssc3.data.map(item =>{
      for(let i=2009;i<=2019;i++)
      {
       shsscArr3.push( item[i]);
      }
      console.log("vk's edit",item);
   })

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
   setSeries([{
    name: "SSC Passout",
    data: shsscArr1 ,
    type: 'bar'
  },
  // {
  //   name: "HSC Passout",
  //   data: shsscArr2 ,
  //   type: 'bar',
  // },
  {
    name: `Enrollment in ${selected2} (Branch: ${selected3})`,
    data: shsscArr3 ,
    type: 'bar',
  }
]
   )

    }
    
    getData();
  
  }, [selected2 , selected3] )

  useEffect(() =>{
    
    const Yeargh1 = [ 2009 , 2010 , 2011 , 2012 , 2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 ];
const shsscArr1 = [];
const shsscArr2 = [];
const shsscArr3 = [];
   
      if (selected2 === "Arts_Social_Sciences" ){
        var hsc_type = "HSC Arts"
    }else if(selected2 === "Commerce" || selected2 === "Management" || selected2 === "Law"){
      var hsc_type = "HSC Commerse"
    }else{
      var hsc_type = "HSC SCI"
    }
    async function getData(){
      const Shssc1 = await axios.get(`http://127.0.0.1:9000/api/v1/ssc_hsc/SSC/All/Girls`); 
      const Shssc2 = await axios.get(`http://127.0.0.1:9000/api/v1/ssc_hsc/${hsc_type}/All/Girls`);
     const Shssc3 = await axios.get(`http://127.0.0.1:9000/api/v1/ssc_hsc/${selected2}/${selected3}/Girls`);
     console.log("h" ,Shssc3 )
     console.log("selected" ,selected2)
     Shssc1.data.map(item =>{
      // console.log("in" , item[2009] )
      for(let i=2009; i<=2019;i++)
      {
       shsscArr1.push( item[i]);
       console.log("infor" , item[i] )
      }
   })
     Shssc2.data.map(item =>{
      for(let i=2009;i<=2019;i++)
      {
       shsscArr2.push( item[i]);
      }
   })
     Shssc3.data.map(item =>{
      for(let i=2009;i<=2019;i++)
      {
       shsscArr3.push( item[i]);
      }
      console.log("vk's edit",item);
   })

   setObject4(
    {
      Chart:{
        id : "apexchart-example"
      },
      xaxis : {
        categories : Yeargh1
      }
    }
   )
   setSeries4([{
    name: "SSC Passout",
    data: shsscArr1 ,
    type: 'bar'
  },
  // {
  //   name: "HSC Passout",
  //   data: shsscArr2 ,
  //   type: 'bar',
  // },
  {
    name: `Enrollment in ${selected2} (Branch: ${selected3})`,
    data: shsscArr3 ,
    type: 'bar',
  }
]
   )

    }
    
    getData();
  
  }, [selected2 , selected3] )


  return (
    <>
    <div style={{marginTop : "240px"}}>
          <h3 id="headingT" style={{color: "black" , marginLeft : "40px" }}>Trend Of Graduation For Different Programs After SSC</h3>
<form>
      <label id='fjd1text1T'>Select Program</label>
        <select id='fjd1T'  onChange={ (event) => { setSelected2(event.target.value);  setProgramsh(event.target.value);}}>
        <option value="Agriculture">Agriculture</option> ,
    <option value="Arts/Social Sciences">Arts/Social Sciences</option> ,
    <option value="Commerce">Commerce</option> ,
    <option value="Education">Education</option> ,
    <option value="Engineering">Engineering</option> ,
    <option value="IT computer">IT & Computer</option> ,
    <option value="Law">Law</option> ,
    <option value="Management">Management</option> ,
    <option value="Medical Science">Medical Science</option> ,
    <option value="Pharmacy">Pharmacy</option> ,
    <option value="Science">Science</option> ,
    <option value="Other">Other</option> 
        </select>
        </form>
        <label id='fjd1text3T'>Select branch</label>
        <select
        id='fjd3T'
          value={branch}
          onChange={ (event) => {  setSelected3(event.target.value);  setBranch(event.target.value);}} > 
          
            {
              options
            }
          </select>
<br />
          <hr />
          
          <Chart id="chart" className="chartgh3sh1" options={optionsgh3} series={series3} type="line" width={650} height={400}/>
          <Chart id="chart" className="chartgh2sh2" options={optionsgh2} series={series2} type="line" width={650} height={400}/>
          
       <br />
       <hr  id="hrTsshs"/>
       {/* <h4  id="hedingTT" style={{marginLeft: "20px"}}>Statics Of Graduation For Different Programs After SSC</h4> */}
          <Chart id="chart" className="chart1allsh3" options={optionsgh1} series={series} type="line" width={900} height={400}/>
          <hr  id="hrTsshs2"/>
          <Chart id="chart" className="chart1allsh4" options={optionsgh4} series={series4} type="line" width={900} height={400}/>

          {/* <Chart  id="chart"  className="chart1allsh5" options = {optionsgh5} series={series5} type="pie" width={380}  height={300}/> */}
</div>
      <br />
    </>
  );
};


export default ComA;
