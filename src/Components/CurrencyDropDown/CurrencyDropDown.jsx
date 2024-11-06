import React, { useState } from "react";
import DropDownArrow from "../DropDownArrow/DropDownArrow";
import "./CurrencyDropDown";

const CurrencyDropDown = () => {
  const list = ["Jobless Claims", "data", "wave"];
  const [selectedValue, setSeletectedValue] = useState("");
  const handleSelectedValue = (e) => {
    setSeletectedValue(e.target.value);
  };
  return (
    <div className=" border-2  rounded-lg  gap-2  flex font-normal leading-normal text-sm py-1 px-4">
      <div className="flex w-[8.75rem]">
        <select
          value={selectedValue}
          onChange={handleSelectedValue}
          className="custom-dropDown"
        >
          {list.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="">
        <DropDownArrow />
      </div>
    </div>
  );
};

export default CurrencyDropDown;
