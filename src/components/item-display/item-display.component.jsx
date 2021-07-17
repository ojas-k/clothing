import React from 'react';
import './item-display.styles.scss';

import { createStructuredSelector } from 'reselect';


import {selectTshirtsFromShop} from '../../redux/shop/shop.selector'

const ItemDisplay = (props) =>{
    
    const tshirts=this.props.tshirts;
    const tshirt=this.props.tshirt;
    
    return(
    <div>
        
    </div>
)}


const mapStateToProps = createStructuredSelector({
    tshirts:selectTshirtsFromShop
})