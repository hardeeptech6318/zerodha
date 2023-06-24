import React from "react";
import Gttmodal from "./Gttmodal";
import { useSelector, useDispatch } from "react-redux";
import { ordermodal, buysell,golbaldata } from "../../features/api/globalstate";
import Createalert from "./Createalert";
import Marketdepth from "./Marketdepth";

function Menu(props) {
  const dispatch = useDispatch();
  return (
    <>
    <Createalert/>
    <Gttmodal/>
    <Marketdepth/>
      <div class="dropdown">
        <button
          class="menu "
          type="button"
          id="menu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => {
            dispatch(golbaldata(props.data));
          }}
        >
          <span className="">
            <i class="bi bi-three-dots "></i>
          </span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="menu">
          <li>
            <a
              type="button"
              class="dropdown-item padding810"
              onClick={() => {
                dispatch(buysell(false));
                dispatch(ordermodal(true));
              }}
            >
              <span className="me-2">
                <i class="bi bi-dash"></i>
              </span>
              Exit
            </a>
          </li>
          <li>
            <a
              type="button"
              class="dropdown-item padding810 "
              onClick={() => {
                dispatch(buysell(true));
                dispatch(ordermodal(true));
              }}
            >
              <span className="me-2 ">
                <i class="bi bi-plus"></i>
              </span>
              Add
            </a>
          </li>
          <li>
            <a class="dropdown-item padding810 " href="#">
              <span className="me-2">
                <i className="bi bi-menu-button"></i>
              </span>
              View breakdown
            </a>
          </li>

          <li>
            <a
              class="dropdown-item padding810   d-flex"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#gtt"
            >
              <span className="me-2">
                <img style={{ maxWidth: "15px" }} src="./image/gtticon.png" />
              </span>
              <span>Create GTT</span>
            </a>
          </li>
          <li>
            <a
              class="dropdown-item padding810  d-flex"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#alert"
            >
              <span className="me-2">
                <img style={{ maxWidth: "15px" }} src="./image/alerticon.png" />
              </span>
              <span>Create Alert</span>
            </a>
          </li>
          <li>
            <a
              class="dropdown-item padding810 "
              target="_blank"
              href="https://console.zerodha.com/gift?src=kiteweb"
            >
              <span className="me-2">
                <i class="bi bi-gift"></i>
              </span>
              Send as gift
            </a>
          </li>
          <li>
            <a
              class="dropdown-item padding810 "
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#marketdepth"
            >
              <span className="me-2">
                <i className="bi bi-collection"></i>
              </span>
              Market depth
            </a>
          </li>
          <li>
            <a class="dropdown-item padding810 " href="#">
              <span className="me-2">
                <i class="bi bi-graph-up-arrow"></i>
              </span>
              Chart
            </a>
          </li>
          <li>
            <a class="dropdown-item padding810 " href="#">
              <span className="me-2">
                <i class="bi bi-binoculars"></i>
              </span>
              Add to marketwatch
            </a>
          </li>
          <li>
            <a
              class="dropdown-item padding810 "
              type="button"
              onClick={() =>
                window.open(
                  `https://stocks.tickertape.in/INFY?exchange=NSE&broker=kite&theme=default`,
                  "_blank",
                  "location=yes,height=450,width=600,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,"
                )
              }
            >
              <span className="me-2">
                <img
                  style={{ maxWidth: "15px" }}
                  src="./image/tickertape.png"
                />
              </span>
              Fundamentals
            </a>
          </li>
          <li>
            <a
              class="dropdown-item padding810 "
              target="_blank"
              type="button"
              onClick={() =>
                window.open(
                  `https://mo.streak.tech/?utm_source=context-menu&utm_medium=kite&stock=NSE:INFY&theme=default`,
                  "_blank",
                  "location=yes,height=450,width=600,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,"
                )
              }
            >
              <span className="me-2">
                <img style={{ maxWidth: "15px" }} src="./image/streak.png" />
              </span>
              Technicals
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
