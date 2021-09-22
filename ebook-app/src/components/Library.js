import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Book from "./Book";

export const Library = () => {
  //STATES-----------------------------------------------------------

  const [BookList, setBookList] = useState([]);

  //URL-------------------------------------------------------------

  useEffect(() => {
    console.log("This will be loaded first");
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=robot")
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

  //Main APP---------------------------------------------------------
  return (
    <LibraryPage>
      <input type="text" placeholder="Search" />
      <button type="submit">Search</button>
      {BookList.map((book) => {
        return (
          <Book
            title={book.volumeInfo.title}
            thumbnail={book.volumeInfo.imageLinks.thumbnail}
            des={book.volumeInfo.description}
            author={book.volumeInfo.authors}
            readLink={book.volumeInfo.previewLink}
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
