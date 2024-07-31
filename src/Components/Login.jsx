import { useState } from "react";
import brand from "../assets/brand logo.png";
import Google from "../assets/google logo.png";
import avatar from "../assets/login hero.png";
import upperdesign from "../assets/upper design.png";
import lowerdesign from "../assets/lower design.png";
import "./Login.css";

const Login = () => {
  const [isVerification, setIsVerification] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const infoHandler = () => {
    setIsVerification(true);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    // if (!/^[0-9]*$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      e.target.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      e.target.previousSibling.focus();
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={avatar} className="avatar" alt="avatar img" />
      </div>
      <div className="section">
        <img src={upperdesign} className="upperdesign" alt="" />
        <div className="info-section">
          {!isVerification ? (
            <div className="info">
              <img src={brand} alt="brand logo" />
              <h2>
                <span>Welcome</span> To Ultron
              </h2>
              <p>Enter your email to get started</p>
              <input
                className="input"
                type="email"
                placeholder="Email Address"
              />
              <button
                type="button"
                onClick={infoHandler}
                className="continue-btn"
              >
                Continue
              </button>
              <div className="styling">
                <hr className="line" />
                <h5>OR</h5>
                <hr className="line" />
              </div>
              <button className="login-option">
                <img src={Google} alt="google icon" />
                <p>Continue with Google</p>
              </button>
            </div>
          ) : (
            <div className="email-verification">
              <img src={brand} alt="brand logo" />
              <h2>Email Verification</h2>
              <p>We have sent a code to your email</p>
              <div className="edit-email">
                <span>abcd@gmail.com</span>
                <p className="edit">Edit</p>
              </div>
              <div className="otp">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    className="input"
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <button className="continue-btn">Submit</button>
            </div>
          )}
        </div>
        <img src={lowerdesign} className="lowerdesign" width={450} alt="" />
      </div>
    </div>
  );
};

export default Login;