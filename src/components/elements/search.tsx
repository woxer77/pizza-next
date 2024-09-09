import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { Search as SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

const Search: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('relative w-full min-w-56', className)}>
      <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-4 stroke-gray-400" size="22" />
      <Input className="h-full !box-border pl-12 text-lg font-semibold" type="search" />
    </div>
  );
};

export default Search;
