import {SHOP_DATA} from './shop.data';

const INITIAL_VALUE= {collection:SHOP_DATA};

const shopReducer = (state=INITIAL_VALUE,action) => {
    switch(action.payload) {
        default: return state;
    }
};

export default shopReducer;