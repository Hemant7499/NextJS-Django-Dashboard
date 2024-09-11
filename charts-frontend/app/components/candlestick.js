"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import {CandlestickElement, CandlestickController } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';

Chart.register(CandlestickElement, CandlestickController)
Chart.register(...registerables);

const CandlestickChart = ({  }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/candlestick-data/');
        var data = await response.json();
        data = data.map(item => ({
          ...item,
          x: new Date(item.x)
        }));
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
    const candlestickChart = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [
          {
            label: 'Candlestick Data',
            data: chartData,
            color: {
              up: 'green',
              down: 'red',
              unchanged: 'gray',
            },
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
          },
          y: {
            beginAtZero: false,
          },
        },
      },
    });

    return () => {
      candlestickChart.destroy();
    };
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default CandlestickChart;