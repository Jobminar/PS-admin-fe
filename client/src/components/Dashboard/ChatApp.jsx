import React, { useState, useEffect } from "react";
import ChatBox from "./ChatBox";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your server URL

const ChatApp = ({ userId, username, role }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Join the socket room with the userId, username, and role
    socket.emit("new_user", { userId, username, role });

    // Listen for incoming messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Disconnect the socket when the component unmounts
      socket.disconnect();
    };
  }, [userId, username, role]); // Add username and role as dependencies

  const handleSend = (text) => {
    // Send the message to the server with the userId, username, role, and message
    socket.emit("send_message", {
      userId,
      username,
      role,
      message: { author: "You", text, time: new Date().toLocaleTimeString() },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-96 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
        <ChatBox messages={messages} onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatApp;
