import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import "./contacts.css";

const KaryakarthaDetails = ({ selectedKaryakartha }) => {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  if (!selectedKaryakartha) {
    return null;
  }

  return (
    <div className="karyakartha-details p-4 bg-gray-100 border rounded-md">
      <h2 className="karyakartha-title">Karyakartha Details</h2>
      <p className="karyakartha-info">
        <strong>Username:</strong> {selectedKaryakartha.username}
      </p>
      <p className="karyakartha-info">
        <strong>Phone:</strong> {selectedKaryakartha.phoneNo}
      </p>
      <p className="karyakartha-info">
        <strong>Area:</strong> {selectedKaryakartha.area}
      </p>
      <p className="karyakartha-info">
        <strong>Lead:</strong> {selectedKaryakartha.lead}
      </p>
      <p className="karyakartha-info">
        <strong>Assembly:</strong> {selectedKaryakartha.assembly}
      </p>
      <p className="karyakartha-info">
        <strong>Parliament:</strong> {selectedKaryakartha.parlament}
      </p>
      <p className="karyakartha-info">
        <strong>Verified:</strong>{" "}
        {selectedKaryakartha.verified ? (
          <span className="karyakartha-verified">Yes</span>
        ) : (
          <span className="karyakartha-not-verified">No</span>
        )}
      </p>
    </div>
  );
};

export default KaryakarthaDetails;
