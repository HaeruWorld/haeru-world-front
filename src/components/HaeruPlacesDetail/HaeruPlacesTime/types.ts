import { HaeruPlaceDetailResponseDataType } from '@/components/HaeruPlacesDetail/types';

export type HaeruPlacesTimeProps = Pick<
  HaeruPlaceDetailResponseDataType,
  'name' | 'startTime' | 'endTime'
>;
