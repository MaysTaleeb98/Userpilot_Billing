import Chart from "react-apexcharts";
import React from "react";

export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
              margin: 0,
              size: "100%",
              background: "blue",
              image: undefined,
              imageOffsetX: 20,
              imageOffsetY: 20,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 10,
                left: 0,
                blur: 1,
                opacity: 0.24,
              },
            },
            track: {
              background: "blue",
              strokeWidth: "90%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -10,
                show: true,
                color: "#85f",
                fontSize: "25px",
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#543",
                fontSize: "25px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.75,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: [],
      },

      seriesRadial: [this.props.percentage * 100],

      optionsRadial1: {
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
              margin: 0,
              size: "65%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 1,
                left: 0,
                blur: 1,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "37%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: 0,
                show: true,
                color: "#888",
                fontSize: "25px",
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#888",
                fontSize: "25px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: ["#FF00FF"],
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#43467F", "#BA55D3", "rgb(61, 61, 175)"],
            opacityFrom: 5,
            opacityTo: 5,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["%"],
      },
    };
  }

  render() {
    return (
      <Chart
        series={this.state.seriesRadial}
        options={this.state.optionsRadial1}
        color="#8a13478c"
        type="radialBar"
        width="300"
        align="center"
      />
    );
  }
}
