import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const fBoardState = atom({
  key : 'fBoardState',
  default : [{
    free_num : 0,
    free_subject : "",
    free_regdate : "",
    free_title : "",
    free_views : 0,
    mem_nick : "",
  }]
})

export const pageState = atom({
  key : 'pageState',
  default : 0,
  effects_UNSTABLE : [persistAtom],
})