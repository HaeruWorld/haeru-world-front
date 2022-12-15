import { atom } from 'recoil';

// 선택한 지역 상태
const areaAtom = atom({ key: 'area', default: null });

// 선택한 어종 리스트
const marineCollectionsAtom = atom({ key: 'marineCollections', default: [] });

export { areaAtom, marineCollectionsAtom };
