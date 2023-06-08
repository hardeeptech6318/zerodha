import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div className=" border-bottom px-xxl-5 shadow-sm sticky-top niftyheader">
      <div className="row m-0 p-0 align-items-center m-auto  ">
        <div className="leftside m-0    border-end  ">
          <div className="d-flex align-items-center  fw-bold height60">  
            <div className="me-2 ">
              <span className="" >NIFTY 50</span>
              <span className="text-success mx-1    ">18147.65</span>
              <span className="headerdim opacity75 ">82.65 (0.46%)</span>
            </div>
            <div className="ms-3 ">
              <span className="" >SENSEX</span>
              <span className="text-success mx-1    ">18147.65</span>
              <span className="headerdim opacity75 ">82.65 (0.46%)</span>
            </div>
          </div>
        </div>
        <div className="rightside headerpadding">
          <div className=" headerright">
            <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/">
              <img
                className="logo mx-3"
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                alt="logo"
              />
            </NavLink>
            <div className="d-flex w-100 justify-content-end align-items-center border-end py-2">
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
            <div className="d-flex align-items-center justify-content-evenly ">
              <div className=" mx-3  ">
                <i className="bi bi-bell"></i>
              </div>
              <div className="me-2 avatar">
                <NavLink  className={({isActive}) => (isActive ? "active" : 'none')} to="/profile" >
                  HR
                </NavLink>
              </div>
              <div className="ms-1">EM1078</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
