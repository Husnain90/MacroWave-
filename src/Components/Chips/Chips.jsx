import React from "react";
import arrowUp from "../../assets/arrowUp.svg";
import arrowDown from "../../assets/arrow down.svg";

const Chips = ({ value, isArrow }) => {
  const num = parseFloat(value);

  return (
    <div className="flex items-center">
      <div
        className={`rounded-lg px-2 py-1  ${
          num < 0 ? "bg-[#FFD5D5]" : "bg-customBlue"
        }`}
      >
        {num + ` bps`}
      </div>

      <div>
        {isArrow === true ? (
          <img src={num < 0 ? arrowDown : arrowUp} alt="Arrow Up" />
        ) : null}
      </div>
    </div>
  );
};

export default Chips;
