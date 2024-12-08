import Image from '@/components/Image';
import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useCartStore } from '@/store/CartStore';
import { PackageX, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

export default function CardProduct({
  id,
  image,
  title,
  price,
  category,
}: Props) {
  const { insertIntoCart, removeFromCart, products } = useCartStore();
  return (
    <Card className='w-full shadow-xl h-full flex flex-col'>
      <CardContent className=''>
        <Image
          src={image}
          className='w-full aspect-square object-contain object-center p-10'
        />
        <div className='h-40 flex flex-col justify-between flex-grow'>
          <div className='space-y-2'>
            <p className='text-white w-fit text-xs hover:underline font-semibold bg-primary p-1 rounded-full px-4'>
              Category: {category}
            </p>
            <h1 className='text-zinc-800 font-medium text-base lg:text-lg xl:text-xl hover:underline'>
              {title.slice(0, 50)}...
            </h1>
          </div>

          <div className='flex h-fit justify-between items-center'>
            <AnimatedSubscribeButton
              subscribe={() => {
                insertIntoCart({
                  product: { id, image, title, price, category },
                });
                toast({
                  title: `Cart Action.`,
                  description: (
                    <p className='text-sm'>
                      New Product Added To Cart{' '}
                      <Link className='text-primary' to={'/cart'}>
                        Check Cart.
                      </Link>
                    </p>
                  ),
                });
              }}
              unsubscribe={() => {
                removeFromCart({ id });
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
              buttonColor='#000000'
              buttonTextColor='#ffffff'
              subscribeStatus={products.some((p) => p.id === id)}
              initialText={
                <span className='group inline-flex items-center gap-2'>
                  Add To Cart <ShoppingCart className='size-4' />
                </span>
              }
              changeText={
                <span className='group inline-flex items-center gap-2'>
                  <PackageX className='size-4' />
                  Remove
                </span>
              }
            />
            <h1 className='text-foreground text-lg md:text-xl xl:text-2xl font-bold'>
              ${price.toFixed(2)}
            </h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
