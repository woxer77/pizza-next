import React from 'react';

import { Button } from '@/components/ui/button';
import Checkbox from '@/components/elements/checkbox';

import { cn } from '@/lib/utils';
import { ClassProps } from '@/ts/interfaces';

const ingredients = ['Cheese sauce', 'Mozzarella', 'Garlic', 'Pickles', 'Red onion', 'Tomato'];
const doughTypes = ['Traditional', 'Thin'];

const Filters: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('w-[250px] flex-shrink-0', className)}>
      <div className='sticky top-[140px] h-[calc(100vh-140px)] overflow-y-auto p-1 scroll filterScroll'>
        <h2 className='mb-8 font-bold text-[22px]'>Filtration</h2>
        <div className='border-b border-solid border-gray-300 pb-6'>
          <div className="flex flex-col items-start gap-4">
            <Checkbox id="isReady" text="Ready to go" />
            <Checkbox id="new" text="New" />
          </div>
        </div>
        <div className="border-b border-solid border-gray-300 pb-6">
          <div className="mt-7 flex flex-col items-start gap-4">
            <h3 className="font-bold">Ingredients</h3>
            {ingredients.map((ingredient) => (
              <Checkbox key={ingredient} id={ingredient} text={ingredient} />
            ))}
            <span className='cursor-pointer text-red-500'>+ Show all</span>
          </div>
        </div>
        <div className='mb-8'>
          <div className='mt-7 flex flex-col items-start gap-4'>
            <h3 className='font-bold'>Baking dough type</h3>
            {doughTypes.map((doughType) => (
              <Checkbox key={doughType} id={doughType} text={doughType} />
            ))}
          </div>
        </div>
        <Button className='w-11/12 font-bold py-2 mx-auto'>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default Filters;
