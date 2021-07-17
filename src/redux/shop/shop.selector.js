import {createSelector} from 'reselect';


export const selectShop = state => state.shop

export const selectTshirtsFromShop=createSelector(
    [selectShop],
    shop => shop.collection.tshirt
)

export const selectTshirt = collectionUrlParam =>
  createSelector(
    [selectTshirtsFromShop],
    tshirts => tshirts[collectionUrlParam]
  );


