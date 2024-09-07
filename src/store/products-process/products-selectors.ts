import {State} from '../../types/state';
import {createSelector} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {Product} from '../../types/product';
import {SortType, SortDirection} from '../../consts';
import {productsSorting} from '../../utils/products-sorting';

export const getProducts = (state: Pick<State, NameSpace.Products>): Product[] =>
  state[NameSpace.Products].products;

export const getProductsIsLoading = (state: Pick<State, NameSpace.Products>): boolean =>
  state[NameSpace.Products].productsIsLoading;

export const getProductsIsNotFound = (state: Pick<State, NameSpace.Products>): boolean =>
  state[NameSpace.Products].productsIsNotFound;

export const getSortType = (state: Pick<State, NameSpace.Products>): SortType =>
  state[NameSpace.Products].sortType;

export const getSortDirection = (state: Pick<State, NameSpace.Products>): SortDirection =>
  state[NameSpace.Products].sortDirection;

export const getProductsBySort = createSelector(
  [getSortType, getProducts, getSortDirection], (sortType, products, sortDirection) => productsSorting(sortType, products, sortDirection));
