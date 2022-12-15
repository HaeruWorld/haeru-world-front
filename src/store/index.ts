import { atom } from 'recoil';
import { MarineCollectionType } from '@/types';

// 선택한 지역 상태
const areaAtom = atom<string | null>({ key: 'area', default: null });

// 선택한 어종 리스트
const marineCollectionsAtom = atom<MarineCollectionType[]>({
  key: 'marineCollections',
  default: [],
});

export { areaAtom, marineCollectionsAtom };
