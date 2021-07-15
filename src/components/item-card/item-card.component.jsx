import React from 'react';
import './item-card.styles.scss';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

const ItemCard=({item, history,match })=>(
    <div className='item-card'
<<<<<<< HEAD
    onClick={()=>history.push(`/page/${item.title}`)} >
=======
    onClick={()=> history.push(`${match.url}${item.name}`)} >
>>>>>>> 158d23938ab67e14ccd9737c4ef476cd25c1fd4f
        

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