import { CartContextElement } from '@/feautures/cart/context/CartContext';
import { useContext } from 'react';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  const { products } = useContext(CartContextElement);
  return (
    <>
      {products.length === 0 && (
        <section className='flex justify-center items-center w-full h-full'>
          <div className='flex flex-col justify-center items-center gap-4 pt-20'>
            <MdOutlineRemoveShoppingCart className='size-52 text-foreground/25' />
            <p className='text-xl'>
              Your Cart Is Empty.{' '}
              <Link to={'/'} className='underline text-primary'>
                Go Shoping
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
