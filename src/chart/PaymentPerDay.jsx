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
const PaymentPerDay = ({ chartData }) => {
  const dates = chartData.map((data) => data?.created_date);
  const labels = dates.filter((data, index) => dates.indexOf(data) === index);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Payment Data",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Payment(s) Success",
        data: chartData
          .filter((data) => data.status === "complete")
          .map((data) => data?.count),
        borderColor: "#34c3ff",
        backgroundColor: "#34c3ff",
      },
      {
        label: "Payment(s) Error",
        data: chartData
          .filter((data) => data.status === "expired")
          .map((data) => data?.count),
        borderColor: "#D70040",
        backgroundColor: "#D70040",
      },
    ],
  };
  return <Line style={{ marginLeft: 40 }} options={options} data={data} />;
};

export default PaymentPerDay;
