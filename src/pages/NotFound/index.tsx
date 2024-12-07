import Loyout from '@/components/Loyout';
import { MapPinOff } from 'lucide-react';

export default function NotFound() {
  return (
    <Loyout>
      <section className='h-full w-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center h-full gap-10'>
          <MapPinOff className='size-52 text-foreground/50' />
          <h1 className='text-4xl text-foreground/50 font-bold'>
            404 Undefined Page.
          </h1>
        </div>
      </section>
    </Loyout>
  );
}
