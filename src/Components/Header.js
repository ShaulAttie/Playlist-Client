import React, { useContext, useState } from "react";
import { APISongContext } from "../Helpers/APISongContext";
import Searchbar from "./Searchbar";

import axios from "axios";
import "./Header.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const { searchSongs, setSearchSongs } = useContext(APISongContext);

  function searchButtonOnclickHandler() {
    // console.log(search);
    axios
      .get(`http://localhost:3001/api/search/${search}`)
      // .then((res) => console.log(res.data))
      .then((res) => setSearchSongs(res.data));
  }

  function inputOnchangeHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="header">
      <div className="header_content">
        <h1>My Playlist</h1>
        <Searchbar
          searchButtonOnclickHandler={searchButtonOnclickHandler}
          inputOnchangeHandler={inputOnchangeHandler}
        />
      </div>
    </div>
  );
};

export default Header;
