import React, { useState } from "react";
import axios from "axios";
import "../Design/LoginParticipant.css";
import { Link, useNavigate } from "react-router-dom";  
import Svglogin from "./svgLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();  

  const handleGenerateOtp = async () => {
    if (email) {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/send-otp",
          { email }, 
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response.data);
        setIsPopupVisible(true);
      } catch (error) {
        console.error("Error sending OTP:", error.response?.data || error.message);
        alert("Failed to send OTP. Please try again.");
      }
    } else {
      alert("Please enter your email.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Start loading
      const response = await axios.post("http://localhost:8080/auth/verify-otp", {
        email: email,
        otp: otp,
      });
      console.log("OTP verified successfully:", response.data);
      setIsPopupVisible(false); 
      navigate("/dashboard");  
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP or verification failed. Please try again.");
    } finally {
      setIsLoading(false); 
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); 
  };

  return (
    <div className="login-page">
      <Svglogin />

      <form className="login-form">
        <h1 className="login-title">Login</h1>
        <label className="email-label" htmlFor="email">
          Email
        </label>
        <input
          className="email-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="button"
          className="button generate-otp-button"
          onClick={handleGenerateOtp}
        >
          {isLoading ? "Sending..." : "Generate OTP"}
        </button>
      </form>

      {isPopupVisible && (
        <div className="otp-popup">
          <div className="otp-popup-content">
            <span className="close-popup" onClick={handleClosePopup}>
              &times;
            </span>
            <h2 className="otp-popup-title">Enter OTP</h2>
            <input
              className="otp-input"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
            <button className="button login-button" onClick={handleLogin}>
              {isLoading ? "Verifying..." : "Login"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
