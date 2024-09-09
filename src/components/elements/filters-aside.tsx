import React from 'react';

import { Button } from '@/components/ui/button';
import FilterCheckbox from '@/components/elements/filter-checkbox';
import Filters from '@/components/elements/filters';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const ingredients = ['Cheese sauce', 'Mozzarella', 'Garlic', 'Pickles', 'Red onion', 'Tomato'];
const doughTypes = ['Traditional', 'Thin'];

const FiltersAside: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('w-[250px] flex-shrink-0', className)}>
      <div className='sticky top-[140px] h-[calc(100vh-140px)] overflow-y-auto p-1 scroll filterScroll'>
        <h2 className='mb-8 font-bold text-[22px]'>Filtration</h2>
        <div className='border-b border-solid border-gray-300 pb-6'>
          <div className="flex flex-col items-start gap-4">
            <FilterCheckbox id="isReady" text="Ready to go"/>
            <FilterCheckbox id="new" text="New"/>
          </div>
        </div>
        <Filters elements={ingredients} title="Ingredients" />
        <Filters elements={doughTypes} title="Baking dough type" />
        <Button className='w-11/12 font-bold py-2 mx-auto'>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default FiltersAside;
