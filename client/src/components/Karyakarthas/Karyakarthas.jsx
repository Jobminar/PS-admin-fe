// Karyakartha.jsx
import React, { useEffect, useState } from "react";
import './karyakartha.css';
import { useNavigate } from "react-router-dom";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Karyakartha = () => {
  const navigate = useNavigate()
  const [karyakarthaData, setKaryakarthaData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [selectedkaryakartha,setselectedkaryakartha] = useState('')
// karyakartha data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://voters-be.onrender.com/getallkaryakarta');
        const data = await response.json();
        setKaryakarthaData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // status change

  const handleStatusChange = async (id, selectedValue) => {
    console.log(id , selectedValue)
    try {
      const response = await fetch(`https://voters-be.onrender.com/verify/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ verified: selectedValue }),
      });

      if (response.ok) {
        alert('states verified')
        setSelectedStatus(prevStatus => ({
          ...prevStatus,
          [id]: selectedValue,
         
        }));
        window.location.reload();
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };


  // handle view karyakartha

  const handleview = (karyakartha) => {
    setselectedkaryakartha(karyakartha);
    navigate('/viewpage', { state: { selectedkaryakartha: karyakartha } });
    console.log(karyakartha,'karyakartha')
    // karyakrtha id 
    const karyakarthaId = karyakartha._id
    console.log('karyakartha', karyakarthaId)
    // set sessionstorage 
    sessionStorage.setItem('karyakarths_id', karyakarthaId);
  };


  // handle add karyakartha

  const handleaddkaryakartha=()=>{
       navigate('/addkaryakartha')
  }


  // set karyakartha length
  const karyakarthalength = karyakarthaData.length
  sessionStorage.setItem('karyakarthalength', karyakarthalength)
  console.log('karyakarthalength', karyakarthalength)

  return (
    <>
      <div className="getkaryakartha-con">
        <div className="head-flex">
           {/* <ArrowBackIcon/> */}
           <h1>Non verified Karyakarthas list</h1>
           <button onClick={handleaddkaryakartha}>Add Karyakartha</button>
        </div>
    
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Non verified List</th>
            </tr>
          </thead>
          <tbody>
          {karyakarthaData
            .filter(karyakarta => !karyakarta.verified) // Filter entries where verified is false
            .map((karyakarta, index) => (
              <tr key={index}>
                <td>{karyakarta.username}</td>
                <td>{karyakarta.phone}</td>
                <td className="verified-button">
                  <button onClick={() => handleStatusChange(karyakarta._id, karyakarta.verified ? 'true' : 'false')}>
                    Verify now
                  </button>
                </td>
              </tr>
          ))}

          </tbody>
        </table>
      </div>

  {/* display all karyakarthas */}
      <div className="getkaryakartha-con">
          <h1>Karyakarthas list</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>View karyakartha</th>
            </tr>
          </thead>
          <tbody>
          {karyakarthaData
            .map((karyakarta, index) => (
              <tr key={index}>
                <td>{karyakarta.username}</td>
                <td>{karyakarta.phone}</td>
                <td>{karyakarta.verified ? 'verified' : 'Not verified'}</td>
                <td className="view" onClick={() => handleview(karyakarta)}>View</td>
              </tr>
          ))}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default Karyakartha;
