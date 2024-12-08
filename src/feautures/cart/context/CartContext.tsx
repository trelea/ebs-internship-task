import { useCartStore } from '@/store/CartStore';
import { CartState } from '@/store/types';
import React from 'react';

export const CartContextElement = React.createContext<CartState>(
  useCartStore.getState()
);

export default function CartContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    products,
    expires_at,
    created_at,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    insertIntoCart,
    removeFromCart,
  } = useCartStore();
  return (
    <CartContextElement.Provider
      value={{
        products,
        expires_at,
        created_at,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        insertIntoCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContextElement.Provider>
  );
}
