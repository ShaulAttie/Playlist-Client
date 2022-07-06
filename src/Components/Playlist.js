import React from 'react'
import './Playlist.css'

const Playlist = ({ playlist, minusButtonOnclick, playlistSongOnclick, songOnclick }) => {

  // console.log(playlist);

  function playOnclick(elem,index) {
    songOnclick(elem)
    playlistSongOnclick(elem,index)
    console.log(elem);
  }

  return (

    <div className='play_list' >
      <h2>Playlist</h2>
      {playlist.map((elem, index) => {
        return <>
          <div className='playlist_song'>
            <h5 onClick={() => playOnclick(elem, index)}>{elem.title}</h5><button onClick={() => minusButtonOnclick(elem)}>➖</button>
          </div>
        </>
      })}
    </div>

  )
}

export default Playlist
