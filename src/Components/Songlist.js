import React, { useContext } from "react";
import "./Songlist.css";
import { APISongContext } from "../Helpers/APISongContext";

const Songlist = ({ songs, addButtonOnclick, songOnclick }) => {
  const { searchSongs, setSearchSongs } = useContext(APISongContext);

  return (
    <div className="song_list" key={Math.random().toString()}>
      <h2>Songlist</h2>
      {searchSongs.map((elem) => {
        return (
          <div className="song" key={Math.random().toString()}>
            <h5 onClick={() => songOnclick(elem)}>{elem.title}</h5>
            <button onClick={() => addButtonOnclick(elem)}>➕</button>
          </div>
        );
      })}
    </div>
  );
};

export default Songlist;
