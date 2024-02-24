import React from "react";

const ChatMessage = ({ message, isMine }) => {
  return (
    <div
      className={`flex items-end ${
        isMine ? "justify-end" : "justify-start"
      } mb-6`}
    >
      <div
        className={`flex flex-col rounded-lg p-4 max-w-2xl ${
          isMine
            ? "mr-4 bg-gradient-to-r from-yellow-400 via-white to-green-400"
            : "ml-4 bg-gradient-to-r from-yellow-400 via-white to-green-400"
        }`}
      >
        <span className="text-lg">{message.author}</span>
        <span className="text-xl">{message.text}</span>
        <span className="text-sm text-gray-500">{message.time}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
