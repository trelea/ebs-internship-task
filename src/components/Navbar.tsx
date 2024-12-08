import { SiTrustedshops } from 'react-icons/si';
import { PiShoppingCartFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/CartStore';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const items: { item: string; path: string }[] = [
  { item: 'Home', path: '/' },
  { item: 'Products', path: '/' },
  { item: 'Contacts', path: '/' },
  { item: 'About', path: '/' },
];

export default function Navbar() {
  const { products } = useCartStore();
  return (
    <nav className='w-dvw fixed top-0 right-0 left-0 z-50 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-52 pt-4'>
      <section className='flex justify-between items-center bg-primary border border-foreground/20 shadow-2xl p-3 px-3 md:px-6 rounded-xl w-full'>
        {/* Logo */}
        <Link to={'/'} className='flex items-center gap-2'>
          <SiTrustedshops className='size-8 lg:size-10 text-card' />
          <h1 className='text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-secondary'>
            Logo
          </h1>
        </Link>

        <ul className='hidden lg:flex gap-10 text-xl font-medium font-sans text-foregroud'>
          {items.map((item, _: number) => (
            <li key={_} className='text-secondary'>
              <Link to={item.path}>{item.item}</Link>
            </li>
          ))}
        </ul>

        <div className='flex gap-2'>
          <Link to={'/cart'} className='relative hover:animate-bounce'>
            {products.length !== 0 && (
              <div className='absolute bg-green-300 text-foreground font-semibold text-sm aspect-square flex justify-center items-center h-5 w-5 rounded-full -top-2 -right-2'>
                <p className=''>{products.length}</p>
              </div>
            )}
            <PiShoppingCartFill className='size-7 lg:size-8 text-card' />
          </Link>
          <Sheet>
            <SheetTrigger asChild className='lg:hidden'>
              <Menu className='size-7 text-card' />
            </SheetTrigger>
            <SheetContent>
              <ul className='flex flex-col gap-4 text-xl font-medium font-sans'>
                {items.map((item, _: number) => (
                  <li key={_} className='text-primary hover:underline'>
                    <Link to={item.path}>{item.item}</Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </nav>
  );
}
