import React from 'react';
// import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function Loyout({ children }: Props) {
  return (
    <div className='bg-primary/10 '>
      <div className='px-52 min-h-dvh'>
        {/* <Navbar /> */}
        {children}
      </div>
      <Footer />
    </div>
  );
}
