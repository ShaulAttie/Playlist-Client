import React, { useState } from 'react'
import Header from './Header'
import Songlist from './Songlist'
import Playlist from './Playlist'
import Info from './Info'
import Player from './Player'
import Popup from './Popup'
import './Layout.css'
import Main from './Main'
import Video from './Video'


const Layout = ({ songs }) => {
    // console.log(songs);

    const [playlist, setPlaylist] = useState([])
    const [info, setInfo] = useState([])
    const [trigger, setTrigger] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [playSongNow, setPlaySongNow] = useState("")
    const [index, setIndex] = useState(0)

    function addButtonHandler(elem) {
        if (playlist.indexOf(elem) !== -1) return;
        setPlaylist([...playlist, elem])
    }

    function songOnclickHandler(elem) {
        console.log('songOnclickHandler');
        setInfo(elem)
    }

    function minusButtonHandler(elem) {
        let newPlaylist = playlist.filter(item => elem.id != item.id)
        setPlaylist(newPlaylist);
        if (newPlaylist.length == 0) setPlaySongNow(undefined)
    }

    function playlistSongOnclick(e, i) {
        // console.log(e,i);
        setPlaySongNow(playlist[i])
        setIndex(i)
    }


    function playOnclickButton() {
        if (playlist.length == 0) return
        setTrigger(true)
        setPlaySongNow(playlist[index])
        // console.log(playlist[index]);
        if (shuffle) {
            setShuffle(false)
        }
        // setTimeout(
        //     nextOnclickButton
        //     , (playlist[index].duration));
    }

    function nextOnclickButton() {
        // console.log(playlist[index])

        if (playlist.length == 0) return
        setTrigger(true)
        if (!shuffle) {
            if (index + 1 == playlist.length) {
                setIndex(0)
                setPlaySongNow(playlist[0])
                playOnclickButton()
            } else {
                setIndex(index + 1)
                setPlaySongNow(playlist[index + 1])
                playOnclickButton()
            }
        } else {
            let index00 = playlist[Math.floor(Math.random() * (playlist.length))]
            setPlaySongNow(index00)
            playOnclickButton()
        }
    }

    function shuffleOnclickButton() {
        if (playlist.length == 0) return

        setTrigger(true)
        shuffle == false ? setShuffle(true) : setShuffle(false)
        setPlaySongNow(playlist[Math.floor(Math.random() * (playlist.length))])

    }



    // const dragElement = (element) => {
    //     // console.log(element);
    //     // console.log(element.target.children[0].children[0]);
    //     let dragzone = element.target.children[0].children[0];
    //     let pos1 = 0,
    //         pos2 = 0,
    //         pos3 = 0,
    //         pos4 = 0;
    //     //MouseUp occurs when the user releases the mouse button
    //     const dragMouseUp = () => {
    //         document.onmouseup = null;
    //         //onmousemove attribute fires when the pointer is moving while it is over an element.
    //         document.onmousemove = null;

    //         // element.classList.remove("drag");
    //     };

    //     const dragMouseMove = (event) => {
    //         //preventDefault() method cancels the event if it is cancelable
    //         event.preventDefault();
    //         //clientX property returns the horizontal coordinate of the mouse pointer
    //         pos1 = pos3 - event.clientX;
    //         //clientY property returns the vertical coordinate of the mouse pointer
    //         pos2 = pos4 - event.clientY;
    //         pos3 = event.clientX;
    //         pos4 = event.clientY;
    //         // console.log(pos1, pos2, pos3, pos4);
    //         // console.log(event.clientX, event.clientY);
    //         //offsetTop property returns the top position relative to the parent
    //         element.style.top = `${element.offsetTop - pos2}px`;
    //         element.style.left = `${element.offsetLeft - pos1}px`;
    //     };

    //     const dragMouseDown = (event) => {
    //         event.preventDefault();

    //         pos3 = event.clientX;
    //         pos4 = event.clientY;

    //         // element.classList.add("drag");

    //         document.onmouseup = dragMouseUp;
    //         document.onmousemove = dragMouseMove;
    //     };

    //     dragzone.onmousedown = dragMouseDown;
    // };



    return (
        <div>
            <Header />
            <div className='main'>
                <Main songs={songs} playlist={playlist} addButtonOnclick={addButtonHandler} songOnclick={songOnclickHandler} minusButtonOnclick={minusButtonHandler} playlistSongOnclick={playlistSongOnclick}/>
                {/* <Songlist songs={songs} addButtonOnclick={addButtonHandler} songOnclick={songOnclickHandler} /> */}
                <div className='play_info'>
                    {/* <Playlist playlist={playlist} minusButtonOnclick={minusButtonHandler} playlistSongOnclick={playlistSongOnclick} /> */}
                    <Video playSong={playSongNow}/>
                    <Player setTrigger={setTrigger} playSong={playSongNow} playOnclickButton={playOnclickButton} nextOnclickButton={nextOnclickButton} shuffleOnclickButton={shuffleOnclickButton} />
                    <Info songInfo={info} />
                </div>
            </div>
            {/* <Popup trigger={trigger} setTrigger={setTrigger} playSong={playSongNow} dragElement={dragElement} /> */}
        </div>
    )
}

export default Layout


// para corrigir as mudancas 
// apagar linha e componente Main
// descomentar Songlist e Playlist