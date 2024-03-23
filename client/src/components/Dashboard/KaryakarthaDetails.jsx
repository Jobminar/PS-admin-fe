import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import "./contacts.css";
import PropTypes from "prop-types";

// Define an interface for the expected Karyakartha object

const KaryakarthaDetails = ({ selectedKaryakartha, onKaryakarthaSelect }) => {
  // Use useRef to create a reference to the parent element
  const parentRef = useRef(null);

  useEffect(() => {
    console.log("KaryakarthaDetails component mounted");

    // Check if the parentRef is available before applying autoAnimate
    if (parentRef.current) {
      autoAnimate(parentRef.current);
      console.log("Auto animate triggered");
    }

    // Clean up when the component is unmounted
    return () => {
      console.log("KaryakarthaDetails component unmounted");
    };
  }, []); // Dependency array is empty to run the effect only once on mount

  if (!selectedKaryakartha) {
    return null; // If no Karyakartha is selected, return null
  }

  // Click handler for details, sends Karyakartha details to the parent component
  const handleDetailsClick = () => {
    console.log(
      "Details clicked. Sending Karyakartha details to parent component:",
      {
        username: selectedKaryakartha.username,
        phoneNo: selectedKaryakartha.phoneNo,
      }
    );

    // Send the Karyakartha name and phone number to the parent component
    onKaryakarthaSelect({
      username: selectedKaryakartha.username,
      phoneNo: selectedKaryakartha.phoneNo,
    });
  };

  // JSX structure for rendering Karyakartha details
  return (
    <div
      ref={parentRef} // Attach the ref to the parent element
      className="karyakartha-details p-4 bg-gray-100 border rounded-md"
      onClick={handleDetailsClick} // Clicking on details deselects the Karyakartha
    >
      <h2 className="karyakartha-title">Karyakartha Details</h2>
      <p className="karyakartha-info">
        <strong>Username:</strong> {selectedKaryakartha.username}
      </p>
      <p className="karyakartha-info">
        <strong>Phone:</strong> {selectedKaryakartha.phoneNo}
      </p>
      <p className="karyakartha-info">
        <strong>Area:</strong> {selectedKaryakartha.area || "N/A"}{" "}
        {/* Display N/A for missing area */}
      </p>
      <p className="karyakartha-info">
        <strong>Lead:</strong> {selectedKaryakartha.lead || "N/A"}{" "}
        {/* Display N/A for missing lead */}
      </p>
      <p className="karyakartha-info">
        <strong>Assembly:</strong> {selectedKaryakartha.assembly || "N/A"}{" "}
        {/* Display N/A for missing assembly */}
      </p>
      <p className="karyakartha-info">
        <strong>Parliament:</strong> {selectedKaryakartha.parlament || "N/A"}{" "}
        {/* Display N/A for missing parliament */}
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

KaryakarthaDetails.propTypes = {
  selectedKaryakartha: PropTypes.shape({
    username: PropTypes.string.isRequired,
    phoneNo: PropTypes.string.isRequired,
    area: PropTypes.string,
    lead: PropTypes.string,
    assembly: PropTypes.string,
    parlament: PropTypes.string,
    verified: PropTypes.bool.isRequired,
  }).isRequired,
  onKaryakarthaSelect: PropTypes.func.isRequired,
};

export default KaryakarthaDetails;
