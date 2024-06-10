import { useState, useEffect } from 'react';

export function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return count;
}