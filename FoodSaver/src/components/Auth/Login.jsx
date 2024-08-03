import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
// import { useUserAuth } from "../contexts/UserAuthContext";
import styled from "styled-components";
import './Login.css'

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setError("");
    // try {
    //   await logIn(email, password);
    //   navigate("/");
    // } catch (err) {
    //   setError(err.message);
    // }
    console.log("login logic remove it ");

    // navigate("/" )
  };

  const handleGoogleSignIn = async (e) => {
    // e.preventDefault();
    // try {
    //   await googleSignIn();
    //   navigate("/");
    // } catch (error) {
    //   console.log(error.message);
    // }
    console.log("login logic remove it ")
    
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="form-group" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="form-button">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="google-button"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
