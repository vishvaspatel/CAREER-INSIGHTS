import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import axios from 'axios';

class Graph1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart:{
          id:"bar"
        },
        stroke: {
          width: [1, 1, 4]
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020' , '2021']
        }
      },
      series: [{
        name: 'Computer Engineering',
        type: 'bar',
        data: []
      }, 
      {
        name: 'Income2',
        type: 'line',
        data: []
      }]
    }
  }

  async componentDidMount(){
    const Intake = [];
    const Enrollment = [];
    await axios.get('https://backendapisih.herokuapp.com/api/v1/india/Gujarat/Engineering/Private/All/All')
    .then(Response => {
      // console.log("Response" , Response.data);
      for(const obj of Response.data)
      {
        // console.log("obj" , obj);
        Intake.push(obj.Intake)
        Enrollment.push(obj.Enrollment)
      }
      // console.log("intake" , Intake);
      this.setState({
        options: {
          chart:{
            id:"line"
          },
        },
        series: [{
          name: 'Intake',
          type: 'bar',
          data:  Intake , 
        },  {
          name: 'Enrollment',
          type: 'bar',
          data:  Enrollment , 
        },   {
          name: 'Placement',
          type: 'bar',
          data:  Enrollment , 
        }, 
      ],

      })
    })
    .catch(err=>{
      // console.log("err" , err)
    })
  } 

  render() {

    return (
      <div className="line">
        <Chart options={this.state.options} series={this.state.series} type="line" height="400px"  width="900" />
      </div>
    );
  }
}

export default Graph1;