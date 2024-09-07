import {store} from '../store/index';
import {AuthorizationStatus, SortType, SortDirection} from '../consts';
import {UserConnect} from '../types/user';
import {Product} from '../types/product';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userConnect: UserConnect | null;
};

export type ProductsProcess = {
  sortType: SortType;
  sortDirection: SortDirection;
  products: Product[];
  productsIsLoading: boolean;
  productsIsNotFound: boolean;
};

export type ProductProcess = {
  product: Product | null;
  productIsLoading: boolean;
  productIsNotFound: boolean;
};
