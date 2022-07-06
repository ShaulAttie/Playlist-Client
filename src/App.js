import React, { useEffect, useState } from 'react'
import Layout from './Components/Layout'
import { APISongContext } from './Helpers/APISongContext'

const App = () => {

  const [apiSongs, setApiSongs] = useState([])
  const [searchSongs, setSearchSongs] = useState('nirvana')


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '73f00cc533msh95fcea3c5e85101p1ee609jsn2ba0a9e6df67',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      }
    };

    // fetch('https://simple-youtube-search.p.rapidapi.com/search?query=never%2Bgonna%2Bgive%2Byou%2Bup&safesearch=false', options)
    fetch(`https://simple-youtube-search.p.rapidapi.com/search?query=?${searchSongs}&safesearch=false`, options)
      .then(response => response.json())
      .then(response => setApiSongs(response.results))
      .catch(err => console.error(err));
  }
    , [searchSongs])

  // console.log(`https://simple-youtube-search.p.rapidapi.com/search?query=?${searchSongs}&safesearch=false`);
  // console.log(apiSongs);
  return (
    <div>
      <APISongContext.Provider value={{ searchSongs, setSearchSongs }}>
        <Layout songs={apiSongs} />
      </APISongContext.Provider>

    </div>
  )
}

export default App
