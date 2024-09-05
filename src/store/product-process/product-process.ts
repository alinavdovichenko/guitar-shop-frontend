import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {ProductProcess} from '../../types/state';
import {fetchProductAction} from '../api-actions';
import {Product} from '../../types/product';

const initialState: ProductProcess = {
  product: null,
  productIsLoading: false,
  productIsNotFound: false,
};

export const productSlice = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductAction.pending, (state) => {
        state.productIsLoading = true;
        state.productIsNotFound = false;
      })
      .addCase(
        fetchProductAction.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.product = action.payload;
          state.productIsLoading = false;
        }
      )
      .addCase(fetchProductAction.rejected, (state) => {
        state.productIsLoading = false;
        state.productIsNotFound = true;
      });
  },
});
