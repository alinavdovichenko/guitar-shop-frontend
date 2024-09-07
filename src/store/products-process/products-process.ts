import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_SORT_TYPE, SortType, DEFAULT_SORT_DIRECTION, SortDirection} from '../../consts';
import {ProductsProcess} from '../../types/state';
import {fetchProductsAction} from '../api-actions';
import {Product} from '../../types/product';

const initialState: ProductsProcess = {
  sortType: DEFAULT_SORT_TYPE,
  sortDirection: DEFAULT_SORT_DIRECTION,
  products: [],
  productsIsLoading: false,
  productsIsNotFound: false,
};

export const productsSlice = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
    setSortDirection(state, action: PayloadAction<SortDirection>) {
      state.sortDirection = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.productsIsLoading = true;
        state.productsIsNotFound = false;
      })

      .addCase(
        fetchProductsAction.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.productsIsLoading = false;
        }
      )

      .addCase(fetchProductsAction.rejected, (state) => {
        state.productsIsLoading = false;
        state.productsIsNotFound = true;
      });
  },
});

export const {setSortType, setSortDirection} = productsSlice.actions;
