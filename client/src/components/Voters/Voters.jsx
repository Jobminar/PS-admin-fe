import React, { useState, useEffect } from 'react';
import './voters.css'
import * as XLSX from 'xlsx';

const Voters = () => {
  const [reportvotersData, setreportvotersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://voters-be.onrender.com/getreportvoter');
        const data = await response.json();
        setreportvotersData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching incident data:', error);
      }
    };

    fetchData();
  }, []); 

  // download reports

  const downloadvoters = () => {
    // Extracting only the required fields (excluding 'image')
    const excelData = reportvotersData.map(({ houseNumber,numberOfVoters, pointOfContact ,comments , contactDetails , selectIssue  }) => ({houseNumber,numberOfVoters, pointOfContact ,comments , contactDetails , selectIssue   }));

    // Creating a worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Creating a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Incident Data');

    // Saving the file
    XLSX.writeFile(wb, 'incident_data.xlsx');
  };

  // setitem reporter voters length

  const reportedvoterslength = reportvotersData.length
  sessionStorage.setItem('reportedvoterslength', reportedvoterslength);
  console.log('reportedvoters' , reportedvoterslength)

  return (
    <>
    <div className='report-incident-total-main-con'>
      <h1>Reported Voters</h1>
      <div className='download-button'>
            <button type="button" onClick={downloadvoters}>Download in Exel</button>
        </div>
      {reportvotersData.length > 0 ? (
        <table className='reported-voters-table'>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>House Number</th>
              <th>Number of Voters</th>
              <th>Point of Contact</th>
              <th>Comments</th>
              <th>Contact Details</th>
              <th>Select Issue</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {reportvotersData.map((voter, index) => (
              <tr key={index}>
                {/* <td>{voter._id}</td> */}
                <td>{voter.houseNumber}</td>
                <td>{voter.numberOfVoters}</td>
                <td>{voter.pointOfContact}</td>
                <td>{voter.comments}</td>
                <td>{voter.contactDetails}</td>
                <td>{voter.selectIssue}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reported voters to display.</p>
      )}
    </div>
  </>
  );
};

export default Voters;
