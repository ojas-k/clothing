import React from 'react';

const Itempage =({match})=>{
    console.log('itempage being called')
    return(
    <div>
        <h1>{match.params.name}</h1>
    </div>
)}

export default Itempage;