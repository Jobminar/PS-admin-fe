import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatBox = ({ messages, onSend }) => {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500">
      <div
        className="flex-1 overflow-y-auto p-6 bg-white rounded-t-lg shadow-lg"
        ref={chatBoxRef}
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            isMine={message.author === "You"}
          />
        ))}
      </div>
      <div className="p-6">
        <ChatInput onSend={onSend} />
      </div>
    </div>
  );
};

export default ChatBox;
