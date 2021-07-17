import React from 'react';

import {connect} from 'react-redux';

import {selectTshirt} from '../../redux/shop/shop.selector'

const Itempage =({tshirt})=>{
    return(
    <div>
        <h1>ITEMPAGE</h1>
    </div>
)}


const mapStateToProps = (state, ownProps)=>{

    
    return({
    tshirt:selectTshirt(ownProps.match.params.collectionId)(state)
})}


export default connect(mapStateToProps)(Itempage);