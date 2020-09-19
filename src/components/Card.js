import React from 'react';


const Card = ({result, openPopUp}) => {

    return (
        <div  onClick={() => openPopUp(result.imdbID)}>
            <img src={result.Poster} />
            <h2>{result.Title}</h2>
            <p>  </p>
        </div>
    )
}
export default Card;