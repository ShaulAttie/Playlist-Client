import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout";
import { APISongContext } from "./Helpers/APISongContext";

const App = () => {
  const [apiSongs, setApiSongs] = useState([]);
  const [searchSongs, setSearchSongs] = useState([]);

  return (
    <div>
      <APISongContext.Provider value={{ searchSongs, setSearchSongs }}>
        <Layout songs={apiSongs} />
      </APISongContext.Provider>
    </div>
  );
};

export default App;
