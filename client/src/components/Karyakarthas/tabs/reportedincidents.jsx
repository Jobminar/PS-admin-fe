import React, { useState, useEffect } from 'react';

const ReportedIncidents = () => {
  const [incidentsApiData, setIncidentsApiData] = useState([]);
  const karyakarthaId = sessionStorage.getItem('karyakarths_id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const karyakartha_Id = karyakarthaId;

        const response = await fetch('https://voters-be.onrender.com/getincidentreport', {
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
        setIncidentsApiData(report);
        console.log('report', report);
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
        {Array.isArray(incidentsApiData) && incidentsApiData.length > 0 ? (
          <table className='report-voter-table'>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Incident</th>
                <th>Message</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {incidentsApiData.map((dataItem, index) => (
                <tr key={index} className='sub-report-voter-con'>
                  <td>{index + 1}</td>
                  <td>{dataItem.incident}</td>
                  <td>{dataItem.message}</td>
                  <td style={{width:'10rem',height:'10rem'}}>
                    <img src={`data:image/png;base64, ${dataItem.image}`} alt={`Item ${dataItem.incident}`} style={{width:'100%',height:'100%'}} />
                  </td>
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

export default ReportedIncidents;
