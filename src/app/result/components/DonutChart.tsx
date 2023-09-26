import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "@emotion/styled";
import { DUMMY_DONUT_COLOR, relationshipType } from "../constants/dummy";

const DonutLabel = `
  <svg
    width="26"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="18" rx="9" fill="black" />
    <path
      d="M6.875 4.25H8.625V13H12.125V12.125H13.875V13H13V13.875H7.75V13H6.875V4.25ZM15.625 3.375H17.375V8.625H20V9.5H17.375V14.75H15.625V3.375Z"
      fill="white"
    />
    <path
      d="M13.866 20.5C13.4811 21.1667 12.5189 21.1667 12.134 20.5L10.4019 17.5C10.017 16.8333 10.4982 16 11.268 16L14.7321 16C15.5019 16 15.983 16.8333 15.5981 17.5L13.866 20.5Z"
      fill="black"
    />
  </svg>
`;

const CHART_WIDTH = 208;
const CHART_HEIGHT = CHART_WIDTH;
const CHART_RADIUS = 80;

const Wrapper = styled.div`
  position: relative;
  width: ${CHART_WIDTH};
  height: ${CHART_HEIGHT};
`;

interface DonutChartProps {
  type: relationshipType;
  data: {
    type: relationshipType;
    point: number;
  }[];
}

const DonutChart = ({ type, data }: DonutChartProps) => {
  const DUMMY_POINT = data.map((d) => d.point);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    drawDonutChart();
    const intervalId = setInterval(() => {
      drawDonutChart();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const drawDonutChart = () => {
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    svg.append("defs").append("g").attr("id", "donutLabel").html(DonutLabel);

    svg
      .attr("width", CHART_WIDTH)
      .attr("height", CHART_HEIGHT)
      .attr("id", "graphWrap");

    const g = svg
      .append("g")
      .attr("transform", `translate(${CHART_WIDTH / 2},${CHART_HEIGHT / 2})`);

    // 파이 레이아웃 정의
    const pie = d3.pie();

    // 부채꼴 그리기 (도넛 섹션)
    const arcs = g
      .selectAll(".arc")
      .data(pie(DUMMY_POINT))
      .enter()
      .append("g")
      .attr("class", "arc");

    const arcGenerator = d3
      .arc()
      .innerRadius(CHART_RADIUS / 3.5)
      .outerRadius(CHART_RADIUS);

    arcs.selectAll("path").remove();

    arcs
      .append("path")
      .attr("fill", (_, i) => DUMMY_DONUT_COLOR[data[i].type])
      .each(function (this: any, d: any) {
        this._current = d;
      })
      .transition()
      .duration(1000)
      .attrTween("d", function (d: any) {
        var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t: any) {
          return arcGenerator(interpolate(t)) || "";
        };
      })
      .on("end", function (_, i) {
        if (i === DUMMY_POINT.length - 1) {
          let labelsGroup = g
            .selectAll(".label-group")
            .data(pie(DUMMY_POINT))
            .enter()
            .append("g")
            .filter(
              (value) =>
                value.data ===
                data.filter((value) => value.type === type)[0].point
            );

          labelsGroup
            .append("use")
            .attr("xlink:href", "#donutLabel")
            .attr("x", function (d: any) {
              var [x] = arcGenerator.centroid(d);
              return x - 13;
            })
            .attr("y", function (d: any) {
              var [, y] = arcGenerator.centroid(d);
              return y - 12;
            })
            .attr("width", 26)
            .attr("height", 24)
            .style("opacity", 0)
            .transition()
            .duration(300)
            .style("opacity", 1);
        }
      });
  };

  return (
    <Wrapper>
      <svg ref={svgRef}>
        <defs>
          <g id="donutLabel">{DonutLabel}</g>
        </defs>
      </svg>
    </Wrapper>
  );
};

export default DonutChart;
