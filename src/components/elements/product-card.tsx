import React from 'react';

import Image from 'next/image';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Blocks } from 'lucide-react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const ProductCard: React.FC<ClassProps> = ({ className }) => {
  return (
    <Card className={cn('flex flex-col w-[285px] shadow-none', className)}>
      <div className="mb-4 rounded-2xl bg-wheat-500 flex-center h-[260px]">
        <Image src="/pizza.png" alt="pizza" width="200" height="200"/>
      </div>
      <CardHeader className="p-0">
        <CardTitle className="font-bold text-2xl">Cheesy chicken</CardTitle>
        <CardDescription className="!mb-4 text-sm text-gray-400">
          Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-space-between p-0">
        <p className='text-xl'>from <span className='font-bold'>$10</span></p>
        <Button className='font-semibold h-[42px]' variant="secondary">
          <Blocks className='mr-3'/>
          <p className="text-lg font-bold">Add</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
