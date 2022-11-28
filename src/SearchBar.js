import './SearchBar.css';
import { useState } from 'react';
import axios from 'axios';




function SearchBar() {
    const [searchItem, updateSearchItem] = useState('');

    const handleInputChange = event => {
        updateSearchItem(event.target.value);
    }

    const handleButtonClick = () => {
        console.log(axios.get(`https://newsapi.org/v2/everything?q=${searchItem}&apiKey=6fe149c2c18b49e6a6a771c564585e5f`));

        axios.post('http://localhost:5000/newsRequest', null, {
            params: {
                newsAPIQuery: searchItem
            }
        })
            .then(() => {
                console.log("request was a success");
            })

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