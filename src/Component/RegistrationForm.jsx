import React from "react";
import "../Design/RegistrationForm.css";
import Svgregister from "./svgRegister";

const RegistrationForm = () => {
  return (
    <div className="fullBody">
    <div className="form-container">
      <Svgregister/>
      <div className="form-content">
        <div className="form-title">
        <p>Registration form</p>
        </div>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required /> 
           <input type="password" placeholder="Re-enter Password" required /> 
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;