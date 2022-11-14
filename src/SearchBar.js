import './SearchBar.css';
import { useState } from 'react';
import axios from 'axios';




function SearchBar() {
    const [searchItem, updateSearchItem] = useState('');

    const handleInputChange = event => {
        updateSearchItem(event.target.value);
    }

    const handleButtonClick = () => {
        console.log(searchItem);
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