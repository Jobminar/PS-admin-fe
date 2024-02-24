import React, { useState } from "react";
import ChatApp from "./Dashboard/ChatApp";
import Contactlist from "./Dashboard/Contactlist";
import KaryakarthaDetails from "./Dashboard/KaryakarthaDetails";

const Chat = () => {
  const [selectedKaryakartha, setSelectedKaryakartha] = useState(null);

  const handleView = (karyakartha) => {
    setSelectedKaryakartha(karyakartha);
  };

  const gradientBackgroundStyle = {
    background: "linear-gradient(360deg, #ff9933, rgba(255,255,255,0) 50%)",
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar (ContactList) */}
      <div style={gradientBackgroundStyle} className="w-1/4 p-4">
        <Contactlist handleview={handleView} />
      </div>

      {/* KaryakarthaDetails */}

      {/* ChatApp */}
      <div style={gradientBackgroundStyle} className="flex-1 p-4">
        <ChatApp />
      </div>

      <div style={gradientBackgroundStyle} className="w-1/4 p-4">
        <KaryakarthaDetails selectedKaryakartha={selectedKaryakartha} />
      </div>
    </div>
  );
};

export default Chat;
