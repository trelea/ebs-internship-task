import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from './ui/toaster';
import { ScrollRestoration } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export default function Loyout({ children }: Props) {
  return (
    <div className='bg-primary/10 max-w-dvw'>
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-52 min-h-dvh pt-20 w-full'>
        <Navbar />
        {children}
      </div>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </div>
  );
}
