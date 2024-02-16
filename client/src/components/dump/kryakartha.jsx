<div className="flex flex-col md:flex-row items-start justify-between py-8 space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">My Karyakarthas</h2>
          <Karyakarthaform
            name={name}
            phone={phone}
            email={email}
            address={address}
            setName={setName}
            setPhone={setPhone}
            setEmail={setEmail}
            setAddress={setAddress}
            handleSubmit={handleSubmit}
          />
          <Karyakarthatable
            data={data}
            isLoading={isLoading}
            isError={isError}
            error={error}
            handleDelete={handleDelete}
            handleVerify={handleVerify}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">Karyakarthas Map</h2>
          {/* <KaryakarthaMap
            data={data}
            mapboxToken={mapboxToken}
            mapboxStyle={mapboxStyle}
          /> */}
        </div>
      </div>



 // Define the state variables for the karyakarthas data and the loading, error, and success states
 const [data, setData] = React.useState([]);
 const [isLoading, setIsLoading] = React.useState(false);
 const [isError, setIsError] = React.useState(false);
 const [error, setError] = React.useState(null);
 const [isSuccess, setIsSuccess] = React.useState(false);

 // Define the state variables for the form inputs
 const [name, setName] = React.useState("");
 const [phone, setPhone] = React.useState("");
 const [email, setEmail] = React.useState("");
 const [address, setAddress] = React.useState("");

 // Define the handler function for the form submission
 const handleSubmit = (e) => {
   e.preventDefault();
   // Validate the form inputs using a helper function
   if (!validateForm(name, phone, email, address)) {
     alert("Please fill all the fields");
     return;
   }
   // Call the addKaryakartha function from the api file with the form data
   addKaryakartha({ name, phone, email, address })
     .then((response) => {
       // If the response is successful, update the data state with the new karyakartha
       setData((prevData) => [...prevData, response.data]);
       // Set the success state to true
       setIsSuccess(true);
     })
     .catch((error) => {
       // If the response is an error, set the error state to true and the error message to the error
       setIsError(true);
       setError(error.message);
     });
   // Reset the form inputs
   setName("");
   setPhone("");
   setEmail("");
   setAddress("");
 };

 // Define the handler function for deleting a karyakartha
 const handleDelete = (id) => {
   // Confirm the deletion
   if (window.confirm("Are you sure you want to delete this karyakartha?")) {
     // Call the deleteKaryakartha function from the api file with the karyakartha id
     deleteKaryakartha(id)
       .then((response) => {
         // If the response is successful, update the data state by filtering out the deleted karyakartha
         setData((prevData) => prevData.filter((k) => k.id !== id));
         // Set the success state to true
         setIsSuccess(true);
       })
       .catch((error) => {
         // If the response is an error, set the error state to true and the error message to the error
         setIsError(true);
         setError(error.message);
       });
   }
 };

 // Define the handler function for verifying a karyakartha
 const handleVerify = (id) => {
   // Call the verifyKaryakartha function from the api file with the karyakartha id
   verifyKaryakartha(id)
     .then((response) => {
       // If the response is successful, update the data state by mapping over the karyakarthas and updating the verified flag of the verified karyakartha
       setData((prevData) =>
         prevData.map((k) => (k.id === id ? { ...k, verified: true } : k))
       );
       // Set the success state to true
       setIsSuccess(true);
     })
     .catch((error) => {
       // If the response is an error, set the error state to true and the error message to the error
       setIsError(true);
       setError(error.message);
     });
 };

 // Define the effect hook for fetching the karyakarthas data from the API
 React.useEffect(() => {
   // Set the loading state to true
   setIsLoading(true);
   // Call the fetchKaryakarthas function from the api file
   fetchKaryakarthas()
     .then((response) => {
       // If the response is successful, set the data state to the response data
       setData(response.data);
       // Set the loading state to false
       setIsLoading(false);
     })
     .catch((error) => {
       // If the response is an error, set the error state to true and the error message to the error
       setIsError(true);
       setError(error.message);
       // Set the loading state to false
       setIsLoading(false);
     });
 }, []); // Pass an empty dependency array to run the effect only once on mount

 // Render the component



 import {
    fetchKaryakarthas,
    addKaryakartha,
    deleteKaryakartha,
    verifyKaryakartha,
  } from "../api";
  import { mapboxToken, mapboxStyle } from "../constants";
  import { validateForm, formatPhone, calculateDistance } from "../helpers";
  import Header from "../Home/Header";
  import Karyakarthaform from "./Karyakarthaform";
  import Karyakarthatable from "./Karyakarthatable";




  // report voters

  // ReportedVoter.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  fetchReportedVoters,
  respondToReportedVoter,
  deleteReportedVoter,
} from "../api";

