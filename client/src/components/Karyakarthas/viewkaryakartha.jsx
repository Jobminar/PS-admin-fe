import React from 'react'
import './viewkaryakartha.css'
import { useNavigate,useLocation } from 'react-router-dom'
import  { useState } from 'react';
import ReportedVoter from '../Voters/Voters'
import Voterslips from './tabs/voterslips'
import Maps from './tabs/maps'
import Reportedincidents from './tabs/reportedincidents'
import Reportedvoters from './tabs/reportedvoters';

const Viewkaryakartha = () => {

    const navigate=useNavigate()
    const location = useLocation();
    const selectedkaryakartha = location.state ? location.state.selectedkaryakartha : null;
  
    console.log(selectedkaryakartha, "show data");

    //tabs
    const [activeTab, setActiveTab] = useState('reportedvoters');

    const renderSelectedComponent = () => {
        switch (activeTab) {
        case 'reportedvoters':
            return <Reportedvoters/>
        case 'voterslips':
            return <Voterslips />;
        case 'maps':
            return <Maps />;
        case 'reportedincidents':
            return <Reportedincidents />;
       
        default:
            return null;
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  
  return (
    <>  
      <div>
        {/* <h1>{selectedkaryakartha.username}</h1> */}
            <div className='view-karyakartha-con'>
                {selectedkaryakartha && (
                <div style={{textAlign:'center'}} className='sub-karyakartha-con'>
                    <div> Karyakartha Name : {selectedkaryakartha.username}</div>
                    <div>Contact number : {selectedkaryakartha.phoneNo}</div>
                {/* <Button variant='contained' onClick={()=>navigate("/")}>Close</Button> */}
                </div>
            )}
            </div>
        </div>
        <div  className='services-container'>
  
            <div className="tabs-container">
                <div
                className={`tab ${activeTab === 'reportedvoters' && 'active'}`}
                onClick={() => handleTabClick('reportedvoters')}
                >
                {/* <img src={general} alt="" width={30}/> */}
                Reported voters
                </div>

                <div
                className={`tab ${activeTab === 'voterslips' && 'active'}`}
                onClick={() => handleTabClick('voterslips')}
                >
                {/* <img src={denting} alt="" width={30}/> */}
                Voter Slips
                </div>

                <div
                className={`tab ${activeTab === 'maps' && 'active'}`}
                onClick={() => handleTabClick('maps')}
                >
                {/* <img src={ac} alt="" width={30}/> */}
                Maps
                </div>

                <div
                className={`tab ${activeTab === 'reportedincidents' && 'active'}`}
                onClick={() => handleTabClick('reportedincidents')}
                >
                {/* <img src={accident} alt="" width={30}/> */}
                Reported incidents
                </div>
            </div>
            {renderSelectedComponent()}
        </div>
     
      
        

    </>
    
  )
}

export default Viewkaryakartha