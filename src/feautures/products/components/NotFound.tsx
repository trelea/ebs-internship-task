import { Ban } from 'lucide-react';

export default function NotFound() {
  return (
    <section className='w-full h-full flex justify-center items-center'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <Ban className='size-52 text-foreground/25' />
        <h1 className='text-2xl text-foreground/50 font-semibold'>
          No Products Were Found...
        </h1>
      </div>
    </section>
  );
}
