import React from 'react';

import {connect} from 'react-redux';

import {selectTshirt} from '../../redux/shop/shop.selector';
import selectTshirtsFromShop from '../../redux/shop/shop.selector'

const Itempage =({tshirt})=>{
    return(
    <div>
        <h1>ITEMPAGE</h1>
        {console.log('inside itempage')}
        {console.log(tshirt)}
    </div>
)}


const mapStateToProps = (state, ownProps)=>{
    const tshirts = selectTshirtsFromShop(state)
    const selectedtshirt=null
    collectionUrlParam=ownProps.match.params.collectionId
    tshirts.map(tshirt=>
        if(tshirt.title==collectionUrlParam) {
            selectedtshirt=tshirt
        }
        
        )

    
    return({

        if(tshirt.title==collectionUrlParam)
      {
        return tshirt
      }



    tshirt:selectTshirt(ownProps.match.params.collectionId)(state)
})}


export default connect(mapStateToProps)(Itempage);