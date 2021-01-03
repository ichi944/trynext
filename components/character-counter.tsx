import React, { useCallback, useEffect } from 'react'
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import { textState } from 'atoms/atoms'
import { useMyhook } from 'hooks/myhook'

const CharacterCounter: React.FC = () => {
  const [text, setText] = useRecoilState(textState)
  const [counter, increment] = useMyhook()
  // const [counter, setCounter] = useRecoilState(counterState)

  const onChange = (event: React.SyntheticEvent) => {
    setText((event.target as HTMLInputElement).value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange}/>
      <div>count is: { counter }</div>
      <div><button onClick={() => increment()}>Increment</button></div>
      Hello Recoil!
    </div>
  )
}

export default CharacterCounter
