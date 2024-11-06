import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { chart } from "highcharts/highstock";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./MacroTable.css";
import arrowUp from "../../assets/arrowUp.svg";
const tableData = {
  tableRow: ["EURUSD", 4.56, 1.65, 10.4, "-4.09bps", "6.5bps", 5.99],
  chartData: {
    xValue: [20, 15, 10, 5, 0, -5, -10, -15, -20],
    yValue: [10, 12, 14, 13, 11, 9, 7, 5, 3],
  },
};
const chartOptions = {
  chart: {
   
    type: "area",
    panning: false,
    zoomType: "",
    pinchType: "",
    width: 190,
    height: 85,
    padding: 0,
  },
  legend:{
    enabled:false
  },
  title: {
    text: " ",
  },
  xAxis: {
    title: {
      text: "X Axis Label",
    },
    categories: tableData.chartData.xValue,
  },
  yAxis: {
    title: {
      text: "Y Axis Label",
    },
  },
  series: [
    {
      type: "line",
      data: tableData.chartData.yValue,
      name: "Value",
    },
  ],
};
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
          <Td>10.7</Td>
          <Td>
            <div className=" flex flex-1  items-center justify-center " >
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default MacroTable;
