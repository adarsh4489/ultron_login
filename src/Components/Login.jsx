import { useState } from "react";
import brand from "../assets/brand logo.png";
import Google from "../assets/google logo.png";
import avatar from "../assets/login hero.png";
import upperdesign from "../assets/upper design.png"
import lowerdesign from "../assets/lower design.png"
import "./Login.css";

const Login = () => {
  const [isVerification, setIsVerification] = useState(false);
const inputs=document.querySelector('.otp')

  const infoHandler = () => {
    console.log("Continue or Google button clicked");
    setIsVerification(true);
  };

  return (
    <div className="login-container">
   
         <div className="image-section">
        <img src={avatar}className="avatar" alt="avatar img" />
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
            <input className="input" type="email" placeholder="Email Address" />
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
              <span >abcd@gmail.com</span>
              <p className="edit">Edit</p>
            </div>
            <div className="otp">
              <input className="input" type="text" maxLength="1" />
              <input className="input" type="text" maxLength="1" />
              <input className="input" type="text" maxLength="1" />
              <input className="input" type="text" maxLength="1" />
              <input className="input" type="text" maxLength="1" />
              <input className="input" type="text" maxLength="1" />
            </div>
            <button className="continue-btn">Submit</button>
          </div>
        )}
        
      </div>
      <img src={lowerdesign} className="lowerdesign" width={450} alt="" /></div>

    </div>
  );
};

export default Login;