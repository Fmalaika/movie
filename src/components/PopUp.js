import React from 'react';

const PopUp = ({selected, closePopUp}) => {
    return (
        <div>
            <h2>{selected.Title} <span> ( {selected.Year })</span></h2>
            <p>Rating : {selected.imdbRating}</p>
            <img src={selected.Poster}  />
            <p> {selected.plot} </p>
            <button onClick={closePopUp}> Close </button>
        </div>
    )
}


export default PopUp