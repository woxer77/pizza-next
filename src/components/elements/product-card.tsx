import React from 'react';

import Image from 'next/image';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface ProductCardProps extends ClassProps {
  imgSrc: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  imgSrc,
  title,
  description,
  price
}) => {
  return (
    <Card className={cn('flex flex-col shadow-none', className)}>
      <div className="mb-4 rounded-2xl bg-wheat-500 flex-center h-[260px]">
        <Image src={imgSrc} alt="pizza" width="200" height="200" />
      </div>
      <CardHeader className="p-0">
        <CardTitle className="font-bold text-2xl">{title}</CardTitle>
        <CardDescription className="!mb-4 text-sm text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex-space-between p-0">
        <p className="text-xl">
          from <span className="font-bold">${price}</span>
        </p>
        <Button className="font-semibold h-[42px]" variant="secondary">
          <Plus className="mr-3" />
          <p className="text-lg font-bold">Add</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
