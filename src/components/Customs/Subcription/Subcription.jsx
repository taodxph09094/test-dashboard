import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  BarChart,
  Bar,
} from "recharts";
import dataLineChart from "../../../data/dataLineChart";
const Subcription = () => {
  return (
    <div className="contentDashboard">
      <h1>Line Chart</h1>
      <div className="App">
        <LineChart
          width={730}
          height={250}
          data={dataLineChart}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Số người" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default Subcription;
