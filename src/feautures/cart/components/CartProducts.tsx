import { ScrollArea } from '@/components/ui/scroll-area';
import CartProductCard from './CartProductCard';
import { useContext } from 'react';
import { CartContextElement } from '../context/CartContext';

export default function CartProducts() {
  const { products } = useContext(CartContextElement);

  return (
    <>
      {products.length !== 0 && (
        <div className='flex flex-col w-full'>
          <ScrollArea className='w-full'>
            <div className='flex flex-col max-h-[700px]'>
              {products.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
            </div>
          </ScrollArea>
          {products.length >= 3 && (
            <p className='text-center bg-primary text-secondary text-base p-1 rounded-lg shadow-2xl shadow-black font-medium'>
              Scroll To View All Products.
            </p>
          )}
        </div>
      )}
    </>
  );
}
