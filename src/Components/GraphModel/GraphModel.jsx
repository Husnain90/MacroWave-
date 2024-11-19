import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { chart } from "highcharts/highstock";

const GraphModel = ({ data, closeModal }) => {
  const handleCloseOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  const chartOptions = {
    chart: {
      type: "line",
      panning: false,
      zoomType: "",
      pinchType: "",
      width: 1246,
      height: 320,
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
        enabled: true, // Enable x-axis labels
        style: {
          fontSize: "8px", // Adjust label font size if neede
        },
      },
    },
    yAxis: {
      lineWidth: 0, // Hide the y-axis line
      gridLineWidth: 1, // Hide the grid lines for y-axis
      tickWidth: 0, // Hide ticks on the y-axis
      labels: {
        enabled: true, // Disable y-axis labels (the vertical text you're seeing)
        align: "left", // Align labels to the left of the y-axis
        x: -21, // Move labels closer to the left
        style: {
          fontSize: "10px",
        },
        // formatter: function () {
        //   return `${this.value} bps`; // Appending "bps" after the value
        // },
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
        data: data.yValue,
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
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#F65F5F"],
            [0.3, "#FA8D8D"],
            [1, "#FBF8F8"],
            [0, "#fffff"],
          ],
        },
      },
    ],
  };
  console.log("im the data in the graph ", data);
  return (
    <div
      className="modal-overlay absolute top-0 border-2 w-full h-full left-0 flex items-center justify-center  "
      onClick={handleCloseOutside}
    >
      <div className=" w-[81.25rem]  flex flex-col items-start p-[1.5rem] gap-[0.25rem] bg-white shadow-lightShadow">
        <div>
          <p className="text-[#6E6F71]  font-medium text-[1.5rem]">
            CPI Add On for{" "}
            <strong className="text-[#161E24] font-bold ">EURUSD</strong>
          </p>
        </div>
        <div className=" w-[77.875rem] h-[20rem] ">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default GraphModel;
