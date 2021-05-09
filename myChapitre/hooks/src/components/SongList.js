import React, { useEffect, useState } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

function SongList() {

    //const SongList = () => {              // the above line of code can be replaced with this ES6 arrow function also
    const [songs, setSongs] = useState([
        { title: 'Daddy Cool', id: 1 },
        { title: 'Rasputin', id: 2 },
        { title: 'Sunny', id: 3 }
    ]);

    // function addSong() {     // this line of code is replace with the following ES6 arrow function
    const addSong = (title) => {
        // setSongs([...songs, { title: 'Ma Baker', id: 4 }]);  // onClick will calls this function and add the values given in setSongs([])
        setSongs([...songs, { title: title, id: uuid() }]);    // uuid is a special installed & function imported to create unique id number automatically
    }

    useEffect(() => {   // this callback function runs whenever render happens
        console.log('useEffect hook runs when app render happens', songs)
    })

    useEffect(() => {   // this callback function runs only whenever there is a change in songlist
        console.log('useEffect hook runs when update made in song list', songs)
    }, [songs])

    // console.log(songs); result will show 4 songs in SongList 
    // 'Ma Baker and 4' in added at the end because of spread(...songs) method

    return (
        <div className="song-list" >

            <ul>
                {songs.map(eachSong => {    // using map function to take each id and title values to render in browser
                    return (
                        <li
                            key=
                            {eachSong.id} >
                            {eachSong.id}
                            {eachSong.title}
                        </li>
                    );
                })}
            </ul>
            {/* <button onClick={addSong}> Add this Song </button> 
            The above button tag is replaced with NewSongForm component in the following line*/}
            <NewSongForm pickSong={addSong} />       {/* Goto NewSongForm to get new song name from user & come back to add it to array*/}
        </div>);
}
export default SongList;