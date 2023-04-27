import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./style.css"
import Logo1 from "../../assets/logo.svg";
import CardMedia from '@mui/material/CardMedia';

export default function Navbar() {
  return (
    <>
  

<nav class="navbar fixed-top  navbar-expand-lg navbar-light bg-light" id="nav">
<div class="container-fluid">
<Link to="/" className="site-title">
        
        <CardMedia
          component="img"
          height="65"
          image={Logo1}
          alt="Career Insights"
          className='mainlogo1'
        />
        Career Insights
        </Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <CustomLink to="/ForJobs">Job Trend Analysis </CustomLink>
        <CustomLink to="/ForAdmission">Admissions and Placement Analysis</CustomLink>
        <CustomLink to="/PlacementAnalysis">Program trend after SSC</CustomLink>
        <CustomLink to="/InstituteAnalysis">State wise Map</CustomLink>
        <CustomLink to="/Login">Syllabus Upgradation</CustomLink>
    
    </ul>
  </div>
</div>
</nav>
</>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}