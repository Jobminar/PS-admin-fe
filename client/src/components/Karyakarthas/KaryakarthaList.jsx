// KaryakarthaList.jsx
import React, { useEffect, useState } from "react";
import "./KaryakarthaList.css"; // Create a new CSS file for styling

const KaryakarthaList = () => {
  const [karyakarthas, setKaryakarthas] = useState([]);
  const [data, setData] = useState({
    _id: "",
    username: "",
    phoneNo: "",
    password: "",
    area: "",
    lead: "",
    assembly: "",
    parlament: "",
  });

  const { _id, username, phoneNo, password, area, lead, assembly, parlament } =
    data;

  useEffect(() => {
    const fetchKaryakarthas = async () => {
      try {
        const response = await fetch("http://localhost:4000/getallkaryakarta");
        const data = await response.json();
        setKaryakarthas(data);
      } catch (error) {
        console.error("Error fetching Karyakarthas:", error);
      }
    };

    fetchKaryakarthas();
  }, []);

  const editHandler = (karyakartha) => {
    setData({
      _id: karyakartha._id,
      username: karyakartha.username,
      phoneNo: karyakartha.phoneNo,
      password: karyakartha.password,
      area: karyakartha.area,
      lead: karyakartha.lead,
      assembly: karyakartha.assembly,
      parlament: karyakartha.parlament,
    });
  };

  const handleUpdate = async () => {
    try {
      if (!_id) {
        console.error("No Karyakartha selected for update");
        return;
      }

      const response = await fetch(
        `http://localhost:4000/karyakartha/update/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const updatedKaryakarthas = await response.json();
        setKaryakarthas(updatedKaryakarthas);
        setData({
          _id: "",
          username: "",
          phoneNo: "",
          password: "",
          area: "",
          lead: "",
          assembly: "",
          parlament: "",
        });
      } else {
        console.error("Failed to update Karyakartha");
      }
    } catch (error) {
      console.error("Error updating Karyakartha:", error);
    }
  };

  return (
    <div className="karyakartha-list-container">
      <h1>All Karyakarthas</h1>
      <div className="karyakartha-cards">
        {karyakarthas.map((karyakartha) => (
          <div className="karyakartha-card" key={karyakartha._id}>
            <p className="karyakartha-field">
              Username: {karyakartha.username}
            </p>
            <p className="karyakartha-field">Phone: {karyakartha.phoneNo}</p>
            <p className="karyakartha-field">
              Password: {karyakartha.password}
            </p>
            <p className="karyakartha-field">
              Verified: {karyakartha.verified ? "Yes" : "No"}
            </p>
            <p className="karyakartha-field">Area: {karyakartha.area}</p>
            <p className="karyakartha-field">Lead: {karyakartha.lead}</p>
            <p className="karyakartha-field">
              Assembly: {karyakartha.assembly}
            </p>
            <p className="karyakartha-field">
              Parliament: {karyakartha.parlament}
            </p>
            <button onClick={() => editHandler(karyakartha)}>Edit</button>
          </div>
        ))}
      </div>

      <h2>Update Karyakartha</h2>
      {/* Update Form */}
      <form className="update-form">
        <h2>Update Karyakartha</h2>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phoneNo">Phone:</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => setData({ ...data, phoneNo: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label htmlFor="area">Area:</label>
          <input
            type="text"
            id="area"
            name="area"
            value={area}
            onChange={(e) => setData({ ...data, area: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label htmlFor="lead">Lead:</label>
          <input
            type="text"
            id="lead"
            name="lead"
            value={lead}
            onChange={(e) => setData({ ...data, lead: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label htmlFor="assembly">Assembly:</label>
          <input
            type="text"
            id="assembly"
            name="assembly"
            value={assembly}
            onChange={(e) => setData({ ...data, assembly: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label htmlFor="parlament">Parliament:</label>
          <input
            type="text"
            id="parlament"
            name="parlament"
            value={parlament}
            onChange={(e) => setData({ ...data, parlament: e.target.value })}
          />
        </div>

        <button type="button" onClick={handleUpdate}>
          Update Karyakartha
        </button>
      </form>
    </div>
  );
};

export default KaryakarthaList;
