import React, { ChangeEvent } from 'react';

type EventType = ChangeEvent<HTMLInputElement>;
type CallbackType = (event: EventType) => void;

const useDebounce = (callback: CallbackType, delay: number) => {
  const timeoutId = React.useRef<NodeJS.Timeout | null>(null);

  return (event: EventType) => {
    if(timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      callback(event);
    }, delay);
  };
};

export default useDebounce;
