import React, { useContext, useState } from 'react'
import { APISongContext } from '../Helpers/APISongContext'
import Searchbar from './Searchbar'
import './Header.css'

const Header = () => {

  const [search, setSearch] = useState('')
  const { searchSongs, setSearchSongs } = useContext(APISongContext)


  function searchButtonOnclickHandler() {
    // console.log(search);
    setSearchSongs(search)
  }

  function inputOnchangeHandler(e) {
    setSearch(e.target.value);
  }


  return (
    <div className='header'>
      <div className='header_content'>
        <h1>My Playlist</h1>
        <Searchbar searchButtonOnclickHandler={searchButtonOnclickHandler} inputOnchangeHandler={inputOnchangeHandler} />
      </div>
    </div>
  )
}

export default Header
