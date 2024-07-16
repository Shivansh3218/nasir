import React, { useEffect, useState } from "react";
import "./App.css";
import arr from "./assets/array.json";
import karjat from "./assets/karjat.json";
import dhawalgaon from "./assets/dhawalgaon.json";
import ambad from "./assets/ambad.json";
const App = () => {
  const [saplings, setSaplings] = useState([]);
  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    // Fetch saplings data
    fetch("/src/assets/saplings_master.json")
      .then((response) => response.json())
      .then((data) => {
        setSaplings(data);
        console.log(data, "data");
      })
      .catch((error) => console.error("Error fetching saplings:", error));

    // Fetch warehouse data
    fetch("/src/assets/saplinginwardoutward.json")
      .then((response) => response.json())
      .then((data) => {
        setWarehouse(data.sapling_stock_res_by_sapling);
        console.log(data, "warehouse data");
      })
      .catch((error) => console.error("Error fetching warehouse:", error));
  }, []);



  return (
    <div>
      <h1>Saplings and Warehouse Stock</h1>
      <table>
        <thead>
          <tr>
            <th colspan="2">Warehouse Name</th>
            {saplings.map((sapling) => {
              return <th>{sapling.saplings_name}</th>;
            })}
          </tr>
          <tr>
            <th colspan="2" className="head-heading">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="name">Dhawalgaon</div>
                <div
                  className="properties"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Total Stock</span>
                  <span>Total Distribute</span>
                  <span>Balance Stock</span>
                </div>
              </div>
            </th>
            {arr.map((item) => {
              return (
                <td>
                  <div>{item.sum_sapling_inward}</div>
                  <div>{item.sum_sapling_outward}</div>
                  <div>{item.sapling_balance_stock}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <th colspan="2">Warehouse Name</th>
            {dhawalgaon.map((item) => {
              return (
                <td>
                  <div>{item.inward}</div>
                  <div>{item.outward}</div>
                  <div>{item.balance}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <th colspan="2">Warehouse Name</th>
            {ambad.map((item) => {
              return (
                <td>
                  <div>{item.inward}</div>
                  <div>{item.outward}</div>
                  <div>{item.balance}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <th colspan="2">Warehouse Name</th>
            {karjat.map((item) => {
              return (
                <td>
                  <div>{item.inward}</div>
                  <div>{item.outward}</div>
                  <div>{item.balance}</div>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
