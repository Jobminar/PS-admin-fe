import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Addkaryakartha = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        phoneNo: '',  
        area: '',
        lead: '',
        assembly: '',
        parlament: '',  
        password: '',
        verified: true,
      });


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  
  
//   console.log("this is formdata",formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is formdata",formData)
    try {
      const response = await fetch('https://voters-be.onrender.com/createkaryakartha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        console.log('Karyakartha added successfully!');
        alert('karyakartha added succesfully')
        setFormData({
            username: '',
            phoneNo: '',  
            area: '',
            lead: '',
            assembly: '',
            parlament: '',  
            password: '',
            verified: true,
        })
        navigate('/karyakartha')
      } else {
        // Handle errors, e.g., show an error message
        console.error('Failed to add Karyakartha');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    // console.log(formData)


  };

//   handle back
    const handleBack = () => {
        // Navigate back when the close symbol is clicked
        navigate('/karyakartha');
    };

  return (
    <>
      <div className='addkaryakartha-con'>
       <div style={{float:'right',marginRight:'2rem',fontSize:'20px',cursor:'pointer'}} onClick={handleBack}>
          {/* Add your close symbol (e.g., an 'X') here */}
          &#x2716;
        </div>
        <h1 style={{ textAlign: 'center', color: '#ff9933' , margin:'1rem' }}> Add New Karyakartha</h1>

        <div style={{marginBottom:'2rem'}}>
          <form className="max-w-sm mx-auto">
            {/* name */}
            <div className="mb-5">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Karyakartha Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="username"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie Green"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* number */}
            <div className="mb-5">
              <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone No
              </label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                id="phoneNo"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter your 10 digits mobile number"
                onChange={handleChange}
                required
              />
            </div>

            {/* Areaofworking */}
            <div className="mb-5">
              <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Karyakartha Working Area
              </label>
              <input
                type="text"
                id="area"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Karyakartha working area"
                onChange={handleChange}
                required
              />
            </div>

            {/* Working under */}
            <div className="mb-5">
              <label htmlFor="lead" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Karyakartha Working Under
              </label>
              <input
                type="text"
                id="lead"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Karyakartha working Under"
                onChange={handleChange}
                required
              />
            </div>

            {/* Assembly consituency */}
            <div className="mb-5">
              <label htmlFor="assembly" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Assembly Constituency
              </label>
              <input
                type="text"
                id="assembly"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Assembly constituency"
                onChange={handleChange}
                required
              />
            </div>

            {/* Parliament consituency */}
            <div className="mb-5">
              <label htmlFor="parlament" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Parliament Constituency
              </label>
              <input
                type="text"
                id="parlament"  // Update id to "parlament"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Parliament constituency"
                onChange={handleChange}
                required
                />
            </div>
            {/* password */}
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                <input onChange={handleChange} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button  style={{ backgroundColor: '#ff9933' }} onClick={handleSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Register new Karyakartha</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addkaryakartha;
