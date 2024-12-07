import { SiTrustedshops } from 'react-icons/si';
import { PiShoppingCartFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const items: { item: string; path: string }[] = [
  { item: 'Home', path: '#' },
  { item: 'Products', path: '#' },
  { item: 'Contacts', path: '#' },
  { item: 'About', path: '#' },
];

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-dvw px-64 z-50'>
      <section className='mt-4 flex justify-between items-center bg-primary border border-foreground/20 shadow-xl p-3 px-6 rounded-xl'>
        {/* Logo */}
        <Link to={'/'} className='flex items-center gap-2'>
          <SiTrustedshops className='size-10 text-card' />
          <h1 className='text-2xl font-semibold'>Logo</h1>
        </Link>

        <ul className='flex gap-10 text-xl font-medium font-sans text-foregroud'>
          {items.map((item, _: number) => (
            <li key={_}>
              <Link to={item.path}>{item.item}</Link>
            </li>
          ))}
        </ul>

        <Link to={'/cart'}>
          <PiShoppingCartFill className='size-8 text-card' />
        </Link>
      </section>
    </nav>
  );
}
