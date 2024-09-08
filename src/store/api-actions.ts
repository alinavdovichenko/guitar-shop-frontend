import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkApiConfig} from '../types/thunk';
import {AppDispatch, State} from '../types/state';
import {redirectToRoute} from './action';
import {saveToken} from '../services/token';
import {ApiRoute, AppRoute} from '../consts';
import {AuthData} from '../types/auth-data';
import {UserConnect} from '../types/user';
import {Product, ProductData} from '../types/product';

export const checkAuthAction = createAsyncThunk<UserConnect, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('checkAuth', async (_arg, {extra: api}) => {
  const {data} = await api.get<UserConnect>(ApiRoute.Login);

  return data;
},
);

export const loginAction = createAsyncThunk<UserConnect, AuthData, ThunkApiConfig>
('login', async ({email: email, password}, {dispatch, extra: api}) => {
  try {
    const {data} = await api.post<UserConnect>(ApiRoute.Login, {email, password});
    const {token} = data;
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Catalog));

    return data;

  } catch (error) {
    throw new Error();
  }
});

export const fetchProductsAction = createAsyncThunk<Product[], undefined, ThunkApiConfig>
('fetchProducts',async (_arg, {extra: api}) => {
  const {data} = await api.get<Product[]>(ApiRoute.Products);

  return data;
});

export const fetchProductAction = createAsyncThunk<
  Product,
  number,
  ThunkApiConfig
>('fetchProduct', async (_arg, {extra: api}) => {
  const id = _arg;
  const {data} = await api.get<Product>(`${ApiRoute.Product}/${id}`);

  return data;
});

export const addProductAction = createAsyncThunk<
  Product,
  ProductData,
  ThunkApiConfig
>('addProduct', async ({id, title, description, guitarType, article, countStrut, price}, {extra: api}) => {
  try {
    const {data} = await api.post<Product>(`${ApiRoute.Products}/${id}`, {
      title: title,
      description: description,
      price: price,
      guitarType: guitarType,
      article: article,
      countStrut: countStrut,
    });
    return data;
  } catch (error) {
    throw new Error();
  }
});

