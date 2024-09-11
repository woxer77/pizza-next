'use client';

import React, { ChangeEvent } from 'react';

import FilterCheckbox, { FilterCheckboxProps } from '@/components/elements/filter-checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { ClassProps } from '@/ts/interfaces';
import useDebounce from '@/hooks/useDebounce';

type Element = FilterCheckboxProps;

interface FiltersProps extends ClassProps {
  title?: string;
  elements: Element[];
  limit?: number;
}

const Filters: React.FC<FiltersProps> = ({ className, title, elements, limit = 5 }) => {
  const initialElements = elements.length > limit ? elements.slice(0, limit) : elements;

  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [shownElements, setShownElements] = React.useState<Element[]>(initialElements);

  const debounceInputHandler = useDebounce((event: ChangeEvent<HTMLInputElement>) => {
    setShownElements(elements.filter((elem) => elem.text.toLowerCase().includes(event.target.value.toLowerCase())));
  }, 300);

  React.useEffect(() => {
    const newList = showAll ? elements : elements.slice(0, limit);

    setShownElements(newList);
  }, [elements, limit, showAll]);

  return (
    <div className={cn('border-b border-solid border-gray-300 p-1 py-7 last-of-type:border-0 max-h-96 overflow-y-auto filterScroll', className)}>
      <div className="flex flex-col items-start gap-4">
        {title && <h3 className="font-bold">{title}</h3>}
        {showAll &&
          <Input
            onChange={debounceInputHandler}
            placeholder="Find..."
            className="w-4/5"
          />
        }
        {shownElements.map((element) => (
          <FilterCheckbox key={element.id} id={element.id} text={element.text}/>
        ))}
        {shownElements.length === 0 && <p className="text-gray-400">Nothing was found</p>}
        {elements?.length > limit &&
          <Button
            variant="link"
            className="text-red-500 p-0 h-6"
            onClick={() => setShowAll(prev => !prev)}
          >
            {!showAll ? '+ Show all' : 'Hide'}
          </Button>
        }
      </div>
    </div>
  );
};

export default Filters;
