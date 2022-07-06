import React from 'react'
import './Songlist.css'

const Songlist = ({ songs, addButtonOnclick, songOnclick }) => {
  return (
    <div className='song_list' key={Math.random().toString()}>
      <h2>Songlist</h2>
      {songs.map(elem => {
        return <div className='song' key={Math.random().toString()}>
          <h5 onClick={() => songOnclick(elem)}>{elem.title}</h5><button onClick={() => addButtonOnclick(elem)}>➕</button>
        </div>
      }
      )}
    </div>
  )
}

export default Songlist