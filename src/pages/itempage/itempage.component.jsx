import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectTshirt} from '../../redux/shop/shop.selector';





const Itempage =({tshirt, match})=>{
    return(
    <div className='container'>
         
        <div className='image1'
        style={{backgroundImage:`url(${tshirt.imageUrl})`}}/>
        
       

        <div className='data'>
            <div className='product-name'>{tshirt.title.toUpperCase()}</div>
            <div className='product-price'>${tshirt.price}</div>
        </div>
       
        
        
    </div>
)}


const mapStateToProps = (state, ownProps)=>({
    tshirt: selectTshirt(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(Itempage);