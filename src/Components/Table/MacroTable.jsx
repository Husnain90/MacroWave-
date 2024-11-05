import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./MacroTable.css";
import arrowUp from "../../assets/arrowUp.svg"
const MacroTable = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Symbol</Th>
          <Th>Avg Daily Realised bps</Th>
          <Th>
            Market Priced Event <br /> Weight*
          </Th>
          <Th>
            Market Implied Add on <br /> (bps)
          </Th>
          <Th>T-Stats(2y)</Th>
          <Th>T-Stats(2y)</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Payrolls</Td>
          <Td>job</Td>
          <Td>20/10/2014</Td>
          <Td>1.65</Td>
          <Td>
            <div className="flex items-center ">
              <div className="bg-customBlue rounded-lg px-2 py-1">10.4</div>
              <div>
                <img src={arrowUp} alt="" />
              </div>
            </div>
          </Td>
          <Td>
           10.7
          </Td>
          <Td>
            <div className="flex items-center ">
              <div className="bg-customBlue rounded-lg px-2 py-1">10.4</div>
            </div>
          </Td>
          <Td>East Annex</Td>
        </Tr>
        <Tr>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
        </Tr>
        <Tr>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default MacroTable;
