import { atom } from 'recoil';
import { TextState } from 'types/types'

export const textState = atom<string>({
  key: 'textState',
  default: '',
})

// export const counterState = atom<number>({
//   key: 'counterState',
//   default: 0,
// })
