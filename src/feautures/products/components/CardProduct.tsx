import Image from '@/components/Image';
import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button';
import { Card, CardContent } from '@/components/ui/card';
import { PackageX, ShoppingCart } from 'lucide-react';

interface Props {
  img: string;
  name: string;
  price: number;
  category: string;
}

export default function CardProduct({ img, name, price, category }: Props) {
  return (
    <Card className='w-full shadow-xl h-full flex flex-col'>
      <CardContent className=''>
        <Image
          src={img}
          className='w-full aspect-square object-contain object-center p-10'
        />
        <div className='h-40 flex flex-col justify-between flex-grow'>
          <div className='space-y-2'>
            <p className='text-white w-fit text-xs hover:underline font-semibold bg-primary p-1 rounded-full px-4'>
              Category: {category}
            </p>
            <h1 className='text-zinc-800 font-medium text-xl hover:underline'>
              {name.slice(0, 50)}...
            </h1>
          </div>

          <div className='flex h-fit justify-between items-center'>
            <AnimatedSubscribeButton
              buttonColor='#000000'
              buttonTextColor='#ffffff'
              subscribeStatus={false}
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
            <h1 className='text-foreground text-2xl font-bold'>${price}</h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
