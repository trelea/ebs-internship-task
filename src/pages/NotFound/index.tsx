import Loyout from '@/components/Loyout';
import { MapPinOff } from 'lucide-react';

export default function NotFound() {
  return (
    <Loyout>
      <section className='w-full flex justify-center items-center '>
        <div className='flex flex-col justify-center items-center h-full gap-4 md:gap-8 xl:gap-10 pt-44'>
          <MapPinOff className='size-40 md:size-44 lg:size-48 2xl:size-52 text-foreground/50' />
          <h1 className='text-2xl lg:text-3xl 2xl:text-4xl text-foreground/50 font-bold'>
            404 Undefined Page.
          </h1>
        </div>
      </section>
    </Loyout>
  );
}
