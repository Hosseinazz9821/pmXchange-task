import { useEffect, useState } from "react";
import flagIran from "../Assets/irt.svg";
import TeterIcon from "../Assets/USDT.png";
import { numberWithCommas } from "../Utils/setCommas";
import { checkIsNumber } from "../Utils/checkNumbers";
import { getRialForSell, getUSDTForSell } from "../requests";
import Loader from "./loader";

export default function Sell() {
  const [usdAmount, setUsdAmount] = useState("1");
  const [rialAmount, setRialAmount] = useState("");
  const [requestType, setRequestType] = useState<"USDT" | "RIAL">("USDT");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (requestType === "RIAL") {
      const getData = async () => {
        setLoader(true);
        await getUSDTForSell(rialAmount, setUsdAmount);
        setLoader(false);
      };

      const timer = setTimeout(() => {
        if (rialAmount !== "") {
          getData();
        } else {
          setUsdAmount("0");
        }
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [rialAmount]);

  useEffect(() => {
    if (requestType === "USDT") {
      const getData = async () => {
        setLoader(true);
        await getRialForSell(usdAmount, setRialAmount);
        setLoader(false);
      };

      const timer = setTimeout(() => {
        if (usdAmount !== "") {
          getData();
        } else {
          setRialAmount("");
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
        </div>
        <div className="ItemTop_input_content">
          <div className="LuquidMoney_Content">
            <p className="TextStyle_Item">دریافتی</p>
            <p className="TextStyle_Item2">واحد</p>
          </div>
          <input
            value={numberWithCommas(rialAmount)}
            onChange={(e) => {
              setRequestType("RIAL");
              if (checkIsNumber(e.target.value) || e.target.value === "")
                setRialAmount(e.target.value);
            }}
            className="Input_style3"
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
                <span className="StyleText1_Country">IRT</span>
                <span className="StyleText2_Country">تومان</span>
              </div>
              <img src={flagIran}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="Button_content">
        <button className="StyleButton_content">فروش</button>
      </div>
    </div>
  );
}
