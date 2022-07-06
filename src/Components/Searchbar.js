import React from 'react'
import './Searchbar.css'

const Searchbar = ({ inputOnchangeHandler, searchButtonOnclickHandler }) => {


  return (
    <div className='searchbar_input'>
      <input onChange={inputOnchangeHandler}></input>
      <button onClick={searchButtonOnclickHandler}>🔍</button>
    </div>
  )
}

export default Searchbar
