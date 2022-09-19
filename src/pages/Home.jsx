import React, { useState } from "react";
import {
  FaChevronDown,
  FaArrowRight,
  FaArrowUp,
  FaArrowLeft,
  FaBars,
} from "react-icons/fa";
import logo from "../images/page3/roqqu_logo.png";
import notification from "../images/page3/notification.png";
import chart from "../images/page3/noun_bar chart.svg";
import wallet from "../images/page3/Wallet.svg";
import prices from "../images/page3/Book.svg";
import activities from "../images/page3/Pulse.svg";
import settings from "../images/page3/Settings-alt.svg";
import promotions from "../images/page3/Fire.svg";
import dots from "../images/page3/dots.PNG";

import group from "../images/page3/Group.svg";
import btc from "../images/page3/btc.svg";
import tether from "../images/page3/tether.svg";
import ethereum from "../images/page3/ethereum.svg";
import binance from "../images/page3/binance.svg";

import user from "../images/page3/user.png";

const Home = ({ title }) => {
  // const [hoverSideMenu, setHoverSideMenu] = useState(true);
  const [tab, setTab] = useState("core-assets");
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <main className="main overflow-hidden  bg-gray-2">
      <nav className="nav flex h-20 px-12 pt-8 justify-between">
        <div className="flex justify-between">
          <img src={logo} alt="logo" className="h-5 w-24" />
        </div>

        <div className="flex">
          <div className="h-8 flex gap-x-4 items-center">
            <div className="relative ">
              <img src={notification} alt="notification bell" className="" />
              <div className="absolute -top-1 right-0 h-2 w-2 bg-red rounded-full"></div>
            </div>
            <div className="h-12 w-12 rounded-full bg-gray-rounded flex items-center justify-center">
              <img src={user} alt="" className="" />
            </div>
            <div
              onClick={() => setShowSideMenu(!showSideMenu)}
              className="bars cursor-pointer toggle-menu "
            >
              <FaBars className="text-gray-500  text-xl bg-transparent" />
            </div>
          </div>
        </div>
      </nav>{" "}
      <section className="flex relative">
        <div
          className={`${
            showSideMenu
              ? "side-menu  z-20 absolute side-menu-show"
              : "side-menu  z-20 absolute side-menu-hide"
          }`}
        >
          <div className="menu-1">
            <div className="menu-1-icon-container">
              <img src={dots} alt="" className="" />
            </div>
            <div className="menu-1-text-container">home</div>
          </div>
          <div className="menu-2">
            <div className="menu-2-icon-container">
              <img src={chart} alt="" className="" />
            </div>
            <div className="menu-2-text-container">exchange</div>
          </div>
          <div className="menu-2">
            <div className="menu-2-icon-container">
              <img src={wallet} alt="wallet" className="" />
            </div>
            <div className="menu-2-text-container">wallet</div>
          </div>
          <div className="menu-2">
            <div className="menu-2-icon-container">
              <img src={prices} alt="" className="" />
            </div>
            <div className="menu-2-text-container">prices</div>
          </div>
          <div className="menu-2">
            <div className="menu-2-icon-container">
              <img src={activities} alt="activities" className="" />
            </div>
            <div className="menu-2-text-container">activities</div>
          </div>
          <div className="menu-2">
            <div className="menu-2-icon-container">
              <img src={promotions} alt="promotions" className="" />
            </div>
            <div className="menu-2-text-container">promotions</div>
          </div>
          <div className="menu-2">
            <div className="menu-2-icon-container">
              <img src={settings} alt="settings" className="" />
            </div>
            <div className="menu-2-text-container">settings</div>
          </div>
          <div className="menu-2">
            <div className="menu-2-icon-container">
              <img src={notification} alt="" className="" />
            </div>
            <div className="menu-2-text-container">notifications</div>
          </div>
        </div>{" "}
        {/* home page */}
        <div className="flex flex-col sm:flex-row gap-x-4 px-12 z-10 bg-gray-4">
          <div className="">
            <div className="banner flex justify-between ">
              <div className=" ">
                <h3 className="">JANUARY 2, 2022</h3>
                <h1 className="">Welcome to Roqqu’s Decentralized Exchange</h1>
                <p className="">
                  With an easy-to-use interface, we provide industry-leading
                  security and deep liquidity
                </p>
                <button className="btn-banner text-white flex items-center justify-center gap-x-4 capitalize">
                  learn more
                  <FaArrowRight className="text-white" />
                </button>
              </div>
              <div className="banner-img flex-1 flex justify-end h-56 w-56 mt-12">
                <img src={group} alt="group" className="" />
              </div>
            </div>
            <div className="assets ">
              <div className="flex sm:gap-x-60 -ml-9 asset-market relative">
                <div className="flex  assets-container ">
                  <div
                    className="flex flex-col items-center cursor-pointer ml-4"
                    onClick={() => setTab("core-assets")}
                  >
                    <h1
                      className={`${
                        tab === "core-assets"
                          ? "assets-active"
                          : "assets-unactive"
                      }  capitalize`}
                    >
                      core assets
                    </h1>
                    <div
                      className={`${
                        tab === "core-assets"
                          ? "underline-active"
                          : "underline-inactive"
                      } `}
                    ></div>
                  </div>
                  <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setTab("top gainers")}
                  >
                    <h1
                      className={`${
                        tab === "top gainers"
                          ? "assets-active"
                          : "assets-unactive "
                      } capitalize`}
                    >
                      top gainers
                    </h1>
                    <div
                      className={`${
                        tab === "top gainers"
                          ? "underline-active"
                          : "underline-unactive"
                      } bg-gray-3`}
                    ></div>
                  </div>
                  <div
                    className="flex flex-col items-center cursor-pointer  "
                    onClick={() => setTab("top losers")}
                  >
                    <h1
                      className={`${
                        tab === "top losers"
                          ? "assets-active"
                          : "assets-unactive "
                      }  capitalize`}
                    >
                      top losers
                    </h1>
                    <div
                      className={`${
                        tab === "top losers"
                          ? "underline-active"
                          : "underline-unactive"
                      } bg-gray-3`}
                    ></div>
                  </div>
                  <div
                    className="flex flex-col items-center cursor-pointer  "
                    onClick={() => setTab("new")}
                  >
                    <h1
                      className={`${
                        tab === "new" ? "assets-active" : "assets-unactive "
                      }  capitalize`}
                    >
                      new
                    </h1>
                    <div
                      className={`${
                        tab === "new"
                          ? "underline-active"
                          : "underline-unactive"
                      } bg-gray-3`}
                    ></div>
                  </div>
                  {/* <div
                    className="flex flex-col items-center cursor-pointer "
                    onClick={() => setTab("new")}
                  >
                    <h1
                      className={`${
                        tab === "new"
                          ? "assets-active"
                          : "assets-unactive "
                      }  capitalize `}
                    >
                      new
                    </h1>
                    <div
                      className={`${
                        tab === "new" ? "underline-active" : "underline-unactive"
                      } bg-gray-3`}
                    ></div>
                  </div> */}
                </div>
                <div className="flex gap-x-2 items-center flex-row justify-center  cursor-pointer sm:mr-15 market-cap absolute top-1 right-2 sm:relative">
                  <h1 className="text-gray-3 text-sm  capitalize">
                    market cap
                  </h1>
                  <FaChevronDown className="text-gray-3 " />
                </div>
              </div>
            </div>
            <div className=" underline"></div>
            <div className="chains flex flex-col gap-y-7">
              <div className=" flex gap-x-14 flex-col gap-y-6 lg:flex-row">
                <div className="btc bg-gray-2 w-92px px-5 py-6 h-24 flex justify-between items-center">
                  <div className="flex items-center gap-x-3 h-14">
                    <img src={btc} alt="btc" className="" />
                    <div className="">
                      <h3 className="text-gray-3 mb-1 capitalize font-semibold">
                        bitcoin
                      </h3>
                      <h5 className="text-gray-3 mb-1 uppercase font-normal">
                        btc
                      </h5>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="font-semibold text-xl text-gray-3">
                      54372.94USD
                    </h2>
                    <h4 className="text-green-1 text-sm">-3.44%</h4>
                  </div>
                </div>
                <div className="tether bg-gray-2 w-92px px-5 py-6 h-24 flex justify-between items-center">
                  <div className="flex items-center gap-x-3 h-14">
                    <img src={tether} alt="tether" className="" />
                    <div className="">
                      <h3 className="text-gray-3 mb-1 capitalize font-semibold">
                        tether
                      </h3>
                      <h5 className="text-gray-3 mb-1 uppercase font-normal">
                        usdt
                      </h5>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="font-semibold text-xl text-gray-3">
                      1.02 USD
                    </h2>
                    <h4 className="text-green-1 text-sm">+2.43%</h4>
                  </div>
                </div>
              </div>
              <div className=" flex gap-x-14 flex-col gap-y-6 lg:flex-row">
                <div className="ethereum bg-gray-2 w-92px px-5 py-6 h-24 flex justify-between items-center">
                  <div className="flex items-center gap-x-3 h-14">
                    <img src={ethereum} alt="ethereum" className="" />
                    <div className="">
                      <h3 className="text-gray-3 mb-1 capitalize font-semibold">
                        ethereum
                      </h3>
                      <h5 className="text-gray-3 mb-1 uppercase font-normal">
                        eth
                      </h5>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="font-semibold text-xl text-gray-3">
                      54372.94USD
                    </h2>
                    <h4 className="text-green-1 text-sm">-3.44%</h4>
                  </div>
                </div>
                <div className="binance bg-gray-2 w-92px px-5 py-6 h-24 flex justify-between items-center">
                  <div className="flex items-center gap-x-3 h-14">
                    <img src={binance} alt="binance" className="" />
                    <div className="">
                      <h3 className="text-gray-3 mb-1 capitalize font-semibold">
                        binance coin
                      </h3>
                      <h5 className="text-gray-3 mb-1 uppercase font-normal">
                        bnb
                      </h5>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="font-semibold text-xl text-gray-3">
                      1.02 USD
                    </h2>
                    <h4 className="text-green-1 text-sm">+2.43%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wallet-balance -ml-10">
            <div className="balance">
              <h3 className="">wallet balance</h3>
              <h4 className="">btc</h4>
              <h2 className="">0.2993029</h2>
              <h5 className="">3,700 USD</h5>
              <button className="">withdraw</button>
            </div>
            <div className="latest-activities">
              <h3 className="">latest activities </h3>
              <div className="">
                <div className="withdraw flex">
                  <span className="flex items-center justify-center">
                    <FaArrowUp className="text-gray-4" />
                  </span>
                  <div className="activities-container">
                    <h5 className="">
                      withdraw <small className="uppercase">usdt</small>
                    </h5>
                    <h6 className="">complete</h6>
                    <p className="">992333.93USDT</p>
                  </div>
                  <p className="date-info">Dec 31, 2021</p>
                </div>
                <div className="withdraw flex">
                  <span className="flex items-center justify-center">
                    <FaArrowLeft className="text-gray-4" />
                  </span>
                  <div className="activities-container">
                    <h5 className="">
                      Exchanged <small className="uppercase">btc</small>
                    </h5>
                    <h6 className="">complete</h6>
                    <p className="">992333.93USDT</p>
                  </div>
                  <p className="date-info">Dec 31, 2021</p>
                </div>
                <div className="withdraw flex">
                  <span className="flex items-center justify-center">
                    <FaArrowUp className="text-gray-4" />
                  </span>
                  <div className="activities-container">
                    <h5 className="">
                      Deposit <small className="uppercase">uth</small>
                    </h5>
                    <h6 className="">complete</h6>
                    <p className="">992333.93USDT</p>
                  </div>
                  <p className="date-info">Dec 31, 2021</p>
                </div>
              </div>
              <div className="view-all flex justify-center items-center mt-5 mb-0 gap-x-4">
                <h5 className="capitalize text-gray-5">View All Activity</h5>
                <FaArrowRight className="text-gray-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
