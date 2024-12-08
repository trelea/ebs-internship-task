import Image from '@/components/Image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/feautures/products/types/products.types';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { CartContextElement } from '../context/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface Props {
  product: Omit<Product, 'rating' | 'description'> & { quantity: number };
}

export default function CartProductCard({ product }: Props) {
  const { removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContextElement);
  return (
    <Card className='flex p-4 mb-4 gap-6 w-full'>
      <div className='h-48 w-48 flex justify-center items-center'>
        <Image
          src={product.image}
          className='object-contain object-center pl-6'
        />
      </div>

      <CardContent className='flex flex-col justify-between h-48 w-full'>
        <div className='gap-2 flex flex-col-reverse'>
          <p className='text-white w-fit text-xs hover:underline font-semibold bg-primary p-1 rounded-full px-4'>
            Category: {product.category}
          </p>
          <h1 className='text-zinc-800 font-medium text-xl hover:underline'>
            {product.title.slice(0, 150)}...
          </h1>
        </div>

        <div className='flex justify-between'>
          <section className='flex items-center space-x-4'>
            <div className='bg-foreground/5 flex rounded-md shadow-md items-center space-x-4 w-fit px-2 py-1'>
              <Button
                className='w-fit h-fit bg-transparent group p-0 m-0 hover:bg-transparent border-none rounded-none shadow-none'
                onClick={() => decreaseQuantity({ id: product.id })}
              >
                <Minus className='text-foreground/50 group-hover:text-foreground aspect-square' />
              </Button>
              <h1 className='text-foreground text-xl font-medium'>
                {product.quantity}
              </h1>
              <Button
                className='w-fit h-fit bg-transparent group p-0 m-0 hover:bg-transparent border-none rounded-none shadow-none'
                onClick={() => increaseQuantity({ id: product.id })}
              >
                <Plus className='text-foreground/50 group-hover:text-foreground aspect-square' />
              </Button>
            </div>
            <h1 className='text-foreground text-2xl font-bold'>
              ${Number(product.price * product.quantity).toFixed(2)}
            </h1>
          </section>

          <Button
            onClick={() => {
              removeFromCart({ id: product.id });
              toast({
                title: `Cart Action.`,
                description: (
                  <p className='text-sm'>
                    Product Removed From Cart{' '}
                    <Link className='text-primary' to={'/cart'}>
                      Check Cart.
                    </Link>
                  </p>
                ),
              });
            }}
            variant={'outline'}
          >
            Remove
            <Trash2 />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
