import React from "react";
import circle from "../img/circle.png";
//REACT_ROUTER_DOM
import { Link } from "react-router-dom";

import styled from "styled-components";

export const LandingPage = () => {
  return (
    <Landing>
      <Nav>
        <img className="circle" src={circle} alt="circle" />
        <ul className="list">
          <li>Whats inside</li>
          <li>Creator</li>
        </ul>
      </Nav>
      <h1>Success Starts With A Great Book</h1>

      <Link to="/login">
        <button> Login</button>{" "}
      </Link>
    </Landing>
  );
};

const Landing = styled.div`
  background-image: url("https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
const Nav = styled.div`
  img {
    -webkit-filter: invert(1);
    filter: invert(1);
    height: 50px;
  }
  ul {
    color: white;
  }
`;
