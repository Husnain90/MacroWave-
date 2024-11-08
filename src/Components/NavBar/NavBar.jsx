import React from "react";
import macroWave from "../../assets/macro wave.png";
import DropDown from "../DropDown/DropDown";

const NavBar = () => {
  return (
    <div className=" h-full flex flex-col  md:h-76  px-16 py-0  items-center justify-between shadow-lightShadow w-full md:flex-row bg-[#FFFFFF] ">
      <div className="border-red-200 flex-1 items-start">
        <img src={macroWave} alt="" />
      </div>
      <div className="flex gap-15 border-2 items-center">
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
      <div className="flex  flex-1  justify-end  ">
        <div className="flex gap-x-4 m-2 md:mb-0  ">
          <button className=" flex items-center justify-center text-primary text-sm  py-3 px-5 rounded-lg border border-primary  font-medium">
            Login
          </button>
          <button className="flex items-center justify-center text-white text-sm bg-primary  py-3 px-5 rounded-lg  font-medium">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
