import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartState } from './types';
import { setExpirationDate } from './utils';
import { Product } from '@/feautures/products/types/products.types';

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set) => ({
      created_at: null,
      expires_at: null,
      products: [],

      // Add product to cart
      insertIntoCart: ({
        product,
      }: {
        product: Omit<Product, 'description' | 'rating'>;
      }) =>
        set((state: CartState) => {
          setExpirationDate(state);
          return {
            products: [...(state.products as []), { ...product, quantity: 1 }],
          };
        }),

      // Remove product from cart
      removeFromCart: ({ id }: { id: number }) =>
        set((state: CartState) => {
          return {
            products: state.products.filter((p) => p.id !== id),
          };
        }),

      // Increase Quantity
      increaseQuantity: ({ id }: { id: number }) =>
        set((state: CartState) => {
          return {
            products: state.products.map((p) => {
              return p.id === id ? { ...p, quantity: p.quantity + 1 } : p;
            }),
          };
        }),

      // Decrease Quantity
      decreaseQuantity: ({ id }: { id: number }) =>
        set((state: CartState) => {
          return {
            products: state.products.map((p) => {
              return p.id === id
                ? { ...p, quantity: p.quantity === 1 ? 1 : p.quantity - 1 }
                : p;
            }),
          };
        }),

      clearCart: () =>
        set({
          created_at: null,
          expires_at: null,
          products: [],
        }),
    }),
    { name: 'CART_STORAGE' }
  )
);
