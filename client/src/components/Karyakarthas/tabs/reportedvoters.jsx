import React, { useState, useEffect } from 'react';

const ReportedVoters = () => {
  const [apiData, setApiData] = useState([]);
  const karyakarthaId = sessionStorage.getItem('karyakarths_id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const karyakartha_Id = karyakarthaId;

        const response = await fetch('https://voters-be.onrender.com/getReportsByKaryakarthaId', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ karyakartha_Id }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const { report } = await response.json();
        setApiData(report);
        // alert('Get successful');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [karyakarthaId]);

  return (
    <>
      {/* <h1>{karyakarthaId}</h1> */}
      <div className='main-report-voter-con'>
        {Array.isArray(apiData) && apiData.length > 0 ? (
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
    </>
  );
};

export default ReportedVoters;
