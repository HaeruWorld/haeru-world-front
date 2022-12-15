import { MarineCollectionType } from '@/types';

type QueryList = {
  HAERU_PLACES: {
    area: string;
    marineCollections: MarineCollectionType[];
  };
  // 해루질 가능한 장소 상세 페이지
  HAERU_PLACES_DETAIL: number;
};

const getQueryKey = <T extends keyof QueryList>(
  ...[key, params]: undefined extends QueryList[T] ? [T] : [T, QueryList[T]]
) => {
  return params ? [key, params] : [key];
};

export default getQueryKey;
