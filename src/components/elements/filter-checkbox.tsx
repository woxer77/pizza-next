import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

export interface FilterCheckboxProps extends ClassProps {
  id: string;
  text: string;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ className, id, text }) => {
  return (
    <div className={cn('flex font-medium gap-3', className)}>
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className="cursor-pointer select-none leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {text}
      </label>
    </div>
  );
};

export default FilterCheckbox;
