import React from "react";
import DatamapsIndia from "react-datamaps-india";
import "./style.css";

const MapChart = () => {
  return (
    <>
    <div id="Indiamapdata">
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />  <br />
    <DatamapsIndia 
      regionData={{
        Maharashtra: {
          value: 100,
          value2: 110,
          value3: 110,
          value4: 110,
          value5: 110,
          value6: 110,
          value7: 110
        },
        Rajasthan: {
          value: 1000
        },
        Gujarat: {
          value: 800
        },
        Karnataka: {
          value: 700
        },
        TamilNadu: {
          value: 190
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
            <div> Total Placement of 2021 :- {value.value5}</div>
            <div> Total Enrollment of 2022 :- {value.value6}</div>
            <div> Total Placement of 2022 :-  {value.value7}</div>
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
