import { HaeruPlaceDetailResponseDataType } from '@/components/HaeruPlacesDetail/types';

export type HaeruPlacesMapProps = Pick<
  HaeruPlaceDetailResponseDataType,
  'location' | 'address'
>;
