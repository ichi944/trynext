import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import CharacterCounter from 'components/character-counter'
import ShowCounter from 'components/show-counter'

const Myrecoil: React.FC = () => (
  <RecoilRoot>
    <CharacterCounter />
    <ShowCounter />
  </RecoilRoot>
)

export default Myrecoil
