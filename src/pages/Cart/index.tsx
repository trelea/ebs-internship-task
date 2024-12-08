import Loyout from '@/components/Loyout';
import CartProducts from '@/feautures/cart/components/CartProducts';
import PricesTable from '@/feautures/cart/components/PricesTable';
import CartContext from '@/feautures/cart/context/CartContext';
import EmptyCart from '@/feautures/cart/components/EmptyCart';

export default function Cart() {
  return (
    <Loyout>
      <CartContext>
        <div className='flex gap-6 pb-20 pt-20'>
          <CartProducts />
          <PricesTable />
          <EmptyCart />
        </div>
      </CartContext>
    </Loyout>
  );
}
