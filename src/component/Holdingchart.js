import React from 'react'
import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import addTreemapModule from "highcharts/modules/treemap";

addTreemapModule(Highcharts);

function Holdingchart() {


    let chartop = [
        {
          id: "A",
          name: "Nord-Norge",
          color: "#50FFB1",
        },
        {
          id: "B",
          name: "Trøndelag",
          color: "#F5FBEF",
        },
        {
          id: "C",
          name: "Vestlandet",
          color: "#A09FA8",
        },
        {
          id: "D",
          name: "Østlandet",
          color: "#E7ECEF",
        },
        {
          id: "E",
          name: "Sørlandet",
          color: "#A9B4C2",
        },
        {
          name: "Troms og Finnmark",
          parent: "A",
          value: 70923,
        },
        {
          name: "Nordland",
          parent: "A",
          value: 35759,
        },
        {
          name: "Trøndelag",
          parent: "B",
          value: 39494,
        },
        {
          name: "Møre og Romsdal",
          parent: "C",
          value: 13840,
        },
        {
          name: "Vestland",
          parent: "C",
          value: 31969,
        },
        {
          name: "Rogaland",
          parent: "C",
          value: 8576,
        },
        {
          name: "Viken",
          parent: "D",
          value: 22768,
        },
        {
          name: "Innlandet",
          parent: "D",
          value: 49391,
        },
        {
          name: "Oslo",
          parent: "D",
          value: 454,
        },
        {
          name: "Vestfold og Telemark",
          parent: "D",
          value: 15925,
        },
        {
          name: "Agder",
          parent: "E",
          value: 14981,
        },
      ];
    
      let chartOptions = {
        chart: {
          height: "75 px",
        },
        tooltip: {
          style: {
            color: "white",
            fontWeight: "bold",
            backgroundColor: "#000000",
          },
        },
    
        credits: {
          enabled: false,
        },
    
        series: [
          {
            type: "treemap",
            borderWidth: 0,
            layoutAlgorithm: "strip",
            dataLabels: {
              enabled: false,
            },
            data: chartop,
            tooltip: {
              valueDecimals: 2,
              useHTML: true,
              pointFormat: "{point.name}<br> ₹ {point.label} ",
            },
          },
        ],
        title: {
          text: "",
          align: "left",
        },
      };
    


  return (
    <>
      <HighchartsReact
              containerProps={{ style: { width: "100%" } }}
              highcharts={Highcharts}
              options={chartOptions}
            />
            <div className="float-end">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  className="label form-check-label"
                  htmlFor="inlineRadio1"
                >
                  Current
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="label form-check-label"
                  htmlFor="inlineRadio2"
                >
                  Invested
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label
                  className="label form-check-label"
                  htmlFor="inlineRadio3"
                >
                  P&L
                </label>
              </div>
            </div>
          </>
  )
}

export default Holdingchart