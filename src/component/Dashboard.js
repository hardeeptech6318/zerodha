import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Highcharts, { chart, color } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import addTreemapModule from "highcharts/modules/treemap";
import Holdingchart from "./Holdingchart";
addTreemapModule(Highcharts);

function Dashboard() {
  
  let data = [
    {
      timestamp: "2022-05-13T00:00:00+0530",
      close_price: 15782.15,
    },
    {
      timestamp: "2022-05-16T00:00:00+0530",
      close_price: 15842.3,
    },
    {
      timestamp: "2022-05-17T00:00:00+0530",
      close_price: 16259.3,
    },
    {
      timestamp: "2022-05-18T00:00:00+0530",
      close_price: 16240.3,
    },
    {
      timestamp: "2022-05-19T00:00:00+0530",
      close_price: 15809.4,
    },
    {
      timestamp: "2022-05-20T00:00:00+0530",
      close_price: 16266.15,
    },
    {
      timestamp: "2022-05-23T00:00:00+0530",
      close_price: 16214.7,
    },
    {
      timestamp: "2022-05-24T00:00:00+0530",
      close_price: 16125.15,
    },
    {
      timestamp: "2022-05-25T00:00:00+0530",
      close_price: 16025.8,
    },
    {
      timestamp: "2022-05-26T00:00:00+0530",
      close_price: 16170.15,
    },
    {
      timestamp: "2022-05-27T00:00:00+0530",
      close_price: 16352.45,
    },
    {
      timestamp: "2022-05-30T00:00:00+0530",
      close_price: 16661.4,
    },
    {
      timestamp: "2022-05-31T00:00:00+0530",
      close_price: 16584.55,
    },
    {
      timestamp: "2022-06-01T00:00:00+0530",
      close_price: 16522.75,
    },
    {
      timestamp: "2022-06-02T00:00:00+0530",
      close_price: 16628,
    },
    {
      timestamp: "2022-06-03T00:00:00+0530",
      close_price: 16584.3,
    },
    {
      timestamp: "2022-06-06T00:00:00+0530",
      close_price: 16569.55,
    },
    {
      timestamp: "2022-06-07T00:00:00+0530",
      close_price: 16416.35,
    },
    {
      timestamp: "2022-06-08T00:00:00+0530",
      close_price: 16356.25,
    },
    {
      timestamp: "2022-06-09T00:00:00+0530",
      close_price: 16478.1,
    },
    {
      timestamp: "2022-06-10T00:00:00+0530",
      close_price: 16201.8,
    },
    {
      timestamp: "2022-06-13T00:00:00+0530",
      close_price: 15774.4,
    },
    {
      timestamp: "2022-06-14T00:00:00+0530",
      close_price: 15732.1,
    },
    {
      timestamp: "2022-06-15T00:00:00+0530",
      close_price: 15692.15,
    },
    {
      timestamp: "2022-06-16T00:00:00+0530",
      close_price: 15360.6,
    },
    {
      timestamp: "2022-06-17T00:00:00+0530",
      close_price: 15293.5,
    },
    {
      timestamp: "2022-06-20T00:00:00+0530",
      close_price: 15350.15,
    },
    {
      timestamp: "2022-06-21T00:00:00+0530",
      close_price: 15638.8,
    },
    {
      timestamp: "2022-06-22T00:00:00+0530",
      close_price: 15413.3,
    },
    {
      timestamp: "2022-06-23T00:00:00+0530",
      close_price: 15556.65,
    },
    {
      timestamp: "2022-06-24T00:00:00+0530",
      close_price: 15699.25,
    },
    {
      timestamp: "2022-06-27T00:00:00+0530",
      close_price: 15832.05,
    },
    {
      timestamp: "2022-06-28T00:00:00+0530",
      close_price: 15850.2,
    },
    {
      timestamp: "2022-06-29T00:00:00+0530",
      close_price: 15799.1,
    },
    {
      timestamp: "2022-06-30T00:00:00+0530",
      close_price: 15780.25,
    },
    {
      timestamp: "2022-07-01T00:00:00+0530",
      close_price: 15752.05,
    },
    {
      timestamp: "2022-07-04T00:00:00+0530",
      close_price: 15835.35,
    },
    {
      timestamp: "2022-07-05T00:00:00+0530",
      close_price: 15810.85,
    },
    {
      timestamp: "2022-07-06T00:00:00+0530",
      close_price: 15989.8,
    },
    {
      timestamp: "2022-07-07T00:00:00+0530",
      close_price: 16132.9,
    },
    {
      timestamp: "2022-07-08T00:00:00+0530",
      close_price: 16220.6,
    },
    {
      timestamp: "2022-07-11T00:00:00+0530",
      close_price: 16216,
    },
    {
      timestamp: "2022-07-12T00:00:00+0530",
      close_price: 16058.3,
    },
    {
      timestamp: "2022-07-13T00:00:00+0530",
      close_price: 15966.65,
    },
    {
      timestamp: "2022-07-14T00:00:00+0530",
      close_price: 15938.65,
    },
    {
      timestamp: "2022-07-15T00:00:00+0530",
      close_price: 16049.2,
    },
    {
      timestamp: "2022-07-18T00:00:00+0530",
      close_price: 16278.5,
    },
    {
      timestamp: "2022-07-19T00:00:00+0530",
      close_price: 16340.55,
    },
    {
      timestamp: "2022-07-20T00:00:00+0530",
      close_price: 16520.85,
    },
    {
      timestamp: "2022-07-21T00:00:00+0530",
      close_price: 16605.25,
    },
    {
      timestamp: "2022-07-22T00:00:00+0530",
      close_price: 16719.45,
    },
    {
      timestamp: "2022-07-25T00:00:00+0530",
      close_price: 16631,
    },
    {
      timestamp: "2022-07-26T00:00:00+0530",
      close_price: 16483.85,
    },
    {
      timestamp: "2022-07-27T00:00:00+0530",
      close_price: 16641.8,
    },
    {
      timestamp: "2022-07-28T00:00:00+0530",
      close_price: 16929.6,
    },
    {
      timestamp: "2022-07-29T00:00:00+0530",
      close_price: 17158.25,
    },
    {
      timestamp: "2022-08-01T00:00:00+0530",
      close_price: 17340.05,
    },
    {
      timestamp: "2022-08-02T00:00:00+0530",
      close_price: 17345.45,
    },
    {
      timestamp: "2022-08-03T00:00:00+0530",
      close_price: 17388.15,
    },
    {
      timestamp: "2022-08-04T00:00:00+0530",
      close_price: 17382,
    },
    {
      timestamp: "2022-08-05T00:00:00+0530",
      close_price: 17397.5,
    },
    {
      timestamp: "2022-08-08T00:00:00+0530",
      close_price: 17525.1,
    },
    {
      timestamp: "2022-08-10T00:00:00+0530",
      close_price: 17534.75,
    },
    {
      timestamp: "2022-08-11T00:00:00+0530",
      close_price: 17659,
    },
    {
      timestamp: "2022-08-12T00:00:00+0530",
      close_price: 17698.15,
    },
    {
      timestamp: "2022-08-16T00:00:00+0530",
      close_price: 17825.25,
    },
    {
      timestamp: "2022-08-17T00:00:00+0530",
      close_price: 17944.25,
    },
    {
      timestamp: "2022-08-18T00:00:00+0530",
      close_price: 17956.5,
    },
    {
      timestamp: "2022-08-19T00:00:00+0530",
      close_price: 17758.45,
    },
    {
      timestamp: "2022-08-22T00:00:00+0530",
      close_price: 17490.7,
    },
    {
      timestamp: "2022-08-23T00:00:00+0530",
      close_price: 17577.5,
    },
    {
      timestamp: "2022-08-24T00:00:00+0530",
      close_price: 17604.95,
    },
    {
      timestamp: "2022-08-25T00:00:00+0530",
      close_price: 17522.45,
    },
    {
      timestamp: "2022-08-26T00:00:00+0530",
      close_price: 17558.9,
    },
    {
      timestamp: "2022-08-29T00:00:00+0530",
      close_price: 17312.9,
    },
    {
      timestamp: "2022-08-30T00:00:00+0530",
      close_price: 17759.3,
    },
    {
      timestamp: "2022-09-01T00:00:00+0530",
      close_price: 17542.8,
    },
    {
      timestamp: "2022-09-02T00:00:00+0530",
      close_price: 17539.45,
    },
    {
      timestamp: "2022-09-05T00:00:00+0530",
      close_price: 17665.8,
    },
    {
      timestamp: "2022-09-06T00:00:00+0530",
      close_price: 17655.6,
    },
    {
      timestamp: "2022-09-07T00:00:00+0530",
      close_price: 17624.4,
    },
    {
      timestamp: "2022-09-08T00:00:00+0530",
      close_price: 17798.75,
    },
    {
      timestamp: "2022-09-09T00:00:00+0530",
      close_price: 17833.35,
    },
    {
      timestamp: "2022-09-12T00:00:00+0530",
      close_price: 17936.35,
    },
    {
      timestamp: "2022-09-13T00:00:00+0530",
      close_price: 18070.05,
    },
    {
      timestamp: "2022-09-14T00:00:00+0530",
      close_price: 18003.75,
    },
    {
      timestamp: "2022-09-15T00:00:00+0530",
      close_price: 17877.4,
    },
    {
      timestamp: "2022-09-16T00:00:00+0530",
      close_price: 17530.85,
    },
    {
      timestamp: "2022-09-19T00:00:00+0530",
      close_price: 17622.25,
    },
    {
      timestamp: "2022-09-20T00:00:00+0530",
      close_price: 17816.25,
    },
    {
      timestamp: "2022-09-21T00:00:00+0530",
      close_price: 17718.35,
    },
    {
      timestamp: "2022-09-22T00:00:00+0530",
      close_price: 17629.8,
    },
    {
      timestamp: "2022-09-23T00:00:00+0530",
      close_price: 17327.35,
    },
    {
      timestamp: "2022-09-26T00:00:00+0530",
      close_price: 17016.3,
    },
    {
      timestamp: "2022-09-27T00:00:00+0530",
      close_price: 17007.4,
    },
    {
      timestamp: "2022-09-28T00:00:00+0530",
      close_price: 16858.6,
    },
    {
      timestamp: "2022-09-29T00:00:00+0530",
      close_price: 16818.1,
    },
    {
      timestamp: "2022-09-30T00:00:00+0530",
      close_price: 17094.35,
    },
    {
      timestamp: "2022-10-03T00:00:00+0530",
      close_price: 16887.35,
    },
    {
      timestamp: "2022-10-04T00:00:00+0530",
      close_price: 17274.3,
    },
    {
      timestamp: "2022-10-06T00:00:00+0530",
      close_price: 17331.8,
    },
    {
      timestamp: "2022-10-07T00:00:00+0530",
      close_price: 17314.65,
    },
    {
      timestamp: "2022-10-10T00:00:00+0530",
      close_price: 17241,
    },
    {
      timestamp: "2022-10-11T00:00:00+0530",
      close_price: 16983.55,
    },
    {
      timestamp: "2022-10-12T00:00:00+0530",
      close_price: 17123.6,
    },
    {
      timestamp: "2022-10-13T00:00:00+0530",
      close_price: 17014.35,
    },
    {
      timestamp: "2022-10-14T00:00:00+0530",
      close_price: 17185.7,
    },
    {
      timestamp: "2022-10-17T00:00:00+0530",
      close_price: 17311.8,
    },
    {
      timestamp: "2022-10-18T00:00:00+0530",
      close_price: 17486.95,
    },
    {
      timestamp: "2022-10-19T00:00:00+0530",
      close_price: 17512.25,
    },
    {
      timestamp: "2022-10-20T00:00:00+0530",
      close_price: 17563.95,
    },
    {
      timestamp: "2022-10-21T00:00:00+0530",
      close_price: 17576.3,
    },
    {
      timestamp: "2022-10-24T00:00:00+0530",
      close_price: 17730.75,
    },
    {
      timestamp: "2022-10-25T00:00:00+0530",
      close_price: 17656.35,
    },
    {
      timestamp: "2022-10-27T00:00:00+0530",
      close_price: 17736.95,
    },
    {
      timestamp: "2022-10-28T00:00:00+0530",
      close_price: 17786.8,
    },
    {
      timestamp: "2022-10-31T00:00:00+0530",
      close_price: 18012.2,
    },
    {
      timestamp: "2022-11-01T00:00:00+0530",
      close_price: 18145.4,
    },
    {
      timestamp: "2022-11-02T00:00:00+0530",
      close_price: 18082.85,
    },
    {
      timestamp: "2022-11-03T00:00:00+0530",
      close_price: 18052.7,
    },
    {
      timestamp: "2022-11-04T00:00:00+0530",
      close_price: 18117.15,
    },
    {
      timestamp: "2022-11-07T00:00:00+0530",
      close_price: 18202.8,
    },
    {
      timestamp: "2022-11-09T00:00:00+0530",
      close_price: 18157,
    },
    {
      timestamp: "2022-11-10T00:00:00+0530",
      close_price: 18028.2,
    },
    {
      timestamp: "2022-11-11T00:00:00+0530",
      close_price: 18349.7,
    },
    {
      timestamp: "2022-11-14T00:00:00+0530",
      close_price: 18329.15,
    },
    {
      timestamp: "2022-11-15T00:00:00+0530",
      close_price: 18403.4,
    },
    {
      timestamp: "2022-11-16T00:00:00+0530",
      close_price: 18409.65,
    },
    {
      timestamp: "2022-11-17T00:00:00+0530",
      close_price: 18343.9,
    },
    {
      timestamp: "2022-11-18T00:00:00+0530",
      close_price: 18307.65,
    },
    {
      timestamp: "2022-11-21T00:00:00+0530",
      close_price: 18159.95,
    },
    {
      timestamp: "2022-11-22T00:00:00+0530",
      close_price: 18244.2,
    },
    {
      timestamp: "2022-11-23T00:00:00+0530",
      close_price: 18267.25,
    },
    {
      timestamp: "2022-11-24T00:00:00+0530",
      close_price: 18484.1,
    },
    {
      timestamp: "2022-11-25T00:00:00+0530",
      close_price: 18512.75,
    },
    {
      timestamp: "2022-11-28T00:00:00+0530",
      close_price: 18562.75,
    },
    {
      timestamp: "2022-11-29T00:00:00+0530",
      close_price: 18618.05,
    },
    {
      timestamp: "2022-11-30T00:00:00+0530",
      close_price: 18758.35,
    },
    {
      timestamp: "2022-12-01T00:00:00+0530",
      close_price: 18812.5,
    },
    {
      timestamp: "2022-12-02T00:00:00+0530",
      close_price: 18696.1,
    },
    {
      timestamp: "2022-12-05T00:00:00+0530",
      close_price: 18701.05,
    },
    {
      timestamp: "2022-12-06T00:00:00+0530",
      close_price: 18642.75,
    },
    {
      timestamp: "2022-12-07T00:00:00+0530",
      close_price: 18560.5,
    },
    {
      timestamp: "2022-12-08T00:00:00+0530",
      close_price: 18609.35,
    },
    {
      timestamp: "2022-12-09T00:00:00+0530",
      close_price: 18496.6,
    },
    {
      timestamp: "2022-12-12T00:00:00+0530",
      close_price: 18497.15,
    },
    {
      timestamp: "2022-12-13T00:00:00+0530",
      close_price: 18608,
    },
    {
      timestamp: "2022-12-14T00:00:00+0530",
      close_price: 18660.3,
    },
    {
      timestamp: "2022-12-15T00:00:00+0530",
      close_price: 18414.9,
    },
    {
      timestamp: "2022-12-16T00:00:00+0530",
      close_price: 18269,
    },
    {
      timestamp: "2022-12-19T00:00:00+0530",
      close_price: 18420.45,
    },
    {
      timestamp: "2022-12-20T00:00:00+0530",
      close_price: 18385.3,
    },
    {
      timestamp: "2022-12-21T00:00:00+0530",
      close_price: 18199.1,
    },
    {
      timestamp: "2022-12-22T00:00:00+0530",
      close_price: 18127.35,
    },
    {
      timestamp: "2022-12-23T00:00:00+0530",
      close_price: 17806.8,
    },
    {
      timestamp: "2022-12-26T00:00:00+0530",
      close_price: 18014.6,
    },
    {
      timestamp: "2022-12-27T00:00:00+0530",
      close_price: 18132.3,
    },
    {
      timestamp: "2022-12-28T00:00:00+0530",
      close_price: 18122.5,
    },
    {
      timestamp: "2022-12-29T00:00:00+0530",
      close_price: 18191,
    },
    {
      timestamp: "2022-12-30T00:00:00+0530",
      close_price: 18105.3,
    },
    {
      timestamp: "2023-01-02T00:00:00+0530",
      close_price: 18197.45,
    },
    {
      timestamp: "2023-01-03T00:00:00+0530",
      close_price: 18232.55,
    },
    {
      timestamp: "2023-01-04T00:00:00+0530",
      close_price: 18042.95,
    },
    {
      timestamp: "2023-01-05T00:00:00+0530",
      close_price: 17992.15,
    },
    {
      timestamp: "2023-01-06T00:00:00+0530",
      close_price: 17859.45,
    },
    {
      timestamp: "2023-01-09T00:00:00+0530",
      close_price: 18101.2,
    },
    {
      timestamp: "2023-01-10T00:00:00+0530",
      close_price: 17914.15,
    },
    {
      timestamp: "2023-01-11T00:00:00+0530",
      close_price: 17895.7,
    },
    {
      timestamp: "2023-01-12T00:00:00+0530",
      close_price: 17858.2,
    },
    {
      timestamp: "2023-01-13T00:00:00+0530",
      close_price: 17956.6,
    },
    {
      timestamp: "2023-01-16T00:00:00+0530",
      close_price: 17894.85,
    },
    {
      timestamp: "2023-01-17T00:00:00+0530",
      close_price: 18053.3,
    },
    {
      timestamp: "2023-01-18T00:00:00+0530",
      close_price: 18165.35,
    },
    {
      timestamp: "2023-01-19T00:00:00+0530",
      close_price: 18107.85,
    },
    {
      timestamp: "2023-01-20T00:00:00+0530",
      close_price: 18027.65,
    },
    {
      timestamp: "2023-01-23T00:00:00+0530",
      close_price: 18118.55,
    },
    {
      timestamp: "2023-01-24T00:00:00+0530",
      close_price: 18118.3,
    },
    {
      timestamp: "2023-01-25T00:00:00+0530",
      close_price: 17891.95,
    },
    {
      timestamp: "2023-01-27T00:00:00+0530",
      close_price: 17604.35,
    },
    {
      timestamp: "2023-01-30T00:00:00+0530",
      close_price: 17648.95,
    },
    {
      timestamp: "2023-01-31T00:00:00+0530",
      close_price: 17662.15,
    },
    {
      timestamp: "2023-02-01T00:00:00+0530",
      close_price: 17616.3,
    },
    {
      timestamp: "2023-02-02T00:00:00+0530",
      close_price: 17610.4,
    },
    {
      timestamp: "2023-02-03T00:00:00+0530",
      close_price: 17854.05,
    },
    {
      timestamp: "2023-02-06T00:00:00+0530",
      close_price: 17764.6,
    },
    {
      timestamp: "2023-02-07T00:00:00+0530",
      close_price: 17721.5,
    },
    {
      timestamp: "2023-02-08T00:00:00+0530",
      close_price: 17871.7,
    },
    {
      timestamp: "2023-02-09T00:00:00+0530",
      close_price: 17893.45,
    },
    {
      timestamp: "2023-02-10T00:00:00+0530",
      close_price: 17856.5,
    },
    {
      timestamp: "2023-02-13T00:00:00+0530",
      close_price: 17770.9,
    },
    {
      timestamp: "2023-02-14T00:00:00+0530",
      close_price: 17929.85,
    },
    {
      timestamp: "2023-02-15T00:00:00+0530",
      close_price: 18015.85,
    },
    {
      timestamp: "2023-02-16T00:00:00+0530",
      close_price: 18035.85,
    },
    {
      timestamp: "2023-02-17T00:00:00+0530",
      close_price: 17944.2,
    },
    {
      timestamp: "2023-02-20T00:00:00+0530",
      close_price: 17844.6,
    },
    {
      timestamp: "2023-02-21T00:00:00+0530",
      close_price: 17826.7,
    },
    {
      timestamp: "2023-02-22T00:00:00+0530",
      close_price: 17554.3,
    },
    {
      timestamp: "2023-02-23T00:00:00+0530",
      close_price: 17511.25,
    },
    {
      timestamp: "2023-02-24T00:00:00+0530",
      close_price: 17465.8,
    },
    {
      timestamp: "2023-02-27T00:00:00+0530",
      close_price: 17392.7,
    },
    {
      timestamp: "2023-02-28T00:00:00+0530",
      close_price: 17303.95,
    },
    {
      timestamp: "2023-03-01T00:00:00+0530",
      close_price: 17450.9,
    },
    {
      timestamp: "2023-03-02T00:00:00+0530",
      close_price: 17321.9,
    },
    {
      timestamp: "2023-03-03T00:00:00+0530",
      close_price: 17594.35,
    },
    {
      timestamp: "2023-03-06T00:00:00+0530",
      close_price: 17711.45,
    },
    {
      timestamp: "2023-03-08T00:00:00+0530",
      close_price: 17754.4,
    },
    {
      timestamp: "2023-03-09T00:00:00+0530",
      close_price: 17589.6,
    },
    {
      timestamp: "2023-03-10T00:00:00+0530",
      close_price: 17412.9,
    },
    {
      timestamp: "2023-03-13T00:00:00+0530",
      close_price: 17154.3,
    },
    {
      timestamp: "2023-03-14T00:00:00+0530",
      close_price: 17043.3,
    },
    {
      timestamp: "2023-03-15T00:00:00+0530",
      close_price: 16972.15,
    },
    {
      timestamp: "2023-03-16T00:00:00+0530",
      close_price: 16985.6,
    },
    {
      timestamp: "2023-03-17T00:00:00+0530",
      close_price: 17100.05,
    },
    {
      timestamp: "2023-03-20T00:00:00+0530",
      close_price: 16988.4,
    },
    {
      timestamp: "2023-03-21T00:00:00+0530",
      close_price: 17107.5,
    },
    {
      timestamp: "2023-03-22T00:00:00+0530",
      close_price: 17151.9,
    },
    {
      timestamp: "2023-03-23T00:00:00+0530",
      close_price: 17076.9,
    },
    {
      timestamp: "2023-03-24T00:00:00+0530",
      close_price: 16945.05,
    },
    {
      timestamp: "2023-03-27T00:00:00+0530",
      close_price: 16985.7,
    },
    {
      timestamp: "2023-03-28T00:00:00+0530",
      close_price: 16951.7,
    },
    {
      timestamp: "2023-03-29T00:00:00+0530",
      close_price: 17080.7,
    },
    {
      timestamp: "2023-03-31T00:00:00+0530",
      close_price: 17359.75,
    },
    {
      timestamp: "2023-04-03T00:00:00+0530",
      close_price: 17398.05,
    },
    {
      timestamp: "2023-04-05T00:00:00+0530",
      close_price: 17557.05,
    },
    {
      timestamp: "2023-04-06T00:00:00+0530",
      close_price: 17599.15,
    },
    {
      timestamp: "2023-04-10T00:00:00+0530",
      close_price: 17624.05,
    },
    {
      timestamp: "2023-04-11T00:00:00+0530",
      close_price: 17722.3,
    },
    {
      timestamp: "2023-04-12T00:00:00+0530",
      close_price: 17812.4,
    },
    {
      timestamp: "2023-04-13T00:00:00+0530",
      close_price: 17828,
    },
    {
      timestamp: "2023-04-17T00:00:00+0530",
      close_price: 17706.85,
    },
    {
      timestamp: "2023-04-18T00:00:00+0530",
      close_price: 17660.15,
    },
    {
      timestamp: "2023-04-19T00:00:00+0530",
      close_price: 17618.75,
    },
    {
      timestamp: "2023-04-20T00:00:00+0530",
      close_price: 17624.45,
    },
    {
      timestamp: "2023-04-21T00:00:00+0530",
      close_price: 17624.05,
    },
    {
      timestamp: "2023-04-24T00:00:00+0530",
      close_price: 17743.4,
    },
    {
      timestamp: "2023-04-25T00:00:00+0530",
      close_price: 17769.25,
    },
    {
      timestamp: "2023-04-26T00:00:00+0530",
      close_price: 17813.6,
    },
    {
      timestamp: "2023-04-27T00:00:00+0530",
      close_price: 17915.05,
    },
    {
      timestamp: "2023-04-28T00:00:00+0530",
      close_price: 18065,
    },
    {
      timestamp: "2023-05-02T00:00:00+0530",
      close_price: 18147.65,
    },
    {
      timestamp: "2023-05-03T00:00:00+0530",
      close_price: 18089.85,
    },
    {
      timestamp: "2023-05-04T00:00:00+0530",
      close_price: 18255.8,
    },
    {
      timestamp: "2023-05-05T00:00:00+0530",
      close_price: 18069,
    },
    {
      timestamp: "2023-05-08T00:00:00+0530",
      close_price: 18264.4,
    },
    {
      timestamp: "2023-05-09T00:00:00+0530",
      close_price: 18265.95,
    },
    {
      timestamp: "2023-05-10T00:00:00+0530",
      close_price: 18315.1,
    },
    {
      timestamp: "2023-05-11T00:00:00+0530",
      close_price: 18297,
    },
    {
      timestamp: "2023-05-12T00:00:00+0530",
      close_price: 18314.8,
    },
  ];
  let configurechart = [];
  data.forEach((element, i) => {
    configurechart.push([
      new Date(element.timestamp).getTime(),
      element.close_price,
    ]);
  });

  let overviewchartOptions = {
    plotLines: [
      {
        color: "#FF0000",
      },
    ],

    chart: {
      type: "spline", 

      height: "190px",
    },
    legend: {
      align: "left",
      verticalAlign: "top",
      x: 0,
      y: 20,
      floating: true,

      symbolRadius: 0,
    },

    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    yAxis: {
      tickInterval: 30,
      visible: true,
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
    },

    xAxis: {
      labels: {
        format: "{value:%b-%Y}",
        style:{
          
          fontSize:"0.75rem",
          color:"#9b9b9b",
          
          
        }
      },
      tickLength: 0,
    },

    plotOptions: {
      spline: {
        states: {
          hover: {
            lineWidth: 2,
          },
        },
      },
    },

    series: [
      {
        name: "NIFTY 50",
        data: configurechart,

        marker: {
          enabled: false,
        },
        lineWidth: 3,
      },
    ],
  };


  return (
    <div className="allpagepadding" >
      <div className="pagetitle w-100 border-bottom pb-3">Hi, Hardeepsinh</div>
      <div>
        <div className="row  border-bottom my-4 ">
          <div className="col-6">
            <div className=" secondary-title mb-4 ">
              <span className="me-3">
                <i className="bi bi-pie-chart"></i>
              </span>
              <span>Equity</span>
            </div>
            <div>
              <div className="row mb-5">
                <div className="col-5">
                  <div className="border-end">
                  <div className="bigvalue">-340.9</div>
                  <div className="label">Margin available</div>
                </div>
                </div>
                <div className="col-7 p-2 ps-4">
                  <div className="pb-2">
                    <span className="label">Margins used</span>
                    <span className="mx-2">0</span>
                  </div>
                  <div className="pb-2">
                    <span className=" label ">Opening balance</span>
                    <span className="mx-2">0</span>
                  </div>
                  <Link to="/" className="linkbluetext" >
                    <span className="me-1 text-primary"><i className="bi bi-record-circle-fill"></i></span>View statement
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className=" secondary-title mb-4 ">
              <span className="me-3">
              <i className="bi bi-droplet"></i>
              </span>
              <span>Commodity</span>
            </div>
            <div>
              <div className="row">
                <div className="col-5">
                  <div className="border-end">
                  <div className="bigvalue">0</div>
                  <div className="label">Margin available</div>
                </div>
                </div>
                <div className="col-7 p-2 ps-4">
                  <div className="pb-2">
                    <span className="label">Margins used</span>
                    <span className="mx-2">0</span>
                  </div>
                  <div className="pb-2">
                    <span className=" label ">Opening balance</span>
                    <span className="mx-2">0</span>
                  </div>
                  <Link to="/" className="linkbluetext" >
                    <span className="me-1 text-primary"><i className="bi bi-record-circle-fill"></i></span>View statement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex  mt-2 mt-4">
        <div className="w-100 mr-3 ">
          <div className="secondary-title my-3">
            <span className="me-3">
              <i className="bi bi-briefcase"></i>
            </span>
            <span>Holdings</span>
          </div>
          <div className="row">
            <div className="col-6 border-end">
              <div className="bigvalue">-3.41k </div>
              <div className="label">P&L</div>
            </div>
            <div className="col-6 p-3 ps-5  ">
              <div>
                <span className="label">Current Value</span>
                <span className="mx-2">32.1k</span>
              </div>
              <div className="my-2">
                <span className=" label ">Invested</span>
                <span className="mx-2">35.5k</span>
              </div>
            </div>
          </div>
          <div>
            <Holdingchart/>
          </div>
        </div>
        <div className="">
          <img className="banner " src="./image/add.png" />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <h2 className="secondary-title mb-5">
            <span>
              <i className="bi bi-graph-up-arrow"></i>
            </span>
            <span className="mx-3">Market Overview</span>
          </h2>
          <div>
            <HighchartsReact
              highcharts={Highcharts}
              // containerProps={{ style: { width: "50%"} }}
              options={overviewchartOptions}
            />
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default Dashboard;
