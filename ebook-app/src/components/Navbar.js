import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({ setsearchQuery, setBookList, getSearch, setgetSearch }) => {
  const userInputHandler = (e) => {
    setgetSearch(e.target.value);
  };

  const searchBook = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${getSearch}`)
      .then((data) => {
        if (data) {
          console.log(data.data.items);
          setBookList(data.data.items);
        } else {
          console.log("AN ERROR OCURED");
        }
      })
      .catch((err) => {
        console.log("AN ERROR OCURED", err);
      });
  };

  return (
    <NavbarStyled>
      <div className="Nav">
        <Link to="/library">
          <li>Home</li>
        </Link>

        <Link to="/fav">
          <li>Fav</li>
        </Link>
        <Link to="/wish">
          <li>WishList</li>
        </Link>
      </div>
      <div className="search">
        <input onChange={userInputHandler} type="text" placeholder="Search" />
        <button onClick={searchBook} type="submit">
          Search
        </button>
      </div>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  display: flex;
  height: 15vh;

  .Nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    padding: 3rem;
    font-size: 1.5rem;
    color: white;
    list-style: none;
  }

  .search {
    justify-items: center;
    align-items: center;

    input {
      width: 500px;
    }
  }
`;

export default Navbar;
