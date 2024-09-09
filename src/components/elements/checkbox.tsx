import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { Checkbox as CheckboxShadCn } from '@/components/ui/checkbox';

interface CheckboxProps extends ClassProps{
  id: string;
  text: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className, id, text }) => {
  return (
    <div className={cn('flex font-medium', className)}>
      <CheckboxShadCn id={id}/>
      <label
        htmlFor={id}
        className="ml-3 cursor-pointer select-none leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
