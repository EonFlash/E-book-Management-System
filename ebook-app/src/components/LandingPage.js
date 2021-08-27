import React from "react";
import circle from "../img/circle.png";
import book from "../img/book-png.webp";
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

      <Container>
        <div className="book">
          <img src={book} alt="Book" />
        </div>
        <div className="text">
          <h1>Success Starts With A Great Book</h1>
          <Link to="/login">
            <button> Login</button>
          </Link>
        </div>
      </Container>
    </Landing>
  );
};

const Landing = styled.div`
  background-image: url("https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
`;

const Nav = styled.div`
  display: flex;
  img {
    -webkit-filter: invert(1);
    filter: invert(1);
    height: 50px;
  }
  ul {
    color: white;
    display: flex;
    li {
      padding: 25px;
      list-style: none;
      font-size: 1.2rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-top: -60px;
  .book {
    img {
      -webkit-filter: invert(1);
      filter: invert(1);
      height: 50vh;
      margin-top: 300px;
      margin-right: 100px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin-top: 20px;
    }
  }
`;
