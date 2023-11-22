import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Form, Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/students");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <div variant="danger">{error}</div>}
        <form onSubmit={getOtp}>
          <div className="mb-3" controlId="formBasicEmail">
            <input type="text"
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </div>
          <div className="button-right">
            <Link to="/">
              <button variant="secondary">Cancel</button>
            </Link>
            &nbsp;
            <button type="submit" variant="primary">
              Send Otp
            </button>
          </div>
        </form>

        <form onSubmit={verifyOtp}>
          <div className="mb-3" controlId="formBasicOtp">
            <input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className="button-right">
            <Link to="/">
              <button variant="secondary">Cancel</button>
            </Link>
            &nbsp;
            <button type="submit" variant="primary">
              Verify
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;