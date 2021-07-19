import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

<<<<<<< HEAD

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
=======
import {connect} from 'react-redux';

import {selectTshirt} from '../../redux/shop/shop.selector'

const Itempage =({tshirt})=>{
    return(
    <div>
        <h1>ITEMPAGE</h1>
        {console.log('inside itempage')}
        {console.log(tshirt)}
    </div>
)}


const mapStateToProps = (state, ownProps)=>{

    
    return({
    tshirt:selectTshirt(ownProps.match.params.collectionId)(state)
})}

>>>>>>> fa9bdbc4bb1226acf86006ba049ac6e5b65c4a24

export default connect(mapStateToProps)(Itempage);