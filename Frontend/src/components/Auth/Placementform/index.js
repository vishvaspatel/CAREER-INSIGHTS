import React from "react";
import DatamapsIndia from "react-datamaps-india";
import "./style.css";

const MapChart = () => {
  return (
    <>
    <div id="Indiamapdata">
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    <DatamapsIndia 
      regionData={
        {
        Maharashtra: {
          value: 939,
          value2: 205775,
          value3: 129726,
          value4: 63117,
          value5: 134472,
          value6: 59719,
        },
        Rajasthan: {
          value: 199,
          value2: 44456,
          value3: 18646,
          value4: 8755,
          value5: 18808,
          value6: 9671,
        },
        Gujarat: {
          value: 275,
          value2: 65428,
          value3: 36020,
          value4: 13990,
          value5: 35694,
          value6: 13920,
        },
        Karnataka: {
          value: 700
        },
        TamilNadu: {
          value: 190
        },
        Kerala: {
          value: 890
        },
        Karnataka: {
          value: 700
        },
        Kerala: {
          value: 890
        }
      }}
      hoverComponent={({ value }) => {
        return (
          <div>
          <div>      Total Institution :-  {value.value}</div>
            <div> Total Intake of 2021 :- {value.value2}</div>
            <div> Total Enrollment of 2021 :- {value.value3}</div>
            <div>Total Placement of 2021 :- {value.value4}</div>
            <div> Total Enrollment of 2022 :- {value.value5}</div>
            <div> Total Placement of 2022 :-  {value.value6}</div>
          </div>
        );
      }}
      mapLayout={{
        title: "Statewise",
        legendTitle: "Number of Tenders",
        startColor: "#FFDAB9",
        endColor: "#FF6347",
        hoverTitle: "Count",
        noDataColor: "#f5f5f5",
        borderColor: "#8D8D8D",
        hoverBorderColor: "#8D8D8D",
        hoverColor: "green",
        height: 30,
        weight: 70
      }}
    />
    </div>
    </>
  );
};

export default MapChart;
