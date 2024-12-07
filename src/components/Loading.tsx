import { LoadingSpinner } from './ui/spinner';

export default function Loading() {
  return (
    <section
      aria-description='loading'
      className='flex justify-center items-center w-full h-full'
    >
      <div className='flex justify-center items-center gap-2'>
        <LoadingSpinner />
        <h1 className='text-xl'>Loading...</h1>
      </div>
    </section>
  );
}
