export enum GuitarType {
  Electric = 'Electric',
  Acoustic = 'Acoustic',
  Ukulele = 'Ukulele',
}

export type Product = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  productPhoto: string;
  guitarType: GuitarType;
  article: string;
  countStrut: number;
  price: number;
}
