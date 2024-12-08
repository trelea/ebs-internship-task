import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from './ui/toaster';

interface Props {
  children: React.ReactNode;
}

export default function Loyout({ children }: Props) {
  return (
    <div className='bg-primary/10 '>
      <div className='px-52 min-h-dvh pt-20'>
        <Navbar />
        {children}
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
