export enum GuitarType {
  Electric = 'Electric',
  Acoustic = 'Acoustic',
  Ukulele = 'Ukulele',
}

export type Product = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  productPhoto: string;
  guitarType: GuitarType;
  article: string;
  countStrut: number;
  price: number;
}
