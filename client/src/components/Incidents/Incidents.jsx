import React, { useState, useEffect } from 'react';
import './incidents.css'

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

    // setitem incidents voters length

    const reportedincidentslength = incidentData.length
    sessionStorage.setItem('reportedincidentlength', reportedincidentslength);
    console.log('reportedincidentslength' , reportedincidentslength)

  return (
    <>
      <div className='report-incident-total-main-con'>
        <h1>Reported Incidents</h1>
        {incidentData.length > 0 ? (
          <table className='incident-table'>
            <thead>
              <tr>
               
                <th>Incident</th>
                <th>Message</th>
                 <th>Image</th>
                {/* Add more table headers as needed */}
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
                  {/* Add more table cells as needed */}
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
