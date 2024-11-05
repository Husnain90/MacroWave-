import React, { useState } from "react";
import DropDownArrow from "../DropDownArrow/DropDownArrow";
import "./DropDown.css";

const DropDown = () => {
  const list = ["Research", "data", "wave"];
  const [selectedValue, setSeletectedValue] = useState("");
  const handleSelectedValue = (e) => {
    setSeletectedValue(e.target.value);
  };
  return (
    <div className="flex border-2 font-medium leading-normal ">
      <select
        value={selectedValue}
        onChange={handleSelectedValue}
        className="custom-dropDown text-lg "
      >
        {list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="">
        <DropDownArrow />
      </div>
    </div>
  );
};

export default DropDown;
