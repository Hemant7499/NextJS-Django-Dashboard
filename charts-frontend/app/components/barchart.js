"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/bar-chart-data/');
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

    var barchart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.labels,
            datasets: [{
                data: chartData.data,
                label: "BarChart",
                borderColor: "rgb(109, 253, 181)",
                backgroundColor: "rgb(109, 253, 181,0.5)",
                borderWidth: 2
            },
            ]
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
        },
    });

    return () => {
      barchart.destroy();
    };
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default BarChart;