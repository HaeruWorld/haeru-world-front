import { HaeruPlace, MarineCollectionType } from '@/types';

export type HaeruPlaceItemProps = Omit<
  HaeruPlace,
  'address' | 'markerPosition'
> & {
  makerIndex: number;
  selectedCollections: MarineCollectionType[];
};
