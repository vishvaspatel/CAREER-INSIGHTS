import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from "axios";
import "./style.css"

export default function MultipleSelectChip() {

  const [selected, setSelected] = React.useState("");
  const [selected2, setSelected2] = React.useState("");
  const [selected3, setSelected3] = React.useState("");
  const [selected4, setSelected4] = React.useState("");
  const [skill1 , setSkill1] =  React.useState("");
  const [skill2 , setSkill2] =  React.useState("");
  const [skill3 , setSkill3] =  React.useState("");
  const [skill4 , setSkill4] =  React.useState("");
  const [skill5 , setSkill5] =  React.useState("");
  const [skill6 , setSkill6] =  React.useState("");
  const [skill7 , setSkill7] =  React.useState("");
  const [skill8 , setSkill8] =  React.useState("");
  const [skill9 , setSkill9] =  React.useState("");
  const [skill10 , setSkill10] =  React.useState("");

  const [skill11 , setSkill11] =  React.useState("");
  const [skill12 , setSkill12] =  React.useState("");
  const [skill13 , setSkill13] =  React.useState("");
  const [skill14 , setSkill14] =  React.useState("");
  const [skill15 , setSkill15] =  React.useState("");
  const [skill16 , setSkill16] =  React.useState("");
  const [skill17 , setSkill17] =  React.useState("");
  const [skill18 , setSkill18] =  React.useState("");
  const [skill19 , setSkill19] =  React.useState("");
  const [skill20 , setSkill20] =  React.useState("");

  const [states, setStates] = useState("All");
  const [program, setProgram2] = useState("Engineering");
  const [district, setDistrict] = useState("All");
  const [Branch, setBranch] = useState("All");



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




const GujaratCEbranch = [
    <option value="Data Analyst">Data Analyst</option> ,
    <option value="Data Scientist">Data Scientist</option> ,
    <option value="PHP Developer">PHP Developer</option> ,
    <option value="Android Developer">Android Developer</option> ,
    <option value="Application Developer">Application Developer</option> ,
    <option value="Database Administrator">Database Administrator</option> ,
    <option value="Frontend Developer">Frontend Developer</option> ,
    <option value="Graphic Designer">Graphic Designer</option> ,
    <option value="Information Technology Manager">Information Technology Manager</option> ,
    <option value="iOS Developer">iOS Developer</option> ,
    <option value="Java Software Engineer">Java Software Engineer</option> ,
    <option value="Network Engineer">Network Engineer</option> ,
    <option value="Oracle Database Administrator">Oracle Database Administrator</option> ,
    <option value="Software Analyst">Software Analyst</option> ,
    <option value="Software Engineer">Software Engineer</option> ,
    <option value="Software Test">Software Test</option> ,
    <option value="Support Engineer">Support Engineer</option> ,
    <option value="System Engineer">System Engineer</option> ,
    <option value="Web Designer">Web Designer</option> ,
    <option value="Web Developer">Web Developer</option> ,
]
const Gujaratchebranch= [
    <option value="Process Engineer">Process Engineer</option> ,
]
const GujaratCIbranch= [
    <option value="Civil Engineer">Civil Engineer</option> ,
]
const GujaratBAbranch = [
    <option value="Architect Architect">Architect</option> ,
]
const GujaratBAphbranch = [
  <option value="Clinical Pharmacist">Clinical Pharmacist</option> ,
  <option value="Pharmacist">Pharmacist</option> ,
  <option value="Pharmacy Manager">Pharmacy Manager</option> ,
  <option value="Pharmacy Specialist">Pharmacy Specialist</option> ,
  <option value="Pharmacy Technician">Pharmacy Technician</option> 
]

  const Gujarateng = [
    <option value="B. Arch">B. Arch</option> ,
    <option value="Chemical Engineering">Chemical Engineering</option> ,
    <option value="Civil Engineering">Civil Engineering</option> ,
    <option value="Computer Engineering">Computer Engineering</option> ,
    <option value="Electrical Engineering">Electrical Engineering</option> ,
    <option value="Mechanical Engineering">Mechanical Engineering</option> 
  ];
  const Gujaratmanage = [
    <option value="HR Management">HR Management</option>,
    <option value="Mba in Business Analytics">Mba in Business Analytics</option>,
    <option value="Mba in Engineering Management">Mba in Engineering Management</option>,
    <option value="Mba in Finance">Mba in Finance</option>,
    <option value="Mba in Logistics and Supply Chain Management">Mba in Logistics and Supply Chain Management</option>,
    <option value="Mba in Management Information Systems">Mba in Management Information Systems</option>,
    <option value="Mba in Sales and marketing">Mba in Sales and marketing</option>,
    <option value="Other Management">Other Management</option>
  ];
  const Gujaratpharma = [
   <option value="B.pharm">B.pharm </option>
  ];

const GujaratElbranch= [
  <option value="Electrical Engineer">Electrical Engineer</option> 
];
const GujaratMAMbabranch = [
<option value="Business Analyst">Business Analyst</option> ,
<option value="Business Development Manager">Business Development Manager</option> ,
<option value="Business Manager">Business Manager</option> 
];
const GujaratHRbranch= [
<option value="Human Resources Manager">Human Resources Manager</option>, 
];
const GujaratMembranch = [
<option value="Accountant">Accountant</option> ,
<option value="Credit Manager">Credit Manager</option> ,
<option value="Finance Manager">Finance Manager</option> ,
<option value="Key Account Manager">Key Account Manager</option> 
];
const GujaratMfbranch = [
<option value="Accountant">Account Manager</option> ,
<option value="Credit Manager"> Accountant</option> ,
<option value="Finance Manager">Credit Manager</option> ,
<option value="Key Account Manager">Account Finance Manager</option> ,
<option value="Key Account Manager"> Account Key Account Manager</option> 
];
const GujaratBALSbranch = [

<option value="  Delivery Manager">  Delivery Manager </option> ,
<option value="  Operations Manager">   Operations Manager</option> ,
<option value="  Product Manager">   Product Manager</option> ,
<option value="  Production Manager">   Production Manager</option> ,
<option value="  Purchasing Manager">   Purchasing Manager</option> ,
<option value="  Quality Assurance Manager">   Quality Assurance Manager</option> ,
<option value="  Relationship Manager">   Relationship Manager</option> ,
<option value="  Service Manager">   Service Manager</option> ,
<option value="  Service Project Manager">   Service Project Manager</option> ,
  
];
const Gujaratmisbranch = [
  <option value="Technical Manager">Technical Manager</option> ,
];
const Gujaratsmbranch = [
  <option value="Customer Service Manager">Customer Service Manager</option> ,
  <option value="Digital Marketing Manager">Digital Marketing Manager</option> ,
  <option value="Marketing Manager">Marketing Manager</option> ,
  <option value="Sales Manager">Sales Manager</option> ,
  <option value="Store Manager">Store Manager</option> ,
  <option value="Territory Sales Manager">Territory Sales Manager</option> ,
];
const Gujaratmebranch = [
  <option value="Automation Engineer">Automation Engineer</option> ,
  <option value="Maintenance Engineer">Maintenance Engineer</option> ,
  <option value="Mechanical Design Engineer">Mechanical Design Engineer</option> ,
  <option value="Mechanical Engineer">Mechanical Engineer</option> ,
];
const Gujaratombranch = [
  <option value="Administrative Manager">Administrative Manager</option> ,
  <option value="General Manager">General Manager</option> ,
  <option value="Program Manager">Program Manager</option> ,
  <option value="Project Manager">Project Manager</option> ,
];

 

  let type = null;
  let type2 = null;
  let options = null;
  let options2 = null;


  if ( selected === "Engineering" ) {
    type = Gujarateng;
  } else if (selected === "Pharmacy"){
    type = Gujaratpharma;
  } else if (selected === "Management"){
    type = Gujaratmanage;
  }

if(selected === "Chemical Engineering" ){
  type2 = Gujaratchebranch;
}else if(selected === "Computer Engineering"){
type2 = GujaratCEbranch;
}
else if( selected === "B. Arch"){
type2 = GujaratBAbranch;
}
else if(selected === "B.pharm"){
type2 = GujaratBAphbranch;
}
else if(selected === "Civil Engineering"){
type2 = GujaratCIbranch;
}
else if(selected === "Electrical Engineering"){
type2 = GujaratElbranch;
}
else if( selected === "HR Management"){
type2 = GujaratHRbranch;
}
else if( selected === "Mba in Business Analytics"){
type2 = GujaratMAMbabranch;
}
else if( selected === "Mba in Engineering Management"){
type2 = GujaratMembranch;
}
else if( selected === "Mba in Finance"){
type2 = GujaratMfbranch;
}
else if( selected === "Mba in Logistics and Supply Chain Management"){
type2 = GujaratBALSbranch;
}
else if( selected === "Mba in Management Information Systems"){
type2 = Gujaratmisbranch;
}
else if( selected === "Mba in Sales and marketing"){
type2 = Gujaratsmbranch;
}
else if(selected === "Mechanical Engineering"){
type2 = Gujaratmebranch;
}
else if(  selected === "Other Management"){
  type2 = Gujaratombranch;
  }
else
{
  type2 = Gujaratpharma;
}


  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>); 
  }
  if (type2) {
    options2 = type2.map((el) => <option key={el}>{el}</option>); 
  }

  useEffect(() => {
    async function getData(){
     
      var arr2015 =[]
      var arr2021 =[]
      var res1 = await axios.get(`http://127.0.0.1:9000/api/v1/linkdin/${selected}/${selected4}/2015`);
   
      for(let i=0;i<10;i++)
      {
        arr2015[i]=res1.data[i].Skill;
      }
      setSkill1(arr2015[0]);
      setSkill2(arr2015[1]);
      setSkill3(arr2015[2]);
      setSkill4(arr2015[3]);
      setSkill5(arr2015[4]);
      setSkill6(arr2015[5]);
      setSkill7(arr2015[6]);
      setSkill8(arr2015[7]);
      setSkill9(arr2015[8]);
      setSkill10(arr2015[9]);

console.log("haa" , setSkill1)
      
      
  console.log(arr2015)  
    
     
    var res2 = await axios.get(`http://127.0.0.1:9000/api/v1/linkdin/${selected}/${selected4}/2021`);
    for(let i=0;i<10;i++)
    {
      arr2021[i]=res2.data[i].Skill;
    }
    // setSkill2(arr2021)

    setSkill11(arr2021[0]);
    setSkill12(arr2021[1]);
    setSkill13(arr2021[2]);
    setSkill14(arr2021[3]);
    setSkill15(arr2021[4]);
    setSkill16(arr2021[5]);
    setSkill17(arr2021[6]);
    setSkill18(arr2021[7]);
    setSkill19(arr2021[8]);
    setSkill20(arr2021[9]);

      
      
    
    }
    getData();
   }, [selected , selected4] );



  return (
    
      <Box >
        <Typography id="fjboxtitle" style={{fontfamily : 'Poppins' , textAlign : 'center' , marginTop : "100px"}}>
       Trending skills for inclusion in upcoming syllabus upgradation
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
        <label id='fjd1text2'>Select Branch</label>
          <select
          id='fjd2SU'
          value={states}
          onChange={ (event) => {
          setSelected(event.target.value); setStates(event.target.value);
  }}>
            <option>B. Arch</option>
            <option>B.pharm</option>
            <option>Chemical Engineering</option>
            <option>Civil Engineering</option>
            <option>Computer Engineering</option>
            <option>Electrical Engineering</option>
            <option>HR Management</option>
            <option>Mba in Business Analytics</option>
            <option>Mba in Engineering Management</option>
            <option>Mba in Finance</option>
            <option>Mba in Logistics and Supply Chain Management</option>
            <option>Mba in Management Information Systems</option>
            <option>Mba in Sales and marketing</option>
            <option>Mechanical Engineering</option>
            <option>Other Management</option>
          </select>
        </div>
        <div>
           <label id='fjd1text4SU'>Select Job Field</label>
        <select
        id='fjd4SU'
          value={Branch}
          onChange={ (event) => {  setSelected4(event.target.value);  setBranch(event.target.value);}} > 
          
            {
              options2
            }
          </select>
        </div>
        <div>
       
  
        </div>
      </form>
<br />

<Typography id="skillUGtxt">Demanded Skills of 2015 </Typography><div className="vl"></div>
      <Box id="skill1UG"> 
     {skill1}
    </Box>  <br />
      <Box id="skill1UG">
       {skill2} 
      </Box> <br />
      <Box id="skill1UG"> 
     {skill3}
    </Box>  <br />
      <Box id="skill1UG">
       {skill4} 
      </Box> <br />
      <Box id="skill1UG"> 
     {skill5}
    </Box>  <br />
      <Box id="skill1UG">
       {skill6} 
      </Box> <br />
      <Box id="skill1UG"> 
     {skill7}
    </Box>  <br />
      <Box id="skill1UG"> 
     {skill8}
    </Box>  <br />
      <Box id="skill1UG"> 
     {skill9}
    </Box>  <br />
      <Box id="skill1UG"> 
     {skill10}
    </Box>  <br />
      
    </div>
<hr style={{marginTop : "-615px" }} />
<Box style={{marginLeft : "120px"}}>
<Typography  id="skillUGtxt2">Demanding Skills of 2021</Typography>
<Box id="skill1UG1"> 
     {skill11}
    </Box>  <br />
      <Box id="skill1UG1">
       {skill12} 
      </Box> <br />
      <Box id="skill1UG1"> 
     {skill13}
    </Box>  <br />
      <Box id="skill1UG1">
       {skill14} 
      </Box> <br />
      <Box id="skill1UG1"> 
     {skill15}
    </Box>  <br />
      <Box id="skill1UG1"> 
     {skill16}
    </Box>  <br />
      <Box id="skill1UG1">
       {skill17} 
      </Box> <br />
      <Box id="skill1UG1"> 
     {skill18}
    </Box>  <br />
      <Box id="skill1UG1"> 
     {skill19}
    </Box>  <br />
      <Box id="skill1UG1"> 
     {skill20}
    </Box>  <br />
    </Box>
   
{/* <Graph3 /> */}
      </Box>
 
  );
}
