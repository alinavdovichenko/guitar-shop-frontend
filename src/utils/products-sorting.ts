import {Product} from '../types/product';
import {SortType} from '../consts';
import dayjs from 'dayjs';

export function productsSorting(type: SortType, list: Product[]) {
  switch (type) {
    case SortType.DateAsc:
      return list.sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    case SortType.DateDesc:
      return list.sort((a, b) => dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf());
    case SortType.PriceAsc:
      return list.sort((a, b) => b.price - a.price);
    case SortType.PriceDesc:
      return list.sort((a, b) => a.price - b.price);
    default:
      return list;
  }
}
