import React from 'react';


const Card = ({result}) => {
    return (
        <section>
            <img src={result.Poster} />
            <h2>{result.Title}</h2>
        </section>
    )
}
export default Card;