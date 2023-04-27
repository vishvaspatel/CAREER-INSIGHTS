import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from 'react-router-dom';
import ForJobs from "./components/NonAuth/ForJobs"
import ForAdmission from "./components/NonAuth/ForAdmission"
import InstituteAnalysis from "./components/NonAuth/InstituteAnalysis"
import PlacementAnalysis from "./components/NonAuth/PlacementAnalysis"
import Homepage from "./components/Homepage"
import Login from "./components/Auth/Login"
import Enrollmentform from "./components/Auth/Enrollmentform"
import Placementform from "./components/Auth/Placementform"
import ThankspageEnrollment from "./components/Auth/ThankspageEnrollment"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/components/Homepage' element={<Homepage/>}/>
        <Route path="/ForJobs" element={<ForJobs/>}/>
        <Route path='/ForAdmission' element={<ForAdmission/>}/>
        <Route path='/InstituteAnalysis' element={<InstituteAnalysis/>}/>
        <Route path='/PlacementAnalysis' element={<PlacementAnalysis/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Enrollmentform' element={<Enrollmentform/>}/>
        <Route path='/Placementform' element={<Placementform/>}/>
        <Route path='/ThankspageEnrollment' element={<ThankspageEnrollment/>}/>
      </Routes>
      <Footer/>

    
    </div>
  );
}

export default App;
