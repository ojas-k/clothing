import React from 'react';

const Itempage =({match})=>(
    <div>
        <h1>{match.params.name}</h1>
    </div>
)

export default Itempage;