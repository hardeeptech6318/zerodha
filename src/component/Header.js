import React from "react";
import "../App.css";
import { Link,NavLink } from "react-router-dom";
import { BellOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="label  border-bottom px-5 shadow-sm sticky-top">
      <div className="row m-0 p-0 align-items-center m-auto  ">
        <div className="leftside m-0    border-end py-3 ">
          <div className="d-flex align-items-center">
            <div className="mx-2">
              <span>NIFTY 50</span>
              <span>18147.65</span>
              <span>82.65 (0.46%)</span>{" "}
            </div>
            <div >SENSEX 61354.71 242.27 (0.40%)</div>
          </div>
        </div>
        <div className="rightside headerpadding">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/">
              <img
                className="logo mx-3"
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
              />
            </NavLink>
            <div className="d-flex w-100 justify-content-end align-items-center">
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/" >
                  <span>Dashboard</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/orders" >
                  <span>Orders</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/holdings" >
                  <span>Holdings</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/position    " >
                  <span>Positions</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/Funds" >
                  <span>Funds</span>
                </NavLink>
              </div>
              <div className="mx-3">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/Funds" >
                  <span>Apps</span>
                </NavLink>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-evenly ms-4">
              <div className="py-2 mx-2 ">
                <i className="bi bi-bell"></i>
              </div>
              <div className="mx-2">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/profile" >
                  HR
                </NavLink>
              </div>
              <div className="ms-2">EM1078</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
