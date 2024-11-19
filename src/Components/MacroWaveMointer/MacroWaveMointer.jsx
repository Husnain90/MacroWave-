import React from "react";
import DropDown from "../DropDown/DropDown";
import MacroTable from "../Table/MacroTable";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";
import TestTable from "../Table/TestTable";

const MacroWaveMointer = () => {
  return (
    <div className="flex flex-col  gap-4 self-stretch mx-28 bg-[#FFFFFF] shadow-lightShadow">
      <div className="flex gap-8 ">
        <div className="flex flex-1 ">
          <h1 className="text-3xl font-medium ">Macro Hive Event Mointor</h1>
        </div>
      </div>
      <div className="  flex  flex-col gap-4 p-4  shadow-lightShadow border-0.5">
        <div className="  flex flex-1  items-stretch border-0.5 border-primary">
          <div className="flex flex-col md:flex-row items-center gap-2 flex-1 justify-between border-0.5">
            <div className="flex flex-col md:flex-row gap-2 items-center flex-1 ">
              <h3 className="text-meduimGrey text-[11px] font-normal text-[#6E6F71] ">
                Choose Event
              </h3>
              <CurrencyDropDown />
            </div>
            <div className="flex gap-2 items-center  h-10 justify-center flex-1">
              <h3 className="text- text-sm font-normal text-primary border-b-[1px] border-primary  ">
                Analyst’s Forecast
              </h3>
            </div>
            <div>
              <div className="flex  gap-2 items-center justify-center flex-1">
                <h3 className="text- text-[11px] font-normal text-meduimGrey text-[#6E6F71] ">
                  New Release
                </h3>
                <h3 className="text-sm bg-[#F3F3F3] py-1 px-2 rounded-lg">
                  20/10/2024
                </h3>
              </div>
            </div>
            <div className="flex  gap-2 items-center justify-end flex-1 ">
              <button className="bg-white border-[1px] border-primary text-sm text-primary px-5 py-2 rounded-lg">
                Switch Event View{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-stretch ">
          <MacroTable />
        </div>
      </div>
    </div>
  );
};

export default MacroWaveMointer;
