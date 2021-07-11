import React from 'react';
import './item-card.styles.scss';

const ItemCard=({item})=>(
    <div className='item-card'>

        <div className='image'
        style={{backgroundImage:`url(${item.imageUrl})`}}>
        </div>

        {console.log(item.imageUrl)}

    </div>
)

export default ItemCard;