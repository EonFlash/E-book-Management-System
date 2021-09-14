import React from "react";
import circle from "../img/circle.png";
import book from "../img/book-png.webp";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

//REACT_ROUTER_DOM
import { Link } from "react-router-dom";

import styled from "styled-components";

export const LandingPage = () => {
  return (
    <Landing>
      <Nav>
        <div className="logo">
          <img className="circle" src={circle} alt="circle" />
          <li>Whats inside</li>
          <li>Creator</li>
        </div>

        <ul className="list">
          <li className="icon">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </li>
        </ul>
      </Nav>

      <Container>
        <div className="book">
          <img src={book} alt="Book" />
        </div>
        <div className="text">
          <h1 className="sucess">Success</h1>
          <h1>Starts </h1>
          <h1>With A </h1>
          <h1>Great Book</h1>
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
  padding: 20px;
  align-items: center;
  justify-content: space-between;

  .logo {
    color: white;
    display: flex;
    li {
      padding: 25px;
      list-style: none;
      font-size: 1.2rem;
    }
  }
  .sucess {
    h1 {
      font-weight: bold;
    }
  }
  .icon {
    font-size: 35px;
  }
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

  margin-top: -60px;
  .book {
    padding-right: 200px;
    img {
      -webkit-filter: invert(1);
      filter: invert(1);
      height: 50vh;
      margin-top: 300px;
      margin-right: 100px;
    }
  }
  .text {
    margin-top: 300px;
    padding-right: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin-top: 20px;
    }
  }
`;
