import {combineReducers} from '@reduxjs/toolkit';
import {userSlice} from './user-process/user-process';
import {NameSpace} from '../consts';
import {productsSlice} from './products-process/products-process';
import {productSlice} from './product-process/product-process';

export const rootReducer = combineReducers({
  [NameSpace.Product]: productSlice.reducer,
  [NameSpace.Products]: productsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
