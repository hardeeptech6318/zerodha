import React,{useEffect, useState} from 'react'
import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import addTreemapModule from "highcharts/modules/treemap";

addTreemapModule(Highcharts);

function Holdingchart() {

  const [chartdata, setchartdata] = useState([]);
  

  let color=['#440154','#481467','#482576','#453781','#404688','#39558c','#33638d','#2d718e','#287d8e','#238a8d','#1f968b','#20a386','#29af7f','#3dbc74','#56c667','#75d054','#95d840','#bade28','#dde318','#fde725']

    let data=  [
      {
          "tradingsymbol": "A2ZINFRA",
          "exchange": "NSE",
          "instrument_token": 5351937,
          "isin": "INE619I01012",
          "product": "CNC",
          "price": 0,
          "quantity": 11,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 11,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 11,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 7.81,
          "last_price": 6.6,
          "close_price": 6.6,
          "pnl": -13.309999999999999,
          "day_change": 0,
          "day_change_percentage": 0
      },
      {
          "tradingsymbol": "AAL",
          "exchange": "BSE",
          "instrument_token": 138755076,
          "isin": "INE911Z01017",
          "product": "CNC",
          "price": 0,
          "quantity": 1,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 1,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 1,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 336.1,
          "last_price": 368,
          "close_price": 356.1,
          "pnl": 31.899999999999977,
          "day_change": 11.899999999999977,
          "day_change_percentage": 3.341757933164835
      },
      {
          "tradingsymbol": "ADANIENT",
          "exchange": "NSE",
          "instrument_token": 6401,
          "isin": "INE423A01024",
          "product": "CNC",
          "price": 0,
          "quantity": 3,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 3,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 3,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 1419,
          "last_price": 2633.7,
          "close_price": 2326.1,
          "pnl": 3644.0999999999995,
          "day_change": 307.5999999999999,
          "day_change_percentage": 13.223851081208887
      },
      {
          "tradingsymbol": "AMBUJACEM",
          "exchange": "NSE",
          "instrument_token": 325121,
          "isin": "INE079A01024",
          "product": "CNC",
          "price": 0,
          "quantity": 10,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 10,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 10,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 399.6,
          "last_price": 427.3,
          "close_price": 423.9,
          "pnl": 276.9999999999999,
          "day_change": 3.400000000000034,
          "day_change_percentage": 0.8020759613116382
      },
      {
          "tradingsymbol": "APOLLOHOSP",
          "exchange": "BSE",
          "instrument_token": 130270468,
          "isin": "INE437A01024",
          "product": "CNC",
          "price": 0,
          "quantity": 1,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 1,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 1,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 3989.95,
          "last_price": 4551.55,
          "close_price": 4610.4,
          "pnl": 561.6000000000004,
          "day_change": -58.849999999999454,
          "day_change_percentage": -1.276461912198496
      },
      {
          "tradingsymbol": "BAGFILMS",
          "exchange": "BSE",
          "instrument_token": 136321796,
          "isin": "INE116D01028",
          "product": "CNC",
          "price": 0,
          "quantity": 1,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 1,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 1,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 4.5,
          "last_price": 4.1,
          "close_price": 4.21,
          "pnl": -0.40000000000000036,
          "day_change": -0.11000000000000032,
          "day_change_percentage": -2.6128266033254235
      },
      {
          "tradingsymbol": "GOLDBEES",
          "exchange": "BSE",
          "instrument_token": 151064324,
          "isin": "INF204KB17I5",
          "product": "CNC",
          "price": 0,
          "quantity": 1,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 1,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 1,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 47.62,
          "last_price": 51.44,
          "close_price": 51.99,
          "pnl": 3.8200000000000003,
          "day_change": -0.5500000000000043,
          "day_change_percentage": -1.0578957491825434
      },
      {
          "tradingsymbol": "IDEA",
          "exchange": "BSE",
          "instrument_token": 136402436,
          "isin": "INE669E01016",
          "product": "CNC",
          "price": 0,
          "quantity": 32,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 32,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 32,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 6.997187,
          "last_price": 6.98,
          "close_price": 7.02,
          "pnl": -0.5499839999999949,
          "day_change": -0.03999999999999915,
          "day_change_percentage": -0.5698005698005577
      },
      {
          "tradingsymbol": "IRFC",
          "exchange": "BSE",
          "instrument_token": 139073796,
          "isin": "INE053F01010",
          "product": "CNC",
          "price": 0,
          "quantity": 1,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 1,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 1,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 28.8,
          "last_price": 33.33,
          "close_price": 33.37,
          "pnl": 4.529999999999998,
          "day_change": -0.03999999999999915,
          "day_change_percentage": -0.11986814504045294
      },
      {
          "tradingsymbol": "LTIM",
          "exchange": "BSE",
          "instrument_token": 138241284,
          "isin": "INE214T01019",
          "product": "CNC",
          "price": 0,
          "quantity": 1,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 1,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 1,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 4393.85,
          "last_price": 4857.25,
          "close_price": 4991.85,
          "pnl": 463.39999999999964,
          "day_change": -134.60000000000036,
          "day_change_percentage": -2.6963951240522124
      },
      {
          "tradingsymbol": "NMDC",
          "exchange": "BSE",
          "instrument_token": 134750980,
          "isin": "INE584A01023",
          "product": "CNC",
          "price": 0,
          "quantity": 25,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 25,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 25,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 74.61437,
          "last_price": 105.8,
          "close_price": 105.15,
          "pnl": 779.64075,
          "day_change": 0.6499999999999915,
          "day_change_percentage": 0.6181645268663732
      },
      {
          "tradingsymbol": "NSLNISP",
          "exchange": "BSE",
          "instrument_token": 139204612,
          "isin": "INE0NNS01018",
          "product": "CNC",
          "price": 0,
          "quantity": 25,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 25,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 25,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 100.08563,
          "last_price": 38.07,
          "close_price": 37.88,
          "pnl": -1550.3907499999998,
          "day_change": 0.18999999999999773,
          "day_change_percentage": 0.5015839493136159
      },
      {
          "tradingsymbol": "ONGC",
          "exchange": "NSE",
          "instrument_token": 633601,
          "isin": "INE213A01029",
          "product": "CNC",
          "price": 0,
          "quantity": 6,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 6,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 6,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 166.683333,
          "last_price": 165,
          "close_price": 165.6,
          "pnl": -10.099998000000028,
          "day_change": -0.5999999999999943,
          "day_change_percentage": -0.3623188405797067
      },
      {
          "tradingsymbol": "PEL",
          "exchange": "BSE",
          "instrument_token": 128077316,
          "isin": "INE140A01024",
          "product": "CNC",
          "price": 0,
          "quantity": 2,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 2,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 2,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 2089.05804,
          "last_price": 774.15,
          "close_price": 760.05,
          "pnl": -2629.8160799999996,
          "day_change": 14.100000000000023,
          "day_change_percentage": 1.8551411091375598
      },
      {
          "tradingsymbol": "PNB",
          "exchange": "BSE",
          "instrument_token": 136310020,
          "isin": "INE160A01022",
          "product": "CNC",
          "price": 0,
          "quantity": 1,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 1,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 1,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 50.75,
          "last_price": 50.64,
          "close_price": 50.56,
          "pnl": -0.10999999999999943,
          "day_change": 0.0799999999999983,
          "day_change_percentage": 0.15822784810126245
      },
      {
          "tradingsymbol": "PPLPHARMA",
          "exchange": "NSE",
          "instrument_token": 2962177,
          "isin": "INE0DK501011",
          "product": "CNC",
          "price": 0,
          "quantity": 8,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 8,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 8,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 36.785489,
          "last_price": 75.7,
          "close_price": 75.5,
          "pnl": 311.31608800000004,
          "day_change": 0.20000000000000284,
          "day_change_percentage": 0.2649006622516594
      },
      {
          "tradingsymbol": "SUZLON",
          "exchange": "BSE",
          "instrument_token": 136362756,
          "isin": "INE040H01021",
          "product": "CNC",
          "price": 0,
          "quantity": 1,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 1,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 1,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 9.37,
          "last_price": 9.46,
          "close_price": 9.29,
          "pnl": 0.09000000000000163,
          "day_change": 0.1700000000000017,
          "day_change_percentage": 1.8299246501614825
      },
      {
          "tradingsymbol": "VEDL",
          "exchange": "NSE",
          "instrument_token": 784129,
          "isin": "INE205A01025",
          "product": "CNC",
          "price": 0,
          "quantity": 17,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 17,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 17,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 262.55,
          "last_price": 288.35,
          "close_price": 287.5,
          "pnl": 438.6000000000002,
          "day_change": 0.8500000000000227,
          "day_change_percentage": 0.2956521739130514
      },
      {
          "tradingsymbol": "YESBANK",
          "exchange": "NSE",
          "instrument_token": 3050241,
          "isin": "INE528G01035",
          "product": "CNC",
          "price": 0,
          "quantity": 2,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 2,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 2,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 15.4,
          "last_price": 15.55,
          "close_price": 15.65,
          "pnl": 0.3000000000000007,
          "day_change": -0.09999999999999964,
          "day_change_percentage": -0.6389776357827454
      },
      {
          "tradingsymbol": "ZYDUSLIFE",
          "exchange": "BSE",
          "instrument_token": 136274180,
          "isin": "INE010B01027",
          "product": "CNC",
          "price": 0,
          "quantity": 7,
          "used_quantity": 0,
          "t1_quantity": 0,
          "realised_quantity": 7,
          "authorised_quantity": 0,
          "authorised_date": "2023-05-23 00:00:00",
          "authorisation": {},
          "opening_quantity": 7,
          "short_quantity": 0,
          "collateral_quantity": 0,
          "collateral_type": "",
          "discrepancy": false,
          "average_price": 619.85,
          "last_price": 508,
          "close_price": 506.4,
          "pnl": -782.9500000000002,
          "day_change": 1.6000000000000227,
          "day_change_percentage": 0.3159557661927375
      }
  ]

  useEffect(()=>{
    setchartdata(current)
  },[])


  const current=[]
  const invested=[]
  const pl=[]
  
  data.forEach((element, i) => {
    current.push( {
      name: element.tradingsymbol,
      parent: element.tradingsymbol,
      value: Math.abs(element.last_price * element.quantity),
      label: Number((element.last_price * element.quantity).toFixed(2)),
      color: color[i],
    })
    pl.push({
      name: element.tradingsymbol,
      value: Math.abs(element.pnl),
      label: Number(element.pnl).toFixed(2),
      color: Number(element.pnl) > 0 ? "#18d26b" : "#ff3f3f",
    })

    invested.push({
      name: element.tradingsymbol,
      value: Math.abs(element.average_price * element.quantity),
      label: (element.average_price * element.quantity).toFixed(2),
      color: color[i],
    })
  })

  const setoption=(e)=>{
if(e==='pl'){
  setchartdata(pl)
}else if(e==='invested'){
setchartdata(invested)
}else{
  setchartdata(current)
}
  }

 
  
    
      let chartOptions = {
        chart: {
          height: "90px",
        },
        tooltip: {
          // style: {
          //   color: "white",
          //   fontWeight: "bold",
          //   backgroundColor: "#000000",
          // },
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
            data: chartdata,
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
      }

  return (
    <>
      <HighchartsReact
              containerProps={{ style: { width: "100%" } }}
              highcharts={Highcharts}
              options={chartOptions}
            />
            <div className="float-end" onChange={(e)=>setoption(e.target.value)}>
              <div className="form-check form-check-inline">
                <input
defaultChecked
                  type="radio"
                  name="chart"
                  value="current"
                />
                <label

                  
                >
                  Current
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input

                  type="radio"
                  name="chart"
                  
                  value="invested"
                />
                <label
                  
                  
                >
                  Invested
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  
                  type="radio"
                  name="chart"
                  
                  value="pl"
                />
                <label
                  className="label form-check-label"
                 
                >
                  P&L
                </label>
              </div>
            </div>
          </>
  )
}

export default Holdingchart