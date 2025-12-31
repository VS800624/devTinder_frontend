import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([{text: "Hello World"}])
  const user = useSelector((store) => store.user)
  const userId = user?._id

  useEffect(() => {
    const socket = createSocketConnection()
    socket.emit("joinChat", {userId, targetUserId})
  }, [])

  return (
    <div className="w-full mt-10 mb-34 md:mb-26 md:w-1/2 mx-auto h-[72vh] flex flex-col bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-700">
        {/* <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold">
          U
        </div> */}
        {/* <div>
          <h2 className="font-semibold">User {targetUserId}</h2>
          <p className="text-xs text-gray-400">Online</p>
        </div> */}
        <h1 className="font-semibold">Chat</h1>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-gray-800">

        {messages.map((msg,index) => {
          return (
             <div key={index} className="chat  chat-start">
              <div className="chat-header mb-1 ">
                Vishal Singh
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble  ">{msg.text}</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
          )
        })}

      </div>

      {/* Input Box */}
      <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-700 bg-gray-900">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-semibold transition">
          Send
        </button>
      </div>

    </div>
  );
};

export default Chat;
