import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Book from "./Book";
import Fbook from "./Fbook";

const FavBooks = ({
  getSearch,
  setgetSearch,
  favBook,
  setfavBook,
  favList,
  setfavList,
  tempState,
  setTempState,
  BookList,
  setBookList,
}) => {
  return (
    <FavPage>
      <Navbar />
      {favList.map((b) => {
        return (
          <Fbook
            id={b.id}
            title={b.volumeInfo.title}
            thumbnail={b.volumeInfo.imageLinks.thumbnail}
            des={b.volumeInfo.description}
            author={b.volumeInfo.authors}
            read={b.volumeInfo.previewLink}
            favList={favList}
            setfavList={setfavList}
            BookList={BookList}
          />
        );
      })}
    </FavPage>
  );
};
const FavPage = styled.div`
  background-image: url(" https://images.pexels.com/photos/3289156/pexels-photo-3289156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;

  input {
    margin-top: 20px;
    margin-left: 30px;
    width: 30%;
    height: 5vh;
    padding: 2rem;
    border-radius: 15px;
    font-size: 25px;
  }
`;

export default FavBooks;
