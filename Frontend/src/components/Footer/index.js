import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import "./style.css"

export default function App() {
  return (
    <MDBFooter bgColor='black' id='footer' className='text-center text-lg-start text-muted'><br />

      <section className='' >
        <MDBContainer className='text-center text-md-start mt-5' id='footer'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" id='footertexta'/>
                Career Insights
              </h6>
              <p id='footertextb'>
              Data of UG’s and PG’s selecting their career options is not available in AICTE portal Hence,our portal has a mechanism to collect such information for a particular institute
              </p>
            </MDBCol>

            <MDBCol md="2" lg="" xl="4" className='mx-auto mb-4' id='footerl1'>
              <h6 className='text-uppercase fw-bold mb-4'>Importants Links</h6>
              <p> <a href='#!' className='text-reset'>  Job Trend  Analysis  </a> </p>
              <p> <a href='#!' className='text-reset'>  Admission Trend Analysis  </a> </p>
              <p> <a href='#!' className='text-reset'>  Placement Trend Analysis  </a> </p>
              <p> <a href='#!' className='text-reset'>  Institute  Analysis  </a> </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' id='footerl2'>
              <h6 className='text-uppercase fw-bold mb-4'>Importants Links</h6>
              <p>  <a href='#!' className='text-reset'>  AICTE  </a> </p>
              <p>  <a href='#!' className='text-reset'>  Career 360°  </a> </p>
              <p>  <a href='#!' className='text-reset'>  Google Trends   </a> </p>
              <p>  <a href='#!' className='text-reset'>  Linkdin  </a> </p>

            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-2' id='footerl3'>
                <p style={{ fontWeight : "600" , textTransform : "uppercase"}}>   Authenticated User</p>
            <Button variant="contained" style={{backgroundColor : "white" , color : "black" , width : "120px" , fontWeight : "800" , textTransform : "capitalize"}}>Login</Button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='#'>
          Tech Matrix
        </a>
      </div>
    </MDBFooter>
  );
}