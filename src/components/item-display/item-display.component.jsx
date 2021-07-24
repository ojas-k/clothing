import React from 'react';
import './item-display.styles.scss';

import { createStructuredSelector } from 'reselect';


import {selectTshirtsFromShop} from '../../redux/shop/shop.selector'

const ItemDisplay = ({tshirts}) =>{
    <div>
        
    </div>
}

const mapStateToProps = createStructuredSelector({
    tshirts:selectTshirtsFromShop
})