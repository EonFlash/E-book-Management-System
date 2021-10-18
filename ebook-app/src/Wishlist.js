import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Wbook from "./components/Wbook";

const Wishlist = ({
  wish,
  setwish,

  favList,
  setfavList,
  BookList,
}) => {
  return (
    <WPage>
      <Navbar />
      {wish.map((w) => {
        return (
          <Wbook
            id={w.id}
            title={w.volumeInfo.title}
            thumbnail={w.volumeInfo.imageLinks.thumbnail}
            des={w.volumeInfo.description}
            author={w.volumeInfo.authors}
            read={w.volumeInfo.previewLink}
            wish={wish}
            setwish={setwish}
            BookList={BookList}
          />
        );
      })}
    </WPage>
  );
};
const WPage = styled.div`
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

export default Wishlist;
