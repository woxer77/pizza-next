import React from 'react';

import { ShoppingCart, User, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Search from '@/components/elements/search';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Header: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className='border-b border-solid border-gray-300'>
      <header className={cn('w-full flex items-center py-11 container', className)}>
        <div className='flex shrink-0 items-center gap-4'>
          <Link className="flex" href="/">
            <div className="flex-center mr-3">
              <Image src="/logo.png" alt="logo" width="35" height="35" />
            </div>
            <div className='flex flex-col'>
              <p className='text-2xl font-black uppercase'>Next Pizza</p>
              <p className='lowercase text-gray-500'>the tastiest thing</p>
            </div>
          </Link>
        </div>
        <Search className="mr-16 ml-10 h-10" />
        <div className='flex shrink-0 gap-4'>
          <Button className='font-bold' variant='outline'>
            <User className='mr-1' />
            <p className=''>Sign In</p>
          </Button>
          <Button className='relative group'>
            <p>$100</p>
            <span className='mx-3 h-full bg-white opacity-25 w-[1px]'/>
            <div className='flex font-bold transition-opacity duration-300 group-hover:opacity-0'>
              <ShoppingCart className='mr-2' size="20" />
              <p>3</p>
            </div>
            <MoveRight
              className='absolute top-1/2 right-6 h-8 w-8 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:translate-x-2'
            />
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
