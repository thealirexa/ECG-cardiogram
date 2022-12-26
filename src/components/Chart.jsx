import { emptyFill, lightningChart } from "@arction/lcjs";
import React, { useEffect, useRef } from "react";

const ECGChart = (props) => {
  const { data, id } = props;
  const chartRef = useRef(undefined);

  useEffect(() => {
    console.log("create chart");
    const chart = lightningChart()
      .ChartXY({ container: id })
      .setPadding(0)
      .setBackgroundFillStyle(emptyFill)
      .setTitle("");
    const series = chart.addLineSeries();
    chartRef.current = { chart, series };
    return () => {
      console.log("destroy chart");
      chart.dispose();
      chartRef.current = undefined;
    };
  }, [id]);

  useEffect(() => {
    const components = chartRef.current;
    if (!components) return;
    const { series } = components;
    console.log("set chart data", data);
    series.add(data);
  }, [data, chartRef]);

  return <div id={id} className="h-100"></div>;
};

export default ECGChart;
