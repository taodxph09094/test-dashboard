import React from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import dataBarChart from "../../../data/dataBarChart";
const Revenue = () => {
  return (
    <div className="contentDashboard">
      <h1>Doanh thu từng tháng</h1>
      <div>
        <BarChart width={800} height={450} data={dataBarChart}>
          <CartesianGrid strokeDasharray="" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Doanh thu"
            fill="#8884d8"
            className="bar"
            label={{ position: "top", color: "white" }}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default Revenue;
