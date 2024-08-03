import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
// import { useUserAuth } from "../contexts/UserAuthContext";
import styled from "styled-components";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { uid } from "uid";
import './Register.css'

const Button = styled.button`
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 20px;
  width: 100%;

  &:hover {
    background-color: white;
    color: blue;
    border: 2px solid blue;
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");
  const id = uid();
  const [password, setPassword] = useState("");
  // const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setError("");
    // try {
    //   await signUp(email, password, name, value, id);
    //   navigate("/");
    // } catch (err) {
    //   setError(err.message);
    // }
    console.log("sdjhjhgf")
  };

  return (
    <>
      <div className="signup-container">
        <h2 className="signup-heading">Create your account.</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="formbBasicText">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <PhoneInput
            defaultCountry="IN"
            className="phone-input"
            id="number"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />

          <Form.Group className="form-group" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="form-button">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
        <div className="login-link">
          Already have an account? <Link to="/signin">Log In</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
