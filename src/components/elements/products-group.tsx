'use client';

import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';

interface ProductsCategoryProps extends ClassProps {
  title?: string;
  children: React.ReactNode;
}

const ProductsGroup: React.FC<ProductsCategoryProps> = ({ className, title, children }) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.35
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title);
    }
  }, [title, intersection?.isIntersecting]);

  return (
    <div className={cn('mb-8', className)} ref={intersectionRef}>
      {title && <h2 className="text-3xl font-bold mb-7">{title}</h2>}
      <div className="grid grid-cols-3 gap-12">
        {children}
      </div>
    </div>
  );
};

export default ProductsGroup;
