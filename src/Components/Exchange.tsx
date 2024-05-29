import React from "react";
import PerfectMoney from "../Assets/pm.svg";
import TeterIcon from "../Assets/USDT.png";
import { useEffect, useState } from "react";
import { numberWithCommas } from "../Utils/setCommas";
import { checkIsNumber } from "../Utils/checkNumbers";
import {
  getPMForUSDT,
  getRialForSell,
  getUSDTForPM,
  getUSDTForSell,
} from "../requests";
import Loader from "./loader";

export default function Exchange() {
  const [usdAmount, setUsdAmount] = useState("");
  const [PMAmount, setPMAmount] = useState("1");
  const [requestType, setRequestType] = useState<"USDT" | "PM">("PM");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (requestType === "PM") {
      const getData = async () => {
        setLoader(true);
        await getUSDTForPM(PMAmount, setUsdAmount);
        setLoader(false);
      };

      const timer = setTimeout(() => {
        if (PMAmount !== "") {
          getData();
        } else {
          setUsdAmount("0");
        }
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [PMAmount]);

  useEffect(() => {
    if (requestType === "USDT") {
      const getData = async () => {
        setLoader(true);
        await getPMForUSDT(usdAmount, setPMAmount);
        setLoader(false);
      };

      const timer = setTimeout(() => {
        if (usdAmount !== "") {
          getData();
        } else {
          setPMAmount("");
        }
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [usdAmount]);
  return (
    <div className="Sell_content_Container">
      {loader && <Loader />}
      <div className="Ditails_content_container">
        <div className="ItemTop_input_content">
          <div className="LuquidMoney_Content">
            <p className="TextStyle_Item">پرداختی</p>
            <p className="TextStyle_Item2">واحد</p>
          </div>
          <input
            value={numberWithCommas(PMAmount)}
            onChange={(e) => {
              setRequestType("PM");
              if (checkIsNumber(e.target.value) || e.target.value === "")
                setPMAmount(e.target.value);
            }}
            className="Input_style"
          ></input>
          <div className="CountyLiqud_content_conteiner">
            <div className="CountyLiqud_content">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L5.55833 5.5L2 9"
                  stroke="#23262F"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="StyleContentText_Country">
                <span className="StyleText1_Country">PM</span>
                <span className="StyleText2_Country">ووچر پرفکت مانی</span>
              </div>
              <img
                src={PerfectMoney}
                style={{ height: "25px", width: "25px" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="ItemTop_input_content">
          <div className="LuquidMoney_Content">
            <p className="TextStyle_Item">دریافتی</p>
            <p className="TextStyle_Item2">واحد</p>
          </div>
          <input
            value={numberWithCommas(usdAmount)}
            onChange={(e) => {
              setRequestType("USDT");
              if (checkIsNumber(e.target.value) || e.target.value === "")
                setUsdAmount(e.target.value);
            }}
            className="Input2_style"
          ></input>
          <div className="CountyLiqud_content_conteiner">
            <div className="CountyLiqud_content">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L5.55833 5.5L2 9"
                  stroke="#23262F"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="StyleContentText_Country">
                <span className="StyleText1_Country">USDT</span>
                <span className="StyleText2_Country">تتر</span>
              </div>
              <img
                src={TeterIcon}
                style={{ height: "25px", width: "25px" }}
              ></img>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="Button_content">
        <button className="StyleButton_content">مبادله</button>
      </div>
    </div>
  );
}
