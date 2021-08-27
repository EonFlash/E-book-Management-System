import React, { useState } from "react";
import styled from "styled-components";

import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Sucessfull registration of new user
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginStyle>
      <div className="container">
        <h1>Sign-In</h1>

        <form action="">
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>Create instant account using the below Create Account Button</p>
        <button onClick={register}>Create Account</button>
      </div>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  background-image: url("https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
`;

export default Login;
