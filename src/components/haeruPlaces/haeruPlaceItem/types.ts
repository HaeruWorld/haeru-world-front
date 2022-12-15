import { HaeruPlace } from '@/types';

export type HaeruPlaceItemProps = Omit<
  HaeruPlace,
  'address' | 'markerPosition'
> & {
  makerIndex: number;
};
