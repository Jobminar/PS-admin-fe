import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import "./ChatBox.css";

const ChatBox = ({ selectedKaryakartha }) => {
  const [socket, setSocket] = useState(null);
  const [username] = useState("Admin");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const newSocket = io("https://voters-be.onrender.com", {
      transports: ["websocket", "polling"],
      autoConnect: false,
    });

    setSocket(newSocket);

    return () => {
      if (newSocket.connected) {
        newSocket.disconnect();
        console.log("Socket disconnected");
      }
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    if (!socket.connected) {
      socket.connect();
      console.log("Socket connected");
    }

    socket.on("chat message", (data) => {
      console.log("Received message from server:", data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("chat message");
      console.log("Message listener removed");
    };
  }, [socket]);

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const response = await axios.get(
          "https://voters-be.onrender.com/getAllMessage"
        );
        setAllMessages(response.data);
      } catch (error) {
        console.error("Error fetching all messages:", error);
      }
    };

    fetchAllMessages();
  }, []);

  const sendMessage = async () => {
    if (!socket) {
      console.error("Socket not initialized.");
      return;
    }

    if (!message) {
      console.error("Message is empty.");
      return;
    }

    if (!selectedKaryakartha) {
      console.error("No Karyakartha selected.");
      return;
    }

    try {
      const formattedMessage = `Namasthe ${selectedKaryakartha.username} ${message}`;

      await axios.post("https://voters-be.onrender.com/postmessage", {
        username,
        message: formattedMessage,
        phoneNo: selectedKaryakartha.phoneNo,
      });

      socket.emit("chat message", {
        username,
        message: formattedMessage,
        phoneNo: selectedKaryakartha.phoneNo,
        socketId: socket.id,
      });

      setMessage("");
      console.log("Sent message to server:", {
        username,
        message: formattedMessage,
        phoneNo: selectedKaryakartha.phoneNo,
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className="chat-container" style={{ overflowY: "auto" }}>
      <h1>Chat</h1>
      <div className="message-container">
        {allMessages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.username === "Admin" ? "admin" : "user"}`}
          >
            <p className="username">
              <strong>{msg.username}</strong>
            </p>
            <p className="content">{msg.message}</p>
            <p className="phoneNo">
              <strong>{msg.phoneNo}</strong>
            </p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            console.log("Message updated:", e.target.value);
          }}
        />

        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
