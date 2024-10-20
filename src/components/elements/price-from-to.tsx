'use client';

import React from 'react';

import { Input } from '../ui/input';
import { SliderRange } from '@/components/ui/slider-range';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface PriceFromToProps extends ClassProps {
  minStepsBetweenThumbs: number;
  min: number;
  max: number;
  step?: number;
}

const PriceFromTo: React.FC<PriceFromToProps> = ({
  className,
  min,
  max,
  step = 1,
  minStepsBetweenThumbs
}) => {
  const [priceRange, setPriceRange] = React.useState<[number, number]>([min, max]);

  const changePriceSlider = (price: [number, number]) => {
    setPriceRange(price);
  };

  const changePriceInput = (price: number, type: 'min' | 'max') => {
    setPriceRange(prev => {
      const newPriceRange: [number, number] = [...prev];
      if (type === 'min') newPriceRange[0] = price;
      if (type === 'max') newPriceRange[1] = price;
      return newPriceRange;
    });
  };

  return (
    <div className={cn('border-b border-solid border-gray-300 p-1 py-7', className)}>
      <div className="flex mb-5 gap-3 ">
        <Input
          className="w-1/2"
          type="number"
          placeholder={String(min)}
          min={min}
          max={priceRange[1] - minStepsBetweenThumbs}
          value={priceRange[0]}
          onChange={e => changePriceInput(Number(e.target.value), 'min')}
        />
        <Input
          className="w-1/2"
          type="number"
          placeholder={String(max)}
          min={priceRange[0] + minStepsBetweenThumbs}
          max={max}
          value={priceRange[1]}
          onChange={e => changePriceInput(Number(e.target.value), 'max')}
        />
      </div>
      <SliderRange
        value={priceRange}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        step={step}
        max={max}
        onValueChange={changePriceSlider}
        className={cn('w-full')}
      />
    </div>
  );
};

export default PriceFromTo;
