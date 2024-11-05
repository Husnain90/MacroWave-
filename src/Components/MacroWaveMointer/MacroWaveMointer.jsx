import React from "react";
import DropDown from "../DropDown/DropDown";
import MacroTable from "../Table/MacroTable";

const MacroWaveMointer = () => {
  return (
    <div className="flex flex-col   gap-8 self-stretch mx-28 ">
      <div className="flex gap-8">
        <div className="flex flex-1 ">
          <h1 className="text-3xl font-medium ">Macro Hive Event Mointor</h1>
        </div>
        <div className="flex flex-1 justify-end ">
          <div className="flex items-center">
            <DropDown />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 items-start">
        <MacroTable />
      </div>
    </div>
  );
};

export default MacroWaveMointer;
