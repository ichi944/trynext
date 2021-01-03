import React, { useCallback, useEffect } from 'react'
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import { textState } from 'atoms/atoms'
import { useMyhook } from 'hooks/myhook'

const ShowCounter: React.FC = () => {
  const [counter, increment] = useMyhook()

  return (
    <div>
      <div>only show count: { counter }</div>
    </div>
  )
}

export default ShowCounter
