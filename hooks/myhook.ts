import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'

export const counterState = atom({
  key: 'counterState',
  default: 0
})

export const useMyhook = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  console.log('@useMyhook counter : ', counter)
  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);
  return [counter, increment] as const;
}

