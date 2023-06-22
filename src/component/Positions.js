import React, { useState,useEffect } from "react";
import Tablesort from "./commonfunction/Tablesort";
import { useGetPositionsQuery } from '../features/api/apiSlice'

function Positions() {
  let data2 = {
    net: [
      {
        tradingsymbol: "ADANIGREEN",
        exchange: "NSE",
        instrument_token: 912129,
        product: "CNC",
        quantity: 45,
        overnight_quantity: 0,
        multiplier: 1,
        average_price: 968.45,
        close_price: 0,
        last_price: 963.35,
        value: -43580.25,
        pnl: -229.5,
        m2m: -229.5,
        unrealised: -229.5,
        realised: 0,
        buy_quantity: 45,
        buy_price: 968.45,
        buy_value: 43580.25,
        buy_m2m: 43580.25,
        sell_quantity: 0,
        sell_price: 0,
        sell_value: 0,
        sell_m2m: 0,
        day_buy_quantity: 45,
        day_buy_price: 968.45,
        day_buy_value: 43580.25,
        day_sell_quantity: 0,
        day_sell_price: 0,
        day_sell_value: 0,
      },
      {
        tradingsymbol: "ATGL",
        exchange: "NSE",
        instrument_token: 1552897,
        product: "CNC",
        quantity: 51,
        overnight_quantity: 0,
        multiplier: 1,
        average_price: 772.0392156862747,
        close_price: 0,
        last_price: 760.7,
        value: -39374.00000000001,
        pnl: -578.3000000000029,
        m2m: -578.3000000000029,
        unrealised: -578.3000000000029,
        realised: 0,
        buy_quantity: 51,
        buy_price: 772.0392156862747,
        buy_value: 39374.00000000001,
        buy_m2m: 39374.00000000001,
        sell_quantity: 0,
        sell_price: 0,
        sell_value: 0,
        sell_m2m: 0,
        day_buy_quantity: 51,
        day_buy_price: 772.0392156862746,
        day_buy_value: 39374.00000000001,
        day_sell_quantity: 0,
        day_sell_price: 0,
        day_sell_value: 0,
      },
    ],
    day: [
      {
        tradingsymbol: "ADANIGREEN",
        exchange: "NSE",
        instrument_token: 912129,
        product: "CNC",
        quantity: 45,
        overnight_quantity: 0,
        multiplier: 1,
        average_price: 968.45,
        close_price: 0,
        last_price: 963.35,
        value: -43580.25,
        pnl: -229.5,
        m2m: -229.5,
        unrealised: -229.5,
        realised: 0,
        buy_quantity: 45,
        buy_price: 968.45,
        buy_value: 43580.25,
        buy_m2m: 43580.25,
        sell_quantity: 0,
        sell_price: 0,
        sell_value: 0,
        sell_m2m: 0,
        day_buy_quantity: 45,
        day_buy_price: 968.45,
        day_buy_value: 43580.25,
        day_sell_quantity: 0,
        day_sell_price: 0,
        day_sell_value: 0,
      },
      {
        tradingsymbol: "ATGL",
        exchange: "NSE",
        instrument_token: 1552897,
        product: "CNC",
        quantity: 51,
        overnight_quantity: 0,
        multiplier: 1,
        average_price: 772.0392156862747,
        close_price: 0,
        last_price: 760.7,
        value: -39374.00000000001,
        pnl: -578.3000000000029,
        m2m: -578.3000000000029,
        unrealised: -578.3000000000029,
        realised: 0,
        buy_quantity: 51,
        buy_price: 772.0392156862747,
        buy_value: 39374.00000000001,
        buy_m2m: 39374.00000000001,
        sell_quantity: 0,
        sell_price: 0,
        sell_value: 0,
        sell_m2m: 0,
        day_buy_quantity: 51,
        day_buy_price: 772.0392156862746,
        day_buy_value: 39374.00000000001,
        day_sell_quantity: 0,
        day_sell_price: 0,
        day_sell_value: 0,
      },
    ],
  };






  const [data, setdata] = useState([]);
  const [masterChecked, setmasterchecked] = useState(false);
  const [selectedlist, setselectedlist] = useState([]);
  const [net, setnet] = useState(data2.net);
  const [profile, setprofile] = useState([]);


  const {
    data:positiondata,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetPositionsQuery()
  

  

  useEffect(()=>{
    isLoading ? setdata([]) : setdata(positiondata?.data);
    console.log(profile);
    
  },[positiondata])





  const onMasterCheck = (e) => {
    let tempList = net;

    tempList?.length > 0 &&
      tempList?.map((user) => (user.selected = e.target.checked));
      console.log(tempList);

    setmasterchecked(e.target.checked);
    setnet(tempList);
    setselectedlist(net.filter((e) => e.selected));
  };



  

  const onItemCheck = (e, item) => {
    let tempList = net;

    tempList?.map((user) => {
      if (user.instrument_token === item.instrument_token) {
        user.selected = e.target.checked;
      }
      return user;
    });

    const totalItems = net?.length;

    const totalCheckedItems = tempList.filter((e) => console.log(e.selected))?.length;
    
    setmasterchecked(totalItems === totalCheckedItems);
    setnet(tempList);
    setselectedlist(net.filter((e) => e.selected));
  };

  const getSelectedRows=()=> {
    

    setselectedlist(net.filter((e)=>e.selected))
  }

  return (
    <div className="allpagepadding">
      {/*-----------------net------------------------------* */}
      <div>
        <div>
          <div className="d-flex justify-content-between mb-3">
            <div>
              <h3 style={{ fontSize: "1.125rem" }}>
                Positions ({data.net?.length})
              </h3>
            </div>

            <div className="d-flex align-items-baseline">
              <div>
                <div className="holdingsearch">
                  <label className="m-1 mx-2 ">
                    <i className="bi bi-search"></i>
                  </label>
                  <input
                    className="inputsearch"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>

              <div className="mx-3">
                <a className="linkblue" href="/">
                  <span className="me-1 fs-10">
                    <i className="bi bi-record-circle-fill"></i>
                  </span>
                  View history
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

          <div>
            <table
              className="table table-hover table-borderless border-top  table-responsive border-bottom "
              id="example"
            >
              <thead>
                <tr className="label">
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={masterChecked}
                      onChange={(e) => onMasterCheck(e)}
                    />
                  </th>
                  <th
                    onClick={() => setdata(Tablesort(data.net, "tradingsymbol"))}
                    scope="col"
                  >
                    Product
                  </th>
                  <th
                    onClick={() => setdata(Tablesort(data.net, "tradingsymbol"))}
                    scope="col"
                  >
                    Instrument
                  </th>
                  <th
                    onClick={() => setdata(Tablesort(data.net, "tradingsymbol"))}
                    scope="col"
                  >
                    Qty.
                  </th>
                  <th
                    onClick={() => setdata(Tablesort(data.net, "tradingsymbol"))}
                    scope="col"
                  >
                    Avg.
                  </th>
                  <th
                    onClick={() => setdata(Tablesort(data.net, "tradingsymbol"))}
                    scope="col"
                  >
                    LTP
                  </th>
                  <th
                    onClick={() => setdata(Tablesort(data.net, "tradingsymbol"))}
                    scope="col"
                  >
                    P&L
                  </th>
                  <th
                    onClick={() => setdata(Tablesort(data.net, "tradingsymbol"))}
                    scope="col"
                  >
                    Chg.
                  </th>
                </tr>
              </thead>
              <tbody>
                {net &&
                  net?.length > 0 &&
                  net?.map((ele, i) => {
                    return (
                      <tr key={i} className=" border-top">
                        <td className=" tablepaddinghold">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={ele.selected}
                            onChange={(e) => onItemCheck(e, ele)}
                          />
                        </td>
                        <td className=" tablepaddinghold">
                          <span className="sellbadge">{ele.product}</span>
                        </td>
                        <td>
                          {ele.tradingsymbol}
                          <span className="headerdim opacity75 ms-1">
                            {ele.exchange}
                          </span>
                        </td>
                        <td>{ele.quantity}</td>
                        <td>{ele.average_price.toFixed(2)}</td>
                        <td>{ele.last_price.toFixed(2)}</td>
                        <td>
                          {ele.pnl > 0 ? (
                            <span className="text-success">
                              {ele.pnl.toFixed(2)}
                            </span>
                          ) : (
                            <span className="text-red">
                              {ele.pnl.toFixed(2)}
                            </span>
                          )}
                        </td>
                        <td>
                          {((ele.last_price - ele.average_price) /
                            ele.average_price) *
                            100 >
                          0 ? (
                            <span className="test-success">
                              {(
                                ((ele.last_price - ele.average_price) /
                                  ele.average_price) *
                                100
                              ).toFixed(2)}
                            </span>
                          ) : (
                            <span className="text-red fw-normal">
                              {(
                                ((ele.last_price - ele.average_price) /
                                  ele.average_price) *
                                100
                              ).toFixed(2)}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}

                <tr className="px-2 py-2 border-top ">
                  <td></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-top">
                  <td colSpan={3} className="p-0">{selectedlist?.length>0 ?<button
              className="btn btn-primary py-1 px-3 " style={{fontSize:"0.75rem"}}
              onClick={() => getSelectedRows()}
            >{`Exit ${selectedlist?.length} position`}</button>:null}</td>
                  
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center">Total</td>
                  <td >
                    {data.net?.map((ele) => ele.pnl).reduce((a, b) => a + b) >
                    0 ? (
                      <span className="text-success">
                        {data.net
                          ?.map((ele) => ele.pnl)
                          .reduce((a, b) => a + b)
                          .toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-red">
                        {data.net
                          ?.map((ele) => ele.pnl)
                          .reduce((a, b) => a + b)
                          .toFixed(2)}
                      </span>
                    )}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/*------------------day------------------* */}
      <div className="mt-5">
        <div>
          <div>
            <div className="d-flex justify-content-between mt-2 mb-3">
              <div>
                <h3 style={{ fontSize: "1.125rem" }}>
                  Day's history({data.day?.length})
                </h3>
              </div>

              <div className="d-flex align-items-baseline">
                <div>
                  <div className="holdingsearch">
                    <label className="m-1 mx-2 ">
                      <i className="bi bi-search"></i>
                    </label>
                    <input
                      className="inputsearch"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                </div>

                <div className="mx-3">
                  <a className="linkblue" href="/">
                    <span className="me-1 fs-10">
                      <i className="bi bi-record-circle-fill"></i>
                    </span>
                    View history
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

            <div>
              <table
                className="table table-hover table-borderless border-top table-responsive border-bottom "
                id="example"
              >
                <thead>
                  <tr className="label position-sticky">
                    <th
                      onClick={() => setdata(Tablesort(data.day, "tradingsymbol"))}
                      scope="col"
                    >
                      Product
                    </th>
                    <th
                      onClick={() => setdata(Tablesort(data.day, "tradingsymbol"))}
                      scope="col"
                    >
                      Instrument
                    </th>
                    <th
                      onClick={() => setdata(Tablesort(data.day, "tradingsymbol"))}
                      scope="col"
                    >
                      Qty.
                    </th>
                    <th
                      onClick={() => setdata(Tablesort(data.day, "tradingsymbol"))}
                      scope="col"
                    >
                      Avg.
                    </th>
                    <th
                      onClick={() => setdata(Tablesort(data.day, "tradingsymbol"))}
                      scope="col"
                    >
                      LTP
                    </th>
                    <th
                      onClick={() => setdata(Tablesort(data.day, "tradingsymbol"))}
                      scope="col"
                    >
                      P&L
                    </th>
                    <th
                      onClick={() => setdata(Tablesort(data.day, "tradingsymbol"))}
                      scope="col"
                    >
                      Chg.
                    </th>
                  </tr>
                </thead>
                <tbody className="pb-3 ">
                  { data?.day?.map((ele, i) => {
                      return (
                        <tr key={i} className=" border-top">
                          <td className=" tablepaddinghold ">
                            <span className="sellbadge">{ele.product}</span>
                          </td>
                          <td>
                            {ele.tradingsymbol}
                            <span className="headerdim opacity75 ms-1">
                              {ele.exchange}
                            </span>
                          </td>
                          <td>{ele.quantity}</td>
                          <td>{ele.average_price.toFixed(2)}</td>
                          <td>{ele.last_price.toFixed(2)}</td>
                          <td>
                            {ele.pnl > 0 ? (
                              <span className="text-success">
                                {ele.pnl.toFixed(2)}
                              </span>
                            ) : (
                              <span className="text-red">
                                {ele.pnl.toFixed(2)}
                              </span>
                            )}
                          </td>
                          <td>
                            {((ele.last_price - ele.average_price) /
                              ele.average_price) *
                              100 >
                            0 ? (
                              <span className="test-success">
                                {(
                                  ((ele.last_price - ele.average_price) /
                                    ele.average_price) *
                                  100
                                ).toFixed(2)}
                              </span>
                            ) : (
                              <span className="text-red fw-normal">
                                {(
                                  ((ele.last_price - ele.average_price) /
                                    ele.average_price) *
                                  100
                                ).toFixed(2)}
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}

                  <tr className="tablepaddinghold border-top ">
                    <td></td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr className=" border-top ">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center">Total</td>
                    <td>
                      {data.day?.map((ele) => ele.pnl).reduce((a, b) => a + b) >
                      0 ? (
                        <span className="text-success">
                          {data.day
                            ?.map((ele) => ele.pnl)
                            .reduce((a, b) => a + b)
                            .toFixed(2)}
                        </span>
                      ) : (
                        <span className="text-red">
                          {data.day
                            ?.map((ele) => ele.pnl)
                            .reduce((a, b) => a + b)
                            .toFixed(2)}
                        </span>
                      )}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Positions;
