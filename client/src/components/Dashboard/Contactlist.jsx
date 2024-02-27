import React, { useState, useEffect } from "react";
import axios from "axios";

const Contactlist = ({ handleview }) => {
  const [karyakarthas, setKaryakarthas] = useState([]);

  useEffect(() => {
    axios
      .get("https://voters-be.onrender.com/getallkaryakarta")
      .then((response) => {
        setKaryakarthas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <ul className="karyakartha-list bg-white rounded-lg shadow-md p-4">
      {karyakarthas.map((karyakartha) => (
        <li
          key={karyakartha._id}
          className="karyakartha-item flex items-center justify-between p-3 my-2 rounded-md cursor-pointer bg-green-50 hover:bg-green-100 transition-all duration-300"
          onClick={() => handleview(karyakartha)}
        >
          <div className="flex flex-col">
            <div className="karyakartha-name font-semibold text-lg">
              {karyakartha.username}
            </div>
            <div className="karyakartha-phone text-gray-600">
              {karyakartha.phoneNo}
            </div>
          </div>
          <div className="karyakartha-status">
            {karyakartha.verified ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="green"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Contactlist;
