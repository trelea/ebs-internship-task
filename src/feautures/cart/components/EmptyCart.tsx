import { CartContextElement } from '@/feautures/cart/context/CartContext';
import { useContext } from 'react';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  const { products } = useContext(CartContextElement);
  return (
    <>
      {products.length === 0 && (
        <section className='flex justify-center items-center w-full'>
          <div className='flex flex-col justify-center items-center h-full gap-4 md:gap-8 xl:gap-10 pt-44'>
            <MdOutlineRemoveShoppingCart className='size-40 md:size-44 lg:size-48 2xl:size-52 text-foreground/50' />
            <h1 className='text-xl lg:text-2xl 2xl:text-3xl text-foreground/50 font-bold'>
              Your Cart Is Empty.{' '}
              <Link to={'/'} className='underline text-primary'>
                Go Shoping
              </Link>
            </h1>
          </div>
        </section>
      )}
    </>
  );
}
