import React, { useState, useEffect } from 'react';

const ReportedVoters = () => {
  const [apiData, setApiData] = useState(null);
  const karyakarthaId = sessionStorage.getItem('karyakarths_id');
  // set reportedvoters length


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://voters-be.onrender.com/getKaryakarthaId/${karyakarthaId}`);
        const data = await response.json();
        setApiData(data);
        console.log('report voters data', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [karyakarthaId]);  // Adding karyakarthaId to dependency array to re-run effect when it changes

  return (
    <>
    <h1>{karyakarthaId}</h1>
      <div className='main-report-voter-con'>
        {apiData && Array.isArray(apiData) ? (  // Check if apiData is an array
          <table className='report-voter-table'>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>House Number</th>
                <th>Number of Voters</th>
                <th>Point of Contact</th>
                <th>Comments</th>
                <th>Contact Details</th>
                <th>Issue</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((dataItem, index) => (
                <tr key={index} className='sub-report-voter-con'>
                  <td>{index + 1}</td>
                  <td>{dataItem.houseNumber}</td>
                  <td>{dataItem.numberOfVoters}</td>
                  <td>{dataItem.pointOfContact}</td>
                  <td>{dataItem.comments}</td>
                  <td>{dataItem.contactDetails}</td>
                  <td>{dataItem.selectIssue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div>
        {/* <button onClick={downloadfile}>Download</button> */}
      </div>
    </>
  );
};

export default ReportedVoters;
