import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import "../styles/components/Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there!", sender: "other", timestamp: "10:00 AM" },
    { id: 2, text: "Hi! How are you?", sender: "user", timestamp: "10:01 AM" },
    {
      id: 3,
      text: "I am doing great, thanks!",
      sender: "other",
      timestamp: "10:02 AM",
    },
  ]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="user-info">
          <h2>Welcome To ZOCCCA   🤖{user?.email}</h2>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="chat-container">
        <div className="messages-container">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${
                msg.sender === "user" ? "user-message" : "other-message"
              }`}
            >
              <div className="message-content">
                <p>{msg.text}</p>
                <span className="timestamp">{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        <form className="message-input-container" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="message-input"
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
