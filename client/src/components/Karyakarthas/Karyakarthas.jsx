// Karyakartha.jsx
import React, { useEffect, useState } from "react";
import "./karyakartha.css";
import { useNavigate } from "react-router-dom";
import MapComponent from "../Maps/Map";

const Karyakartha = () => {
  const navigate = useNavigate();
  const [karyakarthaData, setKaryakarthaData] = useState([]);
  const [selectedkaryakartha, setselectedkaryakartha] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://voters-be.onrender.com/getallkaryakarta"
        );
        const data = await response.json();
        setKaryakarthaData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = async (id, selectedValue) => {
    try {
      const response = await fetch(
        `https://voters-be.onrender.com/verify/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("States verified");
        window.location.reload();
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleview = (karyakartha) => {
    setselectedkaryakartha(karyakartha);
    navigate("/viewpage", { state: { selectedkaryakartha: karyakartha } });
    const karyakarthaId = karyakartha._id;
    sessionStorage.setItem("karyakarths_id", karyakarthaId);
  };

  const handleaddkaryakartha = () => {
    navigate("/addkaryakartha");
  };

  return (
    <>
      <div className="getkaryakartha-con">
        <div className="head-flex">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1>Non-verified Karyakarthas list</h1>
          <button onClick={handleaddkaryakartha}>Add Karyakartha</button>
        </div>

        <table className="karyakartha-table" border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Non-verified List</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
          {karyakarthaData
            .filter(karyakarta => !karyakarta.verified) // Filter entries where verified is false
            .map((karyakarta, index) => (
              <tr key={index}>
                <td>{karyakarta.username}</td>
                <td>{karyakarta.phoneNo}</td>
                <td className="verified-button">
                  <button onClick={() => handleStatusChange(karyakarta._id, karyakarta.verified ? 'true' : 'false')}>
                    Verify now
                  </button>
                </td>
              </tr>
          ))}

          </tbody>
        </table>
      </div>

      <div className="getkaryakartha-con">
        <h1>Verified Karyakarthas list</h1>
        <table className="karyakartha-table" border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>View Karyakartha</th>
              <th>Map</th>
            </tr>
          </thead>
          <tbody>
            {karyakarthaData
              .filter((karyakarta) => karyakarta.verified)
              .map((karyakarta, index) => (
                <tr key={index}>
                  <td>{karyakarta.username}</td>
                  <td>{karyakarta.phoneNo}</td>
                  <td>Verified</td>
                  <td className="view" onClick={() => handleview(karyakarta)}>
                    View
                  </td>
                  <td className="map-container">
                    <MapComponent
                      latitude={karyakarta.latitude}
                      longitude={karyakarta.longitude}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Karyakartha;
