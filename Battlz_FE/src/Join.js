import React from "react";
import { useNavigate } from "react-router-dom";
import './Join.css';

function Join() {
    const navigate = useNavigate();

    return (
        <div className="join-page-wrapper">
            <div className="join-page-container">
                {/* Floating elements for visual appeal */}
                <div className="join-floating-elements">
                    <div className="join-floating-element"></div>
                    <div className="join-floating-element"></div>
                    <div className="join-floating-element"></div>
                    <div className="join-floating-element"></div>
                </div>

                <div className="join-page-section">
                    <div className="join-content-card">
                        <h1 className="join-page-title">Join a Room</h1>
                        <p className="join-page-description">Enter your details to connect with others</p>

                        <div className="join-page-form">
                            <div className="join-input-group">
                                <label className="join-input-label">User ID</label>
                                <input
                                    type="text"
                                    placeholder="Enter your User ID"
                                    className="join-page-input"
                                />
                            </div>

                            <div className="join-input-group">
                                <label className="join-input-label">Room Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter the Room Code"
                                    className="join-page-input"
                                />
                            </div>
                        </div>

                        <div className="join-button-group">
                            <button
                                className="join-page-btn primary"
                                onClick={() => navigate("/joinPage")}
                            >
                                Join Room
                            </button>

                            <button
                                className="join-page-btn secondary"
                                onClick={() => navigate("/")}
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;
