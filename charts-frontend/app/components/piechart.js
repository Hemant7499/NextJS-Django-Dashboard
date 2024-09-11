"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PieChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/pie-chart-data/');
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if(!chartData) return;
    const ctx = chartRef.current.getContext('2d');

    var piechart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: chartData.labels,
            datasets: [{
                data: chartData.data,
                backgroundColor: [
                    "rgb(255,0,0, 0.7)",
                    "rgb(0,0,255, 0.7)",
                    "rgb(255,255,0, 0.7)",
                ],
                borderWidth: 2,
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allows the chart to resize to the container
        },
    });

    return () => {
        piechart.destroy();
    };
  }, [chartData]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
      <canvas ref={chartRef}/>
    </div>
  )
};

export default PieChart;