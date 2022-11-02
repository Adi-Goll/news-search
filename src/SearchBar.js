import './SearchBar.css';
import { useState } from 'react';


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });


// app.get('/newsRequest', (req) => {
//     console.log(`received request bro good job it says ${req}`);
// });


function SearchBar() {
    const [searchItem, updateSearchItem] = useState('');

    const handleInputChange = event => {
        updateSearchItem(event.target.value);
    }

    const handleButtonClick = () => {
        console.log(searchItem);
    }


    return (
        <div>
            <div id="input-div">
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleInputChange}
                    id="search-bar"
                />
                <button onClick={handleButtonClick} id="search-button">SEARCH</button>
            </div>
        </div>

    );

}


export default SearchBar;