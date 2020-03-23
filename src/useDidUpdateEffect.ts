import { useEffect, useRef } from 'react';

// Motiviation for hook outlined by following thread
// https://stackoverflow.com/a/53180013
export default function useDidUpdateEffect(fn: () => void, inputs: string[]): void {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs);
}
