import { atom } from 'recoil'

export const search = atom<string | undefined>({
  key: 'search', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
