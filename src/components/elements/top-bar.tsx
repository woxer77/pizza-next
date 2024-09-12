'use client';

import React from 'react';

import { ArrowDownUp } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ClassProps } from '@/ts/interfaces';
import useSegmentedControl from '@/hooks/useSegmentedControl';
import { useActiveCategory } from '@/store/category';

const categories = ['pizzas', 'other1', 'sweet', 'vegetarian', 'other', 'more'];

const TopBar: React.FC<ClassProps> = ({ className }) => {
  const selectionElement = React.useRef<HTMLDivElement>(null);
  const parentElement = React.useRef<HTMLDivElement>(null);

  const { changeSegment } = useSegmentedControl();
  const setActiveCategory = useActiveCategory(state => state.setActiveCategory);
  const activeCategory = useActiveCategory(state => state.activeCategory);

  const changeCategory = React.useCallback((target: EventTarget | (HTMLElement | null), category: string) => {
    if (target instanceof HTMLElement && parentElement.current && selectionElement.current) {
      changeSegment(target, parentElement.current, selectionElement.current);
      setActiveCategory(category);
    }
  }, []);

  React.useEffect(() => {
    const targetElement = parentElement.current?.querySelector(`#${activeCategory || categories[0]}-top-bar`);

    if (targetElement) {
      changeCategory(targetElement, activeCategory);
    }
  }, [changeCategory, activeCategory]);

  return (
    <div className={cn('sticky top-0 bg-white border-b border-solid border-gray-300 shadow-lg shadow-gray-300', className)}>
      <div className='container py-6 flex-space-between'>
        <div className='relative inline-flex select-none rounded-2xl bg-gray-200 gap-1.5 px-1.5 py-1.5' ref={parentElement}>
          {categories.map((category: string) => (
            <a
              className={cn(
                'z-10 cursor-pointer rounded-2xl px-6 py-3 font-bold capitalize transition duration-300 flex-center hover:opacity-70',
                (activeCategory || categories[0]) === category ? 'text-red-500' : 'opacity-50'
              )}
              onClick={(event) => changeCategory(event.target, category)}
              key={category}
              href={`#${category}-group`}
              id={`${category}-top-bar`}
            >
              {category}
            </a>
          ))}
          <div
            className='absolute top-1/2 h-3/4 -translate-y-1/2 rounded-2xl bg-white shadow-md transition-all duration-300'
            ref={selectionElement}
          />
        </div>
        <div className='inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-gray-200 px-6 font-bold py-[18px]'>
          <ArrowDownUp size={20} />
          <p>Sort by: </p>
          <span className='text-red-500'>rating</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
