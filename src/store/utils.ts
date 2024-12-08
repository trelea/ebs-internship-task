import { CartState } from './types';

export const setExpirationDate = (state: CartState) => {
  const date = new Date();
  if (state.created_at === null && state.expires_at === null) {
    state.created_at = date;
    state.expires_at = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  }
};
