import React from 'react';
import Card from './Card'

const Results = ({results}) => {
    return (
        <div>
            {results.map(result => ( 
                <Card  result={result}/>
            ))}
          
        </div>
    )
}
export default Results;