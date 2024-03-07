import React, { useState, useEffect } from 'react';
import './incidents.css';
import * as XLSX from 'xlsx';

const Incidents = () => {
  const [incidentData, setIncidentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://voters-be.onrender.com/getreportincident');
        const data = await response.json();
        setIncidentData(data);
      } catch (error) {
        console.error('Error fetching incident data:', error);
      }
    };

    fetchData();
  }, []); 

  const downloadIncidents = () => {
    // Extracting only the required fields (excluding 'image')
    const excelData = incidentData.map(({ incident, message }) => ({ incident, message }));

    // Creating a worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Creating a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Incident Data');

    // Saving the file
    XLSX.writeFile(wb, 'incident_data.xlsx');
  };

  const reportedincidentslength = incidentData.length;
  sessionStorage.setItem('reportedincidentlength', reportedincidentslength);

  return (
    <>
      <div className='report-incident-total-main-con'>
        <h1>Reported Incidents</h1>
        <div className='download-button'>
            <button type="button" onClick={downloadIncidents}>Download in Exel</button>
        </div>
        
        {incidentData.length > 0 ? (
          <table className='incident-table'>
            <thead>
              <tr>
                <th>Incident</th>
                <th>Message</th>
                <th>Image</th>
                {/* Remove the 'Image' header */}
              </tr>
            </thead>
            <tbody>
              {incidentData.map((incident, index) => (
                <tr key={index}>
                  <td>{incident.incident}</td>
                  <td>{incident.message}</td>
                  <td className='incident-image'>
                    <img src={`data:image/png;base64, ${incident.image}`} alt={`Item ${incident.incident}`} />
                  </td>
                  {/* Remove the cell for 'image' */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No incidents to display.</p>
        )}
      </div>
    </>
  );
};

export default Incidents;
