import React from 'react';
import './homepage.styles.scss';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {selectTshirtsFromShop} from '../../redux/shop/shop.selector'
import ItemCard from '../../components/item-card/item-card.component'


const Homepage = ({tshirts}) => (
    <div className='homepage'>

        <div className='banner'>
        </div>

        <div className= 'item-display'>
                
            {tshirts.map(item=>
                <ItemCard item={item} key={item.id}/>)}
                 
           

        </div>

    </div>
)

const mapStateToProps = createStructuredSelector({
    tshirts:selectTshirtsFromShop
})

export default connect(mapStateToProps)(Homepage);