import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import "./MacroTable.css";
import arrowUp from "../../assets/arrowUp.svg";
import Chips from "../Chips/Chips";
import GraphModel from "../GraphModel/GraphModel";

const dataArray = [
  {
    symbol: "EURUSD",
    avgDailyRealisedOps: 4.56,
    marketPricedEvent: "10/20/2014",
    marketImpliedAddOnVol: 1.65,
    marketImpliedAddOnBps: "4.09bps",
    historicReturnAddOnBps: "6.5bps",
    tStats: 5.99,
    chartData: {
      xValue: [20, 15, 10, 12, 8, 6, 2, -3, -7],
      yValue: [10, 11.2, 9.8, 8.5, 9.1, 7.9, 7.2, 6.8, 5.9],
    },
  },
  {
    symbol: "GBPUSD",
    avgDailyRealisedOps: 3.45,
    marketPricedEvent: "10/25/2014",
    marketImpliedAddOnVol: 2.45,
    marketImpliedAddOnBps: "2.05bps",
    historicReturnAddOnBps: "4.2bps",
    tStats: 6.12,
    chartData: {
      xValue: [10, 20, 30, 40, 50, 60],
      yValue: [12, 14, 13, 16, 18, 17],
    },
  },
  ,
  {
    symbol: "AUDUSD",
    avgDailyRealisedOps: 2.34,
    marketPricedEvent: "11/01/2014",
    marketImpliedAddOnVol: 1.15,
    marketImpliedAddOnBps: "-1.06bps",
    historicReturnAddOnBps: "5.8bps",
    tStats: 4.76,
    chartData: {
      xValue: [5, 10, 15, 20, 25, 30],
      yValue: [7.2, 7.8, 7.5, 7.1, 7.3, 7.6],
    },
  },
  {
    symbol: "USDJPY",
    avgDailyRealisedOps: 3.78,
    marketPricedEvent: "11/10/2014",
    marketImpliedAddOnVol: 1.85,
    marketImpliedAddOnBps: "3.02bps",
    historicReturnAddOnBps: "3.5bps",
    tStats: 6.35,
    chartData: {
      xValue: [5, 12, 20, 25, 28],
      yValue: [9.8, 10.4, 9.2, 10.0, 10.5],
    },
  },
  {
    symbol: "NZDUSD",
    avgDailyRealisedOps: 2.98,
    marketPricedEvent: "11/15/2014",
    marketImpliedAddOnVol: 1.45,
    marketImpliedAddOnBps: "-2.75bps",
    historicReturnAddOnBps: "2.9bps",
    tStats: 5.44,
    chartData: {
      xValue: [10, 20, 30, 40, 50],
      yValue: [8.0, 8.2, 8.1, 8.3, 8.5],
    },
  },
  {
    symbol: "USDCHF",
    avgDailyRealisedOps: 5.12,
    marketPricedEvent: "12/01/2014",
    marketImpliedAddOnVol: 2.3,
    marketImpliedAddOnBps: "1.05bps",
    historicReturnAddOnBps: "7.2bps",
    tStats: 6.5,
    chartData: {
      xValue: [5, 10, 15, 20, 25, 30],
      yValue: [12.5, 12.2, 11.9, 12.0, 12.7, 12.3],
    },
  },
];
const chartOptions = {
  chart: {
    type: "line",
    panning: false,
    zoomType: "",
    pinchType: "",
    width: 120,
    height: 50,
    padding: 0,
  },
  legend: {
    enabled: false,
  },
  title: {
    text: " ",
    align: "left",
  },
  credits: {
    enabled: false, // Disable the "highcharts.com" watermark
  },
  xAxis: {
    lineWidth: 0,
    gridLineWidth: 0,
    tickWidth: 0,
    tickLength: 0,
    labels: {
      enabled: false, // Enable x-axis labels
      style: {
        fontSize: "8px", // Adjust label font size if neede
      },
    },
  },
  yAxis: {
    lineWidth: 0, // Hide the y-axis line
    gridLineWidth: 0, // Hide the grid lines for y-axis
    tickWidth: 0, // Hide ticks on the y-axis
    labels: {
      enabled: false, // Disable y-axis labels (the vertical text you're seeing)
    },
  },
  // yAxis: {
  //   title: {
  //     text: "Y Axis Label",
  //   },
  // },
  series: [
    {
      type: "line",
      data: [],
      name: "Value",
      color: "#FF0000", // Red color for the line
      lineWidth: 1, // Line thickness
      lineJoin: "round", // Makes the corners rounded, which looks more "pointy"
      marker: {
        enabled: false, // Enable markers at each data point
        radius: 1, // Size of the marker
        symbol: "circle", // The shape of the marker, can also be "square", "diamond", etc.
        fillColor: "#FF0000", // Red fill color for the marker
        lineWidth: 1, // Border width of the marker
        lineColor: "#FF0000", // Border color for the marker
      },
    },
  ],
};
const MacroTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [graph, setGraph] = useState({});
  console.log(graph);
  const OpenModel = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Table>
      <Thead>
        <Tr className="flex items-stretch flex-1">
          <Th>Symbol</Th>
          <Th>Avg Daily Realised bps</Th>
          <Th>
            Market Priced Event <br />
            Weight*
          </Th>
          <Th>Market Implied Add On(Vol)</Th>
          <Th>
            Market Implied Add On <br />
            (bps)
          </Th>
          <Th>
            Historic return add On
            <br /> (bps)
          </Th>
          <Th>T-Stats(2y)</Th>
          <Th>T-Stats(2y)</Th>
        </Tr>
      </Thead>
      <Tbody>
        {dataArray.map((row, index) => (
          <Tr
            key={index}
            className=" border-b  border-[#C7C7Cb] md:h-[47px] flex items-start self-stretch"
            // onClick={setGraph(row.chartData)}
            onClick={() => {
              setGraph(row.chartData);
              OpenModel();
            }}
            
          >
            <Td>{row.symbol}</Td>
            <Td>{row.avgDailyRealisedOps}</Td>
            <Td>{row.marketPricedEvent}</Td>
            <Td>{row.marketImpliedAddOnVol}</Td>
            <Td>
              {/* <div className="flex items-center">
                <div className="bg-customBlue rounded-lg px-2 py-1">
                  {row.marketImpliedAddOnBps}
                </div>
                <div>
                  <img src={arrowUp} alt="Arrow Up" />
                </div>
              </div> */}
              <Chips value={row.marketImpliedAddOnBps} isArrow={true} />
            </Td>
            <Td>
              {/* <div className="flex items-center">
                <div className="bg-customBlue rounded-lg px-2 py-1">
                  {row.historicReturnAddOnBps}
                </div>
              </div> */}
              <Chips value={row.historicReturnAddOnBps} isArrow={false} />
            </Td>
            <Td>{row.tStats}</Td>
            <div className="graph">
              <Td>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={{
                    ...chartOptions,
                    series: [
                      { ...chartOptions.series[0], data: row.chartData.yValue },
                    ],
                  }}
                />
              </Td>
            </div>
          </Tr>
        ))}
      </Tbody>
      {isOpen && <GraphModel data={graph} closeModal={closeModal} />}
    </Table>
  );
};

export default MacroTable;
