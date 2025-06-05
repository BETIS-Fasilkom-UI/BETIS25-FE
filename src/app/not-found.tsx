import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="font-cinzel text-[96px] md:text-[200px] lg:text-[288px] text-violet-900/40">
        404
      </h1>
      <div className="lg:-translate-y-20 md:-translate-y-16 -translate-y-2">
        <h2 className="font-cinzel text-t6 md:text-t3">
          Oops! Something&apos;s went wrong
        </h2>
        <h3 className="font-raleway text-t8 md:text-t6 max-md:mt-3">
          seems like the page you&apos;re trying to open is not ready
        </h3>
        <Link href={'/'}>
          <Button variant="primary" className="mt-8">
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
