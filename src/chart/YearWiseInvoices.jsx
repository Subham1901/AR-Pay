import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const YearWiseInvoices = ({ chartData }) => {
  const labels = chartData?.map((data) => data?.year);
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "AR Items",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Invoices per year",
        data: chartData?.map((data) => data?.invoices),
        borderColor: "#34c3ff",
        backgroundColor: "#34c3ff",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default YearWiseInvoices;
