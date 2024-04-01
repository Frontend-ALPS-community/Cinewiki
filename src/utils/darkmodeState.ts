import { atom } from 'recoil'

export const DarkModeState = atom<boolean>({
  key: 'darkModeState', // Recoil 상태의 고유 키
  default: false, // 기본값은 false로 설정 (라이트 모드)
})
