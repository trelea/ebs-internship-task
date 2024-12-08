import Loading from '@/components/Loading';
import React from 'react';

export default function RouteFallback({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Suspense
      fallback={
        <section className='w-dvw h-dvh flex justify-center items-center bg-gradient-to-r from-primary/50 to-foreground/25'>
          <Loading />
        </section>
      }
    >
      {children}
    </React.Suspense>
  );
}
