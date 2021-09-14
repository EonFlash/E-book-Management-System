import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Library = () => {
  const [isLoading, setisLoading] = useState(true);
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    console.log("This will be loaded first");

    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then((data) => {
        setisLoading(false);

        if (data) {
          setBooks(data.data.items);
          console.log(Books);
        } else {
          console.log("AN ERROR OCURED");
        }
      })
      .catch((err) => {
        setisLoading(false);
        console.log("AN ERROR OCURED", err);
      });
  };

  const booksRenderer = Books.map((book) => {
    console.log(book.volumeInfo.title);
    return <div key={book.id}>{book.volumeInfo.title}</div>;
  });

  const content = isLoading ? <h1>LOADING....</h1> : booksRenderer;

  //data.data.items.volumeInfo.title

  //{state.isSignedIn ? <h1>{bookTitle}</h1> : <h1>Not signed in</h1>}
  return (
    <LibraryPage>
      <h1>HERE ARE THE BOOKS--</h1>
      {content}
    </LibraryPage>
  );
};

const LibraryPage = styled.div`
  background-image: url(" https://images.pexels.com/photos/3289156/pexels-photo-3289156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
`;
