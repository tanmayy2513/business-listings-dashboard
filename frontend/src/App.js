import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF"
];

function App() {
  const [cityData, setCityData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [sourceData, setSourceData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const cityRes = await fetch("http://127.0.0.1:8000/stats/city");
        const cityJson = await cityRes.json();

        setCityData(
          cityJson.map(item => ({
            city: item[0],
            count: item[1]
          }))
        );

        const categoryRes = await fetch("http://127.0.0.1:8000/stats/category");
        const categoryJson = await categoryRes.json();

        setCategoryData(
          categoryJson.map(item => ({
            category: item[0],
            count: item[1]
          }))
        );

        const sourceRes = await fetch("http://127.0.0.1:8000/stats/source");
        const sourceJson = await sourceRes.json();

        setSourceData(
          sourceJson.map(item => ({
            source: item[0],
            count: item[1]
          }))
        );
      } catch (error) {
        console.error("FETCH ERROR:", error);
      }
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Business Listings Dashboard</h1>

      <h2>City Wise Business Count</h2>
      <BarChart width={700} height={300} data={cityData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#4285F4" />
      </BarChart>

      <h2>Category Wise Business Count</h2>
      <PieChart width={600} height={350}>
        <Pie
          data={categoryData}
          dataKey="count"
          nameKey="category"
          outerRadius={120}
          label
        >
          {categoryData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <h2>Source Wise Business Count</h2>
      <BarChart width={700} height={300} data={sourceData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="source" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#34A853" />
      </BarChart>
    </div>
  );
}

export default App;