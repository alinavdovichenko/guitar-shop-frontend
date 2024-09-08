import { GuitarType } from './types/product';

export enum AppRoute {
  Main = '/',
  Register = '/register',
  Add = '/add',
  Edit = '/edit/:id',
  Catalog = '/products',
  Product = '/products/:id',
  NotFound ='*',
}

export enum ApiRoute {
  Product = '/Product',
  Products = '/Products',
  Login = '/login',
}

export const GUITAR_TYPES = [
  {title: 'Акустическая гитара', value: GuitarType.Acoustic},
  {title: 'Электрогитара', value: GuitarType.Electric},
  {title: 'Укулеле', value: GuitarType.Ukulele},
];

export enum CountStrut {
  Four = '4',
  Six = '6',
  Seven = '7',
  Twelve = '12',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  User = 'USER',
  Product = 'PRODUCT',
  Products = 'PRODUCTS',
}

export enum SortType {
  Date = 'По дате',
  Price = 'По цене',
}

export enum SortDirection {
  Up = 'По возрастанию',
  Down = 'По убыванию',
}

export const DEFAULT_SORT_TYPE = SortType.Date;

export const DEFAULT_SORT_DIRECTION = SortDirection.Up;

export enum FormFieldName {
  title = 'title',
  description = 'description',
  createdAt = 'createdAt',
  article = 'article',
  price = 'price',
}

export const FILTER_GUITAR_TYPES = [
  {title: 'Акустическая гитара', value: 'acoustic'},
  {title: 'Электрогитара', value: 'electric'},
  {title: 'Укулеле', value: 'ukulele'},
];
