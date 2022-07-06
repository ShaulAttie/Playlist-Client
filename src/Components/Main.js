import React from 'react'
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";

import Songlist from './Songlist';
import Playlist from './Playlist';


const Main = ({ songs, addButtonOnclick, songOnclick, playlist, minusButtonOnclick, playlistSongOnclick }) => {
    console.log(playlist);
    return (
        <BrowserRouter>
            <div className='router'>
                <nav className="nav">
                    <Link to={`/Songlist`} key={Math.random().toString()}>Songlist</Link>
                    <Link to={`/`} key={Math.random().toString()}>Playlist</Link>
                </nav>

                <Routes>
                    {/* Home Site */}
                    <Route path="/Songlist" element={<Songlist songs={songs} addButtonOnclick={addButtonOnclick} songOnclick={songOnclick} />} />
                    {/* Categories */}
                    <Route path="/" element={<Playlist playlist={playlist} minusButtonOnclick={minusButtonOnclick} playlistSongOnclick={playlistSongOnclick} songOnclick={songOnclick}/>} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Main
