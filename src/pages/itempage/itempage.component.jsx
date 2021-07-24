import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectTshirt} from '../../redux/shop/shop.selector';
import './itempage.component.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';





const Itempage =({tshirt, match})=>{
    return(
    <div className='container-div'>
         <div className='image-holder'>
             <img src={`${tshirt.imageUrl}`} width='600px' height='auto'></img>
         </div>
        <div className='data'>
            <div className='product-name'><h2>NAME: {tshirt.title.toUpperCase()}</h2></div>
            <div className='product-price'><h3> PRICE: ${tshirt.price}</h3></div>
            <div className='product-price'><h4> COLOUR: {tshirt.color}</h4></div>
            <div className='product-price'><h4> MATERIAL: {tshirt.material}</h4></div>
            <div className='product-price'><h4> DESCRIPTION: {tshirt.description}</h4></div>
        </div>
        <div className='buttonss'>
        <CustomButton>ADD TO CART</CustomButton>
        <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)}


const mapStateToProps = (state, ownProps)=>({
    tshirt: selectTshirt(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(Itempage);