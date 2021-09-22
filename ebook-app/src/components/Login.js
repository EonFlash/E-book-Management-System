import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import GoogleLogin from "react-google-login";

import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/library");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Sucessfull registration of new user
        alert("Successfull Registration");
        console.log(auth);

        //Agar user register ho jaye to uuse library pe redirect krr do
        if (auth) {
          history.push("/library");
        }
      })
      .catch((error) => alert(error.message));
  };

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    setUserID(response.profileObj.googleId);
    history.push("/library");
  };

  const error = () => {
    alert("User closed the window or an error has occured");
  };

  const [UserID, setUserID] = useState();

  return (
    <LoginStyle>
      <div className="container">
        <h1>Sign-In</h1>

        <form action="">
          <Box>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box>
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <h3>Or</h3>

        <GoogleLogin
          clientId="911177135029-jm5c3l0losvth5s5jjkbdhf6rkqc58fc.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={error}
        />

        <p>
          Fill up the fields and press "Create Account" button for instant
          account creation
        </p>
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
  opacity: 0.9;

  .container {
    padding: 30px;
    border: 4px solid white;
    border-radius: 25px;
    color: white;
    position: absolute;
    top: 20%;
    left: 30%;

    h1 {
      font-family: "JetBrains Mono", monospace;
      font-size: 40px;
      font-weight: bold;
      border-bottom: 2px solid white;
      margin-bottom: 35px;
      padding: 10px;
    }

    p {
      padding-top: 5rem;
      padding-bottom: 1.2rem;
    }
  }
`;

const Box = styled.div`
  width: 75%;
  border-bottom: 2px solid white;
  margin-top: 15px;
  margin-bottom: 30px;

  input {
    font-family: "JetBrains Mono", monospace;
    margin: 2px 10px;
    width: 75%;
    font-size: 20px;
    border: none;
    background: none;
    /* click krne ke baad line naa aaye uskeliye */
    outline: none;
    color: white;
    padding: 15px;
  }
`;

export default Login;
