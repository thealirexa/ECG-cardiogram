import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import { FaThinkPeaks } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import ECGChart from "./components/Chart";

import io from "socket.io-client";

const socket = io.connect("http://localhost:8231");
export const App = () => {
  const [data1, setData1] = useState([]);
  let [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  useEffect(() => {
    socket.on("receive_data", (sd) => {
      let arr = [];
      console.log(sd.data.ecg);
      sd.data.ecg.map((d) => {
        arr.push({ x: counter, y: d });
        setCounter(counter++);
      });
      setData1(arr);
    });
  }, [socket]);
  return (
    <div className="row p-0 m-0">
      <div className="fill col-8 mt-3">
        <ECGChart id="chart-1" data={data1} />
      </div>
      <div className="col-4">
        <div className="my-2">
          <div className="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex mt-4">
            <FaThinkPeaks color="white" size={32} className="mx-2" />
            <span className="h2 text-light">DarmanToos</span>
          </div>

          <hr className="bg-info" />
          <button type="button" className="btn btn-outline-success col-12 my-1">
            Charge
          </button>

          <button type="button" className="btn btn-outline-warning col-12 my-1">
            Status
          </button>
        </div>
      </div>
    </div>
  );
};
