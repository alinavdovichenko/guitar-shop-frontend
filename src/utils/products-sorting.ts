import {Product} from '../types/product';
import {SortType, SortDirection} from '../consts';
import dayjs from 'dayjs';

export function productsSorting(type: SortType, list: Product[], direction: SortDirection) {
  switch (type) {
    case SortType.Date:
      if (direction === SortDirection.Up) {
        return list.sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      }
      return list.sort((a, b) => dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf());
    case SortType.Price:
      if (direction === SortDirection.Up) {
        return list.sort((a, b) => b.price - a.price);
      }
      return list.sort((a, b) => a.price - b.price);
    default:
      return list;
  }
}
