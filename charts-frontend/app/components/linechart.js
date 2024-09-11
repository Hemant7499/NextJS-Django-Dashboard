"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/line-chart-data/');
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!chartData) return;
    const ctx = chartRef.current.getContext('2d');
    const linechart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets: [{
          data: chartData.data,
          label: "LineChart",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }
        ]
      },
    });

    return () => {
      linechart.destroy();
    };
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default LineChart;