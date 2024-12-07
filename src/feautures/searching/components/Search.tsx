import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchProduct } from '../hooks/useSearchProduct';

export default function Search() {
  const { handleSubmit, handleEmptyString, queries } = useSearchProduct();
  return (
    <form className='flex gap-4' onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Search your product...'
        name='query'
        onChange={handleEmptyString}
        className='bg-white shadow-2xl'
        defaultValue={queries.get('query') || ''}
      />
      <Button type='submit' className='px-10'>
        Search
      </Button>
    </form>
  );
}
