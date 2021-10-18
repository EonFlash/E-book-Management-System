import React, { useState } from "react";

//COMPONENTS
import { LandingPage } from "./components/LandingPage";
import { Library } from "./components/Library";
import Login from "./components/Login";

//REACT_ROUTER_DOM
import { Switch, Route } from "react-router-dom";

//STYLES
import GlobalStyle from "./styles/GlobalStyle";
import FavBooks from "./components/FavBooks";
import Navbar from "./components/Navbar";
import AdminPage from "./components/AdminPage";
import Wishlist from "./Wishlist";

function App() {
  const [favBook, setfavBook] = useState([]);
  const [favList, setfavList] = useState([]);
  const [tempState, setTempState] = useState([]);
  const [wish, setWish] = useState([]);

  const [getSearch, setgetSearch] = useState("");

  const [BookList, setBookList] = useState([]);
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/library" exact>
          <Library
            BookList={BookList}
            setBookList={setBookList}
            getSearch={getSearch}
            setgetSearch={setgetSearch}
            favBook={favBook}
            setfavBook={setfavBook}
            favList={favList}
            setfavList={setfavList}
            tempState={tempState}
            setTempState={setTempState}
            wish={wish}
            setWish={setWish}
          />
        </Route>
        <Route path="/fav" exact>
          <FavBooks
            BookList={BookList}
            setBookList={setBookList}
            getSearch={getSearch}
            setgetSearch={setgetSearch}
            tempState={tempState}
            setTempState={setTempState}
            favList={favList}
          />
        </Route>

        <Route path="/admin" exact>
          <AdminPage />
        </Route>
        <Route path="/wish" exact>
          <Wishlist wish={wish} setWish={setWish} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
