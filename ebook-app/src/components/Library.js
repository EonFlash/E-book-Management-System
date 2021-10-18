import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Book from "./Book";
import Navbar from "./Navbar";

export const Library = ({
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
  wish,
  setWish,
}) => {
  //STATES-----------------------------------------------------------

  const [searchQuery, setsearchQuery] = useState("AI");

  //URL-------------------------------------------------------------
  const userAPI = () => {
    const api = "https://www.googleapis.com/books/v1/volumes?q=";
    var url = api + searchQuery;
    return url;
  };

  useEffect(() => {
    console.log("This will be loaded first");
    getData();
  }, []);

  const getData = () => {
    axios
      .get(userAPI())
      .then((data) => {
        if (data) {
          console.log(data.data.items);
          setBookList(data.data.items);
        } else {
          console.log("AN ERROR OCURED");
        }
      })
      .catch((err) => {
        {
          <h1>Try Reloading the Page</h1>;
        }
        console.log("AN ERROR OCURED", err);
      });
  };

  //Main APP---------------------------------------------------------
  return (
    <LibraryPage>
      <Navbar
        setsearchQuery={setsearchQuery}
        setBookList={setBookList}
        getSearch={getSearch}
        setgetSearch={setgetSearch}
      />

      {BookList.map((book) => {
        return (
          <Book
            id={book.id}
            title={book.volumeInfo.title}
            thumbnail={book.volumeInfo.imageLinks.thumbnail}
            des={book.volumeInfo.description}
            author={book.volumeInfo.authors}
            readLink={book.volumeInfo.infoLink}
            BookList={BookList}
            setBookList={setBookList}
            favBook={favBook}
            setfavBook={setfavBook}
            favList={favList}
            setfavList={setfavList}
            tempState={tempState}
            setTempState={setTempState}
            wish={wish}
            setWish={setWish}
          />
        );
      })}
    </LibraryPage>
  );
};

//STYLING---------------------------------------------------------------

const LibraryPage = styled.div`
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
