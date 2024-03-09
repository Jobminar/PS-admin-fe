import React, { useState } from 'react';
import './updateprofile.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Updateprofile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedkaryakarthaforupdate = location.state ? location.state.selectedkaryakarthaupdate : null;
    console.log(selectedkaryakarthaforupdate,"showdata")


    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const handleEditPassword = () => {
        setIsEditingPassword(true);
        setNewPassword(selectedkaryakarthaforupdate.password);
    };

    const handleSavePassword = async (karyakartaid) => {
      console.log(karyakartaid);
      try {
          setIsEditingPassword(false);
  
          // Your API endpoint with the karyakartaid as a parameter
          const apiUrl = `https://voters-be.onrender.com/karyakartha/update/${karyakartaid}`;
          console.log('entered');
  
          // Construct the payload for the PATCH request
          const payload = {
              password: newPassword,
          };
  
          // Make the PATCH request
          const response = await fetch(apiUrl, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
          });
  
          // Check if the request was successful
          if (response.ok) {
              console.log('Password updated successfully!');
              alert('Password updated');
              navigate('/karyakartha')
          } else {
              console.error('Failed to update password:', response.status, response.statusText);
          }
      } catch (error) {
          console.error('An error occurred while updating the password:', error);
      }
  };
  
  

    return (
        <>
            <div className='update-profile-main-con'>
                <p>Name: {selectedkaryakarthaforupdate?.username}</p>
                <p>Area: {selectedkaryakarthaforupdate?.area}</p>
                <p>Assembly: {selectedkaryakarthaforupdate?.assembly}</p>
                <p>Lead: {selectedkaryakarthaforupdate?.lead}</p>
                <p>Parliament: {selectedkaryakarthaforupdate?.parlament}</p>
                <p>Phone Number: {selectedkaryakarthaforupdate?.phoneNo}</p>
                {isEditingPassword ? (
                    <>
                        <input
                            // type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button onClick={()=>{handleSavePassword(selectedkaryakarthaforupdate._id)}}>Save</button>
                    </>
                ) : (
                    <>
                        <p>Password: {selectedkaryakarthaforupdate.password}</p>
                        <button onClick={handleEditPassword}>Edit Password</button>
                    </>
                )}
            </div>
        </>
    );
};

export default Updateprofile;
