'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { MoveLeft, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const NotFound: React.FC<ClassProps> = ({ className }) => {
  const router = useRouter();

  return (
    <div className={cn('h-[calc(100vh-145px)] flex-center', className)}>
      <div className="flex-center gap-16">
        <div className="flex flex-col max-w-96">
          <h1 className="text-4xl font-bold mb-3">Page was not found</h1>
          <p className="text-xl text-gray-400 mb-11">Check if the entered address is correct or try again later</p>
          <div className="flex gap-5">
            <Button onClick={() => router.push('/')}>
              <MoveLeft className="mr-3" />
              <p className="font-bold">Home</p>
            </Button>
            <Button onClick={() => router.refresh()} variant="outline">
              <RotateCcw className="mr-3" size={20} />
              <p className="font-bold">Refresh</p>
            </Button>
          </div>
        </div>
        <Image src="/not-found.png" alt="not-found" width={340} height={346} quality={100} />
      </div>
    </div>
  );
};

export default NotFound;
