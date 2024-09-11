import React from 'react';

import { Button } from '@/components/ui/button';
import Filters from '@/components/elements/filters';
import PriceFromTo from '@/components/elements/price-from-to';

import { ClassProps } from '@/ts/interfaces';
import { cn, toSlug } from '@/lib/utils';

const topFilters = ['Ready to go', 'New'];
const ingredients = ['Cheese sauce', 'Mozzarella', 'Garlic', 'Pickles', 'Red onion', 'Tomato', 'Mozzarella1', 'Garlic2', 'Pickles3', 'Red onion4', 'Tomato5', 'Pickles6', 'Pickles7'];
const doughTypes = ['Traditional', 'Thin'];

const FiltersAside: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('w-[250px] flex-shrink-0', className)}>
      <div className='sticky top-[140px] h-[calc(100vh-140px)] overflow-y-auto p-1 scroll filterScroll'>
        <h2 className='font-bold text-[22px]'>Filtration</h2>
        <Filters elements={topFilters.map(e => ({ id: toSlug(e), text: e }))} /> {/* temp */}
        <PriceFromTo min={0} max={1000} minStepsBetweenThumbs={100} />
        <Filters elements={ingredients.map(e => ({ id: toSlug(e), text: e }))} title="Ingredients" /> {/* temp */}
        <Filters elements={doughTypes.map(e => ({ id: toSlug(e), text: e }))} title="Baking dough type" /> {/* temp */}
        <Button className='w-11/12 font-bold py-2 mx-auto'>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default FiltersAside;
