export enum AppRoute {
  Main = '/',
  Register = '/register',
  Add = '/add',
  Edit = '/edit/:id',
  Catalog = '/products',
  Product = '/products/:id',
  NotFound ='*',
}

export const GUITAR_TYPES = [
  {title: 'Акустическая гитара', value: 'acoustic'},
  {title: 'Электрогитара', value: 'electric'},
  {title: 'Укулеле', value: 'ukulele'},
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
