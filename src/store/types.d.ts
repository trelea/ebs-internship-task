import { Product } from '@/feautures/products/types/products.types';

export interface CartState {
  created_at: Date | null;
  expires_at: Date | null;
  products: (Omit<Product, 'description' | 'rating'> & { quantity: number })[];

  insertIntoCart: ({
    product,
  }: {
    product: Omit<Product, 'description' | 'rating'>;
  }) => void;

  removeFromCart: ({ id }: { id: number }) => void;

  increaseQuantity: ({ id }: { id: number }) => void;

  decreaseQuantity: ({ id }: { id: number }) => void;

  clearCart: () => void;
}
