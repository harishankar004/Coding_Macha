import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./Create.css";

function Create() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleCreateRoom = () => {
    const newRoomId = uuidv4().slice(0, 8);
    setRoomId(newRoomId);
  };

  return (
    <div className="create-container">
      <div className="create-card">
        <h1 className="create-title">Create a Room</h1>

        <label className="create-label">Enter Coding Question</label>
        <textarea className="create-input" placeholder="Type your question here..." />

        <label className="create-label">Enter Test Cases</label>
        <textarea className="create-input" placeholder="Input test cases..." />

        {/* Buttons with a gap between */}
        <div className="button-group">
          <button className="create-btn zap-btn" onClick={handleCreateRoom}>
            ⚡ Create Room
          </button>

          {roomId && (
            <div className="room-info">
              <p><strong>Room ID:</strong> {roomId}</p>
              <p>Share this ID with your friends.</p>
            </div>
          )}

          <button className="back-btn zap-btn" onClick={() => navigate("/")}>
            🔙 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
