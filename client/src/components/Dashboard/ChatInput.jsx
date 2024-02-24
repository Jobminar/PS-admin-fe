// ChatInput.js
import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form
      className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 bg-white rounded-lg p-3 mr-4 outline-none text-lg"
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={handleChange}
      />
      <button
        className="bg-blue-500 rounded-lg p-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xl"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
