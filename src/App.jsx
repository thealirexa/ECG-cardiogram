import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import {
  FaAccusoft,
  FaAddressBook,
  FaAdversal,
  FaAlgolia,
  FaThinkPeaks,
} from "react-icons/fa";

import React, { useEffect, useState } from "react";
import ECGChart from "./components/Chart";

export const App = () => {
  const [data1, setData1] = useState([]);
  const statuses = [
    <FaAccusoft />,
    <FaAddressBook />,
    <FaAdversal />,
    <FaAlgolia />,
  ];
  useEffect(() => {
    const interval1 = setInterval(() => {
      setData1([
        { x: 0, y: Math.random() * 100 },
        { x: 1, y: Math.random() * 100 },
        { x: 2, y: Math.random() * 100 },
        { x: 3, y: Math.random() * 100 },
        { x: 4, y: Math.random() * 100 },
      ]);
    }, 3000);

    return () => {
      clearInterval(interval1);
    };
  }, []);
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
