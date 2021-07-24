import {createSelector} from 'reselect';

const Id_Map = {
  one:1,
  two:2,
  three:3,
  four:4,
  five:5,
  six:6,
  seven:7,
  eight:8
}


export const selectShop = state => state.shop

export const selectTshirtsFromShop=createSelector(
    [selectShop],
    shop => shop.collection.tshirt
)

export const selectTshirt = collectionUrlParam =>
  createSelector(
    [selectTshirtsFromShop],
    tshirts => tshirts.find(tshirt=> tshirt.id === Id_Map[collectionUrlParam])
  );



