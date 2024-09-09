import React from 'react';

import FilterCheckbox from '@/components/elements/filter-checkbox';

import { cn } from '@/lib/utils';
import { ClassProps } from '@/ts/interfaces';
import { Button } from '@/components/ui/button';

interface FiltersProps extends ClassProps {
  title?: string;
  elements: string[];
}

const Filters: React.FC<FiltersProps> = ({ className, title, elements }) => {
  return (
    <div className={cn('border-b border-solid border-gray-300 pb-6 last-of-type:border-0', className)}>
      <div className="mt-7 flex flex-col items-start gap-4">
        <h3 className="font-bold">{title}</h3>
        {(elements?.length > 6 ? elements.slice(0, 5) : elements).map((element) => (
          <FilterCheckbox key={element} id={element} text={element}/>
        ))}
        {elements?.length > 6 &&
          <Button variant="link" className="text-red-500">+ Show all</Button>
        }
      </div>
    </div>
  );
};

export default Filters;
