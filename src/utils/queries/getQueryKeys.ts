import { MarineCollectionType } from '@/types';

type QueryList = {
  HAERU_PLACES: {
    area: string;
    marineCollections: MarineCollectionType[];
  };
};

const getQueryKey = <T extends keyof QueryList>(
  ...[key, params]: undefined extends QueryList[T] ? [T] : [T, QueryList[T]]
) => {
  return params ? [key, params] : [key];
};

export default getQueryKey;
