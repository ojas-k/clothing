import React from 'react';
import './homepage.styles.scss';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Route} from 'react-router-dom';
import Sliderr from '../../components/bootstrap/slider/slider.component';






import {selectTshirtsFromShop} from '../../redux/shop/shop.selector'
import ItemCard from '../../components/item-card/item-card.component'
import ItemPage from '../itempage/itempage.component'


const Homepage = ({tshirts, match}) => {
    console.log('the match object in the homepage is')
    console.log(match)
    
    return(

    <div className='homepage'>

        <div className='routing-div'>
        <Route path={`${match.path}/:collectionId`} component={ItemPage}/>
        </div>

        <div className='banner'>

            <Sliderr/>
        </div>

        <div className= 'item-display'>  
            {tshirts.map(item=>
                <ItemCard item={item} key={item.id}/>)}
        </div>

    </div>
)}

const mapStateToProps = createStructuredSelector({
    tshirts:selectTshirtsFromShop
})

export default connect(mapStateToProps)(Homepage);