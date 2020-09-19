import React from 'react';

const Search = ({handleInput, search}) => {
    return (
        <div>
            <input type="text"
             placeholder="Search for a movie"
             onChange= {handleInput}
             onKeyPress= {search}
             required
            >

              </input>
        </div>
    )
}

export default Search;