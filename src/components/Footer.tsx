import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiTrustedshops } from 'react-icons/si';
import { Link } from 'react-router-dom';

const items: { item: string; path: string }[] = [
  { item: 'Home', path: '#' },
  { item: 'Products', path: '#' },
  { item: 'Contacts', path: '#' },
  { item: 'About', path: '#' },
];

const socials: { icon: IconType; social: string }[] = [
  { icon: FaInstagram, social: 'Instagram' },
  { icon: FaFacebook, social: 'Facebook' },
  { icon: FaTwitter, social: 'Twitter' },
  { icon: FaLinkedin, social: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className='flex flex-col bg-primary shadow-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-52'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4 justify-between py-10 items-start'>
        <Link to={'/'} className='flex items-center gap-2'>
          <SiTrustedshops className='size-10 md:size-12 lg:size-14 text-secondary' />
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-secondary'>
            Logo
          </h1>
        </Link>

        <ul className='flex flex-col gap-2 text-base md:text-lg font-normal font-sans text-foregroud'>
          {items.map((item, _: number) => (
            <li key={_} className='text-secondary font-medium'>
              <Link to={item.path}>{item.item}</Link>
            </li>
          ))}
        </ul>

        <ul className='flex flex-col gap-2 text-base md:text-lg font-normal font-sans text-foregroud'>
          {items.map((item, _: number) => (
            <li key={_} className='text-secondary font-medium'>
              <Link to={item.path}>{item.item}</Link>
            </li>
          ))}
        </ul>

        <ul className='flex flex-col gap-2'>
          {socials.map((social, _: number) => (
            <li
              key={_}
              className='flex gap-2 items-center text-base md:text-lg text-secondary font-medium'
            >
              <social.icon className='size-6' />
              {social.social}
            </li>
          ))}
        </ul>
      </div>
      <div className='border-t flex justify-center items-center text-accent p-1'>
        <p className='font-medium text-foreground'>
          2024 Copyright | Trelea Marius
        </p>
      </div>
    </footer>
  );
}
