import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'

export const counterState = atom({
  key: 'counterState',
  default: 0
})

export const useMyhook = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  // const increment = useCallback(() => {
  //   setCounter(counter + 1);
  // }, []);
  const increment = () => setCounter(counter + 1)
  return [counter, increment];
}
