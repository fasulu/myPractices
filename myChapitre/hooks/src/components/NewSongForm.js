import React, { useState } from 'react';

const NewSongForm = ({pickSong}) => {

    const [title, setTitle] = useState(''); // this is where user inputs are stored using useState function.
    
    const handleSubmitEvent = (e) => {      // this will pick whatever user inputs in the input box
        e.preventDefault();                 // this line of code will prevent to refresh the browser when the user press any key.
        console.log(title);
        pickSong(title);    // pass title of the song to list in SongList component to add in the array of songs and list total song list in browser.
        setTitle('');       // this will clear the input field and make it empty
    }
    
    return (
        <form onSubmit={handleSubmitEvent}>

            <label>Song Name:</label>
            <input type="text" value= {title} required onChange={(e) => setTitle(e.target.value)} />
            {/* <button type='submit'> Add Song</button>    // this line of code will do the same thing as follows but with input tag */}    
            <input type="submit" value="Add Song" />

        </form>
    );
}
export default NewSongForm;