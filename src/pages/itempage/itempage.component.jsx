import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {selectTshirtsFromShop} from '../../redux/shop/shop.selector'

const Itempage =({match, selecteditem})=>{
    
    const itemselctor = ({selecteditem,match})=> selecteditem.find(item =>item.title === match.params.name)
    return(
    <div>
        <h1>{itemselctor().title}</h1>
       
    </div>
)}

const mapStateToProps = createStructuredSelector({
    tshirts:selectTshirtsFromShop,
    
})

export default connect(mapStateToProps)(Itempage);