import React from "react";
import macroWave from "../../assets/macro wave.png";
import DropDown from "../DropDown/DropDown";

const NavBar = () => {
  return (
    <div className="flex h-76  px-16 py-0 items-center justify-between shadow-lightShadow w-full ">
      <div className="border-red-200 flex-1 items-start">
        <img src={macroWave} alt="" />
      </div>
      <div className="flex gap-15 border-2 items-center">
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
      <div className="flex  flex-1 border-3 justify-end  ">
        <div className="flex gap-x-4">
          <button className=" flex items-center justify-center text-primary text-sm border-primary py-3 px-5 rounded-lg  border-0.5 font-medium">
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
