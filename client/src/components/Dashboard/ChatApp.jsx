// Chat.jsx
import React, { useState } from "react";
import KaryakarthaDetails from "./KaryakarthaDetails";
import ChatBox from "./ChatBox";
import Contactlist from "./Contactlist";
import "./Chat.css"; // Import the external CSS file

const Chat = () => {
  const [selectedKaryakartha, setSelectedKaryakartha] = useState(null);

  const handleKaryakarthaSelect = (selectedKaryakartha) => {
    console.log("Selected Karyakartha:", selectedKaryakartha);
    setSelectedKaryakartha(selectedKaryakartha);
  };

  return (
    <div className="topcontainer">
      {/* Render the Contactlist component with the handleKaryakarthaSelect callback */}
      <div className="topcontactList">
        <Contactlist handleKaryakarthaSelect={handleKaryakarthaSelect} />
      </div>

      {/* Render the KaryakarthaDetails component */}
      <div className="chatBox">
        <ChatBox selectedKaryakartha={selectedKaryakartha} />
      </div>
      <div className="karyakarthaDetails">
        <KaryakarthaDetails
          selectedKaryakartha={selectedKaryakartha}
          onKaryakarthaSelect={handleKaryakarthaSelect}
        />
      </div>

      {/* Render the ChatBox component with the selectedKaryakartha prop */}
    </div>
  );
};

export default Chat;
