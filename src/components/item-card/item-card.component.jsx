import React from 'react';
import './item-card.styles.scss';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

const ItemCard=({item, history,match })=>(
    <div className='item-card'
    onClick={history.push(`/page/${item.id}`)} >
        

        <div className='image'
        style={{backgroundImage:`url(${item.imageUrl})`}}
        
        />
        
       

        <div className='footer'>
            <div className='product-name'>{item.title.toUpperCase()}</div>
            <div className='product-price'>${item.price}</div>
        </div>

        {console.log(item.imageUrl)}

    </div>
)

export default withRouter(ItemCard);