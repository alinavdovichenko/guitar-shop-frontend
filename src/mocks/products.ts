import { Product, GuitarType } from '../types/product';
import { CountStrut} from '../consts';

export const products: Product[] = [
  {
    id: 1,
    title: 'IBANEZ GRG121DX-BKF',
    description: 'Электрогитара, инструмент в корпусе коричневого матового цвета.',
    createdAt: '2024-09-04T18:00:00.000Z',
    productPhoto: 'img/content/catalog-product-1.png',
    guitarType: GuitarType.Electric,
    article: 'A051984',
    countStrut: CountStrut.Six,
    price: 10000,
  },
  {
    id: 2,
    title: 'YAMAHA F310',
    description: 'Акустическая гитара, верхняя дека ель, нижняя дека и обечайка меранти, накладка на гриф палисандр, хромированные колки, цвет натуральный (Индия).',
    createdAt: '2024-09-05T17:00:00.000Z',
    productPhoto: 'img/content/catalog-product-2.png',
    guitarType: GuitarType.Acoustic,
    article: 'A186242',
    countStrut: CountStrut.Twelve,
    price: 19790,
  },
  {
    id: 3,
    title: 'TERRIS TLP-039 BK',
    description: 'Электрогитара шестиструнная',
    createdAt: '2024-09-04T18:00:00.000Z',
    productPhoto: 'img/content/catalog-product-3.png',
    guitarType: GuitarType.Electric,
    article: 'A134587',
    countStrut: CountStrut.Six,
    price: 15950,
  },
  {
    id: 4,
    title: 'Flight Nup 310',
    description: 'Укулеле Flight NUP 310 - это укулеле серии NU размера сопрано формы ананас.',
    createdAt: '2024-09-07T13:00:00.000Z',
    productPhoto: 'img/content/catalog-product-4.png',
    guitarType: GuitarType.Ukulele,
    article: 'A051988',
    countStrut: CountStrut.Four,
    price: 6574,
  }

];
