import {State} from '../../types/state';
import {NameSpace} from '../../consts';
import {Product} from '../../types/product';

export const getOffer = (state: Pick<State, NameSpace.Product>): Product | null =>
  state[NameSpace.Product].product;

export const getOfferIsLoading = (state: Pick<State, NameSpace.Product>): boolean =>
  state[NameSpace.Product].productIsLoading;

export const getOfferIsNotFound = (state: Pick<State, NameSpace.Product>): boolean =>
  state[NameSpace.Product].productIsNotFound;
