import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import CharacterCounter from 'components/character-counter'

const Myrecoil: React.FC = () => (
  <RecoilRoot>
    <CharacterCounter />
  </RecoilRoot>
)

export default Myrecoil
