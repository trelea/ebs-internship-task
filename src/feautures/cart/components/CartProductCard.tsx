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
    <Card className='flex p-2 md:p-4 mb-2 md:mb-4 w-full'>
      <div className='w-28 md:w-32 lg:w-36 xl:w-40 h-28 md:h-32 lg:h-36 xl:h-40 2xl:w-44 flex justify-center items-center aspect-square p-4'>
        <Image
          src={product.image}
          className='object-contain object-center aspect-square'
        />
      </div>

      <CardContent className='flex flex-col justify-between gap-4 w-full p-0 py-1 md:py-0'>
        <div className='gap-1 md:gap-2 flex flex-col'>
          <p className='text-white w-fit text-[10px] md:text-xs hover:underline font-semibold bg-primary p-[2px] md:p-1 rounded-full px-4'>
            Category: {product.category}
          </p>
          <h1 className='text-zinc-800 font-medium text-base md:text-lg xl:text-xl hover:underline'>
            {product.title.slice(0, 100)}...
          </h1>
        </div>

        <div className='flex flex-col sm:flex-row lg:flex-col 2xl:flex-row 2xl:items-center gap-4 justify-between w-full h-full'>
          <section className='flex items-center space-x-3 pr-4'>
            <div className='bg-foreground/5 flex rounded-md shadow-md items-center space-x-3 w-fit px-2 py-1'>
              <Button
                className='w-fit h-fit bg-transparent group p-0 m-0 hover:bg-transparent border-none rounded-none shadow-none'
                onClick={() => decreaseQuantity({ id: product.id })}
              >
                <Minus className='text-foreground/50 group-hover:text-foreground aspect-square' />
              </Button>
              <h1 className='text-foreground text-sm md:text-base xl:text-lg font-medium'>
                {product.quantity}
              </h1>
              <Button
                className='w-fit h-fit bg-transparent group p-0 m-0 hover:bg-transparent border-none rounded-none shadow-none'
                onClick={() => increaseQuantity({ id: product.id })}
              >
                <Plus className='text-foreground/50 group-hover:text-foreground aspect-square' />
              </Button>
            </div>
            <h1 className='text-foreground text-base md:text-lg xl:text-xl font-bold'>
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
            className='w-[150px]'
          >
            Remove
            <Trash2 />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
