import Loyout from '@/components/Loyout';
import CartProducts from '@/feautures/cart/components/CartProducts';
import PricesTable from '@/feautures/cart/components/PricesTable';
import CartContext from '@/feautures/cart/context/CartContext';
import EmptyCart from '@/feautures/cart/components/EmptyCart';

export default function Cart() {
  return (
    <Loyout>
      <CartContext>
        <div className='flex flex-col lg:flex-row w-full gap-2 md:gap-4 lg:gap-6 pb-6 md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20 pt-6 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-20'>
          <CartProducts />
          <PricesTable />
          <EmptyCart />
        </div>
      </CartContext>
    </Loyout>
  );
}
