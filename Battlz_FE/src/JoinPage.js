import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './JoinPage.css'; // External CSS

function JoinPage() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [code, setCode] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="join-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="join-left">
        <div className="question-box">
          <p><strong>Question will be displayed here.</strong></p>
        </div>

        <div className="testcase-box">
          <p>Test case data or results here.</p>
        </div>
      </div>

      <div className="editor-panel">
        <div className="editor-header">
          <select className="language-select">
            <option>C</option>
            <option>C++</option>
            <option>Python</option>
            <option>Java</option>
          </select>
          <div className="timer">⏱ {formatTime(seconds)}</div>
        </div>

        <textarea
          className="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />

        <div className="editor-actions">
          <button className="submit-btn">Submit</button>
          <button className="run-btn">Run</button>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
