import React from 'react';
import './item-card.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const ItemCard=({item})=>(
    <div className='item-card'>

        <div className='image'
        style={{backgroundImage:`url(${item.imageUrl})`}}>
        <CustomButton>Add to Cart</CustomButton>
        </div>

        <div className='footer'>
            <div className='product-name'>{item.title.toUpperCase()}</div>
            <div className='product-price'>${item.price}</div>
        </div>

        {console.log(item.imageUrl)}

    </div>
)

export default ItemCard;