const ReportedVoter = () => {
  // Define the state variables for the reported voters data and the loading, error, and success states
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Define the state variables for the form inputs
  const [response, setResponse] = React.useState("");
  const [selectedVoter, setSelectedVoter] = React.useState(null);

  const handleResolve = (id) => {
    // Call the resolveReportedVoter function from the api file with the reported voter id
    deleteReportedVoter(id)
      .then((response) => {
        // If the response is successful, update the data state by mapping over the reported voters and updating the resolved flag of the resolved voter
        setData((prevData) =>
          prevData.map((v) => (v.id === id ? { ...v, resolved: true } : v))
        );
        // Set the success state to true
        setIsSuccess(true);
      })
      .catch((error) => {
        // If the response is an error, set the error state to true and the error message to the error
        setIsError(true);
        setError(error.message);
      });
  };

  // Define the handler function for the response input
  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  // Define the handler function for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form input
    if (!response) {
      alert("Please enter a response");
      return;
    }
    // Call the respondToReportedVoter function from the api file with the selected voter id and the response
    respondToReportedVoter({ id: selectedVoter, response })
      .then((response) => {
        // If the response is successful, update the data state by mapping over the reported voters and updating the response of the selected voter
        setData((prevData) =>
          prevData.map((v) =>
            v.id === selectedVoter ? { ...v, response: response.data } : v
          )
        );
        // Set the success state to true
        setIsSuccess(true);
      })
      .catch((error) => {
        // If the response is an error, set the error state to true and the error message to the error
        setIsError(true);
        setError(error.message);
      });
    // Reset the form input and the selected voter
    setResponse("");
    setSelectedVoter(null);
  };

  // Define the handler function for selecting a reported voter
  const handleSelect = (id) => {
    // Set the selected voter to the id
    setSelectedVoter(id);
  };

  // Define the handler function for deleting a reported voter
  const handleDelete = (id) => {
    // Confirm the deletion
    if (
      window.confirm("Are you sure you want to delete this reported voter?")
    ) {
      // Call the deleteReportedVoter function from the api file with the reported voter id
      deleteReportedVoter(id)
        .then((response) => {
          // If the response is successful, update the data state by filtering out the deleted reported voter
          setData((prevData) => prevData.filter((v) => v.id !== id));
          // Set the success state to true
          setIsSuccess(true);
        })
        .catch((error) => {
          // If the response is an error, set the error state to true and the error message to the error
          setIsError(true);
          setError(error.message);
        });
    }
  };

  // Define the effect hook for fetching the reported voters data from the API
  React.useEffect(() => {
    // Set the loading state to true
    setIsLoading(true);
    // Call the fetchReportedVoters function from the api file
    fetchReportedVoters()
      .then((response) => {
        // If the response is successful, set the data state to the response data
        setData(response.data);
        // Set the loading state to false
        setIsLoading(false);
      })
      .catch((error) => {
        // If the response is an error, set the error state to true and the error message to the error
        setIsError(true);
        setError(error.message);
        // Set the loading state to false
        setIsLoading(false);
      });
  }, []); // Pass an empty dependency array to run the effect only once on mount

  // Render the component
  return (
    <div className="container mx-auto p-4 bg-gray-100">
   
      <div className="flex flex-col md:flex-row items-start justify-between py-8 space-y-4 md:space-y-0 md:space-x-8">
        {/* // Define the left section of the component */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">Reported Voters</h2>
          {/* // Define the table for displaying the reported voters */}
          <table className="table-auto w-full mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Reported By</th>
                <th className="px-4 py-2">Response</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* // Display the loading, error, or success states */}
              {isLoading && (
                <tr>
                  <td colSpan={6} className="px-4 py-2 text-center">
                    Loading...
                  </td>
                </tr>
              )}
              {isError && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-2 text-center text-red-500"
                  >
                    {error}
                  </td>
                </tr>
              )}
              {isSuccess && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-2 text-center text-green-500"
                  >
                    Operation successful
                  </td>
                </tr>
              )}
              {/* // Display the reported voters data */}
              {data.map((voter) => (
                <tr key={voter.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{voter.name}</td>
                  <td className="px-4 py-2">{voter.phone}</td>
                  <td className="px-4 py-2">{voter.address}</td>
                  <td className="px-4 py-2">{voter.reportedBy}</td>
                  <td className="px-4 py-2">{voter.response || "Pending"}</td>
                  <td className="px-4 py-2 flex items-center space-x-2">
                    {/* // Display the buttons for selecting, deleting, and resolving reported voters */}
                    <button
                      onClick={() => handleSelect(voter.id)}
                      className="bg-primary-500 text-white px-2 py-1 rounded-md"
                    >
                      Select
                    </button>
                    <button
                      onClick={() => handleDelete(voter.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleResolve(voter.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded-md"
                    >
                      Resolve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* // Define the right section of the component */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">Respond to Voter</h2>
          {/* // Define the form for entering the response */}
          {/* // Define the form for entering the response */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="response"
                className="block text-sm font-medium text-gray-700"
              >
                Response
              </label>
              <textarea
                id="response"
                name="response"
                value={response}
                onChange={handleResponseChange}
                rows={3}
                className="mt-1 block w-full border-gray-300 focus:ring-primary-500 focus:border-primary-500 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Respond to Voter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportedVoter;
