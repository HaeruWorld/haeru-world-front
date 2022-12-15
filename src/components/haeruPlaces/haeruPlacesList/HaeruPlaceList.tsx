import React from 'react';
import HaeruPlaceItem from '@/components/haeruPlaces/haeruPlaceItem';
import { HaeruPlaceListULStyle } from './style';
import { HaeruPlaceListProps } from './types';

const HaeruPlaceList = ({ places }: HaeruPlaceListProps) => {
  return (
    <HaeruPlaceListULStyle>
      {places.map((place, index) => (
        <HaeruPlaceItem
          key={place.id}
          {...place}
          selectedCollections={['톳']}
          makerIndex={index}
        />
      ))}
    </HaeruPlaceListULStyle>
  );
};

export default HaeruPlaceList;
