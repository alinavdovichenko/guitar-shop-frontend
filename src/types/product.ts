import { CountStrut } from '../consts';

export enum GuitarType {
  Electric = 'el-guitar',
  Acoustic = 'guitar',
  Ukulele = 'ukulele',
}

export type Product = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  productPhoto: string;
  guitarType: GuitarType;
  article: string;
  countStrut: CountStrut;
  price: number;
}
