import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

const Book = ({
  id,
  title,
  thumbnail,
  des,
  author,
  BookList,
  setBookList,
  favBook,
  setfavBook,
  favList,
  setfavList,
  getSearch,
  tempState,
  setTempState,
  wish,
  setWish,
}) => {
  const addFav = () => {
    //setBookList(BookList.filter((t) => id !== t.id));
    setfavList([...favList, BookList.find((t) => id == t.id)]);
    alert("The Book was Added to FAV");
  };

  const remove = () => {
    setfavList(favList.filter((t) => id !== t.id));
    alert("The Book was Removed from FAV");
  };

  const wishHandler = () => {
    setWish([...wish, BookList.find((t) => id == t.id)]);
    alert("The Book was Added to WISHLIST");
  };

  const wishRemove = () => {
    setWish(wish.filter((t) => id !== t.id));
    alert("The Book was Removed from WISHLIST");
  };

  return (
    <BookStyle>
      <div className="card">
        <div className="card-header">
          <img src={thumbnail} alt="Book Cover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">{author}</span>
          <h4>{title}</h4>
          <p>{des}</p>
          
          
        <div className="btn">
          <button onClick={addFav}>ADD TO FAV</button>
          <button onClick={remove}>REMOVE FAV</button>
          <button onClick={wishHandler}>ADD TO WISHLIST</button>
          <button onClick={wishRemove}>REMOVE From WISHLIST</button>
          </div>
        </div>
      </div>
    </BookStyle>
  );
};

const BookStyle = styled.div`
  /* display: flex;
  flex-direction: column;
  padding: 3rem;
  justify-content: center;
  align-items: center; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem;

  .card {
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 500px;
  }
  .card-header img {
    width: 100%;
    height: 15wv;
    object-fit: cover;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    min-height: 250px;
  }

  .tag {
    background: #cccccc;
    border-radius: 50px;
    font-size: 16px;
    margin: 0;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .tag-teal {
    background-color: #47bcd4;
  }
  .tag-purple {
    background-color: #5e76bf;
  }
  .tag-pink {
    background-color: #cd5b9f;
  }

  .card-body p {
    font-size: 13px;
    margin: 0 0 40px;
  }
  p {
    color: black;
  }
  h4 {
    color: black;
    font-size: 2rem;
  }

  button {
    background-color: black;
  }
  button:hover {
    background-color: white;
    border-color: black;
  }
`;

export default Book;
