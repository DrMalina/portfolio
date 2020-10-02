import { useState, useEffect } from 'react';

export const useMedia = (query: string, initialState = false): boolean => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);

    function onChange() {
      if (!mounted) {
        return;
      }
      setState(Boolean(mql.matches));
    }

    mql.addEventListener('change', onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeEventListener('change', onChange);
    };
  }, [query]);

  return state;
};
