import { SiTrustedshops } from 'react-icons/si';
import { PiShoppingCartFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/CartStore';

const items: { item: string; path: string }[] = [
  { item: 'Home', path: '/' },
  { item: 'Products', path: '/' },
  { item: 'Contacts', path: '/' },
  { item: 'About', path: '/' },
];

export default function Navbar() {
  const { products } = useCartStore();
  return (
    <nav className='fixed top-0 right-0 left-0 z-50 px-52 pt-4'>
      <section className='flex justify-between items-center bg-primary border border-foreground/20 shadow-2xl p-3 px-6 rounded-xl'>
        {/* Logo */}
        <Link to={'/'} className='flex items-center gap-2'>
          <SiTrustedshops className='size-10 text-card' />
          <h1 className='text-2xl font-semibold text-secondary'>Logo</h1>
        </Link>

        <ul className='flex gap-10 text-xl font-medium font-sans text-foregroud'>
          {items.map((item, _: number) => (
            <li key={_} className='text-secondary'>
              <Link to={item.path}>{item.item}</Link>
            </li>
          ))}
        </ul>

        <Link to={'/cart'} className='relative hover:animate-bounce'>
          {products.length !== 0 && (
            <div className='absolute bg-green-300 text-foreground font-semibold text-sm aspect-square flex justify-center items-center h-5 w-5 rounded-full -top-2 -right-2'>
              <p className=''>{products.length}</p>
            </div>
          )}
          <PiShoppingCartFill className='size-8 text-card' />
        </Link>
      </section>
    </nav>
  );
}
