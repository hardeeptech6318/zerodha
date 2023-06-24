import React, { useEffect, useState } from "react";
import Holdingchart from "./Holdingchart";
import Tablesort from "./commonfunction/Tablesort";
import Menu from "./global_component/Menu";
import { useGetHoldingsQuery } from "../features/api/apiSlice";


import Loader from "./global_component/Loader";

function Holdings() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetHoldingsQuery();

  const [data, setdata] = useState([]);
  const [calculate, setcalculate] = useState({
    investment: [0, 0],
    current: [0, 0],
    daypl: [0, 0],
    pl: [0, 0],
  });






  
  useEffect(() => {
setdata(posts?.data);

    if (data?.length > 0) {
      let investment = data
        .map((ele) => ele.quantity * ele.average_price)
        .reduce((a, b) => a + b)
        .toFixed(2)
        .toString()
        .split(".");
      let current = data
        .map((ele) => ele.quantity * ele.last_price)
        .reduce((a, b) => a + b)
        .toFixed(2)
        .toString()
        .split(".");
      let daypl = data
        .map((ele) => ele.pnl)
        .reduce((a, b) => a + b)
        .toFixed(2)
        .toString()
        .split(".");
      let pl = data
        .map((ele) => ele.pnl)
        .reduce((a, b) => a + b)
        .toFixed(2)
        .toString()
        .split(".");
      setcalculate({
        investment,
        current,
        daypl,
        pl,
      });
    }
  }, [data,isLoading]);

  return (



    <div className="allpagepadding">

      {isLoading?<Loader/>:
      <>
      <section>
        <div className="d-flex justify-content-between ">
          <div className="d-flex">
            <h3 className="page-title-small">Holdings(2)</h3>
            <div className="mx-3">
              <select className=" form-select ">
                <option selected>All stocks</option>
                <option value="1">Kite only</option>
                <option value="2">Small case</option>
                <option value="3">Mutual funds</option>
              </select>
            </div>
          </div>
          <div className="d-flex align-items-baseline">
            <div>
              <div className="holdingsearch">
                <label className="m-1 mx-2 ">
                  <i className="bi bi-search"></i>
                </label>
                <input
                  className="inputsearch"
                  placeholder="Filter eg:INFY"
                  type="text"
                />
              </div>
            </div>
            <div className="linkblue  mx-3">
              <a className="linkblue" href="/">
                <span className="me-1 fs-10 ">
                  <i className="bi bi-bag-dash"></i>
                </span>
                authorization
              </a>
            </div>
            <div>
              <a className="linkblue" href="/">
                <span className="me-1 fs-10">
                  <i className="bi bi-diagram-2"></i>
                </span>
                family
              </a>
            </div>
            <div className="mx-3">
              <a className="linkblue" href="/">
                <span className="me-1 fs-10">
                  <i className="bi bi-record-circle-fill"></i>
                </span>
                Analytic
              </a>
            </div>
            <div>
              <a className="linkblue" href="/">
                <span className="me-1 fs-10 ">
                  <i className="bi bi-download"></i>
                </span>
                Download
              </a>
            </div>
          </div>
        </div>

        <div className="my-4">
          <table
            className="table table-hover table-borderless border-top table-responsive border-bottom "
            id="example"
          >
            <thead>
              <tr className="label text-end">
                <th
                  onClick={() => setdata(Tablesort(data, "tradingsymbol"))}
                  scope="col"
                  className="border-end text-start"
                >
                  Instrument
                </th>
                <th
                  onClick={() => setdata(Tablesort(data, "quantity"))}
                  scope="col"
                >
                  Qty
                </th>
                <th
                  onClick={() => setdata(Tablesort(data, "average_price"))}
                  scope="col"
                >
                  Avg. cost
                </th>
                <th
                  onClick={() => setdata(Tablesort(data, "last_price"))}
                  scope="col"
                  className="border-end"
                >
                  LTP
                </th>

                <th scope="col">Cur. val</th>
                <th onClick={() => setdata(Tablesort(data, "pnl"))} scope="col">
                  P&L
                </th>
                <th scope="col">Net chg.</th>
                <th
                  onClick={() =>
                    setdata(Tablesort(data, "day_change_percentage"))
                  }
                  scope="col"
                >
                  Day chg.
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length > 0 &&
                data.map((ele, i) => {
                  return (
                    <tr key={i} className=" border-top text-end menutr ">
                      <td
                        scope="row"
                        className="border-end tablepaddinghold text-start d-flex justify-content-between"
                      >
                        <span>{ele.tradingsymbol}</span> <Menu data={ele} />
                      </td>
                      <td>{ele.quantity}</td>
                      <td>{ele.average_price.toFixed(2)}</td>
                      <td className="border-end">
                        {ele.last_price.toFixed(2)}
                      </td>
                      <td>{(ele.last_price * ele.quantity).toFixed(2)}</td>
                      <td>
                        {ele.pnl > 0 ? (
                          <span className="text-success">
                            {ele.pnl.toFixed(2)}
                          </span>
                        ) : (
                          <span className="text-red">{ele.pnl.toFixed(2)}</span>
                        )}
                      </td>
                      <td>
                        {((ele.last_price - ele.average_price) /
                          ele.average_price) *
                          100 >
                        0 ? (
                          <span className="text-success">
                            {(
                              ((ele.last_price - ele.average_price) /
                                ele.average_price) *
                              100
                            ).toFixed(2)}{" "}
                            %
                          </span>
                        ) : (
                          <span className="text-red">
                            {(
                              ((ele.last_price - ele.average_price) /
                                ele.average_price) *
                              100
                            ).toFixed(2)}{" "}
                            %
                          </span>
                        )}
                      </td>
                      <td>
                        {ele.day_change_percentage > 0 ? (
                          <span className="text-success">
                            {ele.day_change_percentage.toFixed(2)} %
                          </span>
                        ) : (
                          <span className="text-red">
                            {ele.day_change_percentage.toFixed(2)} %
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}

              <tr className="p-2 border-top">
                <td colSpan="8"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="my-5">
          <div>
            <div className="row">
              <div className="col-3">
                <div className="label ">Total investment</div>
                <div className="d-flex align-items-baseline">
                  <h1>{calculate.investment[0]}</h1>
                  <span>.{calculate.investment[1]}</span>
                </div>
              </div>
              <div className="col-3">
                <div className="label">Current value</div>
                <div className="d-flex align-items-baseline">
                  <h1>{calculate.current[0]}</h1>
                  <span>.{calculate.current[1]}</span>
                </div>
              </div>
              <div className="col-3">
                <div className="label">Days's P&L</div>
                <div>
                  {calculate.daypl[0] > 0 ? (
                    <span className="text-success d-flex align-items-baseline">
                      <h1>{calculate.daypl[0]}</h1>
                      <span>.{calculate.daypl[1]}</span>
                    </span>
                  ) : (
                    <span className="text-red d-flex align-items-baseline">
                      <h1>{calculate.daypl[0]}</h1>
                      <span>.{calculate.daypl[1]}</span>
                    </span>
                  )}
                </div>
              </div>
              <div className="col-3">
                <div className="label">Total P&L</div>
                <div>
                  {calculate.daypl[0] > 0 ? (
                    <span className="text-success d-flex align-items-baseline">
                      <h1>{calculate.daypl[0]}</h1>
                      <span>.{calculate.daypl[1]}</span>
                    </span>
                  ) : (
                    <span className="text-red d-flex align-items-baseline">
                      <h1>{calculate.daypl[0]}</h1>
                      <span>.{calculate.daypl[1]}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Holdingchart />
          </div>
        </div>
      </section>
      </>}
    </div>
    
    
  );
}

export default Holdings;
