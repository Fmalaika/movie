import React from 'react';
import Card from './Card'

const Results = ({results, openPopUp}) => {
    return (
        <div>
            {results.map(result => ( 
                <Card  key={result.imdbID} result={result} openPopUp={openPopUp}/>
            ))}
          
        </div>
    )
}
export default Results;