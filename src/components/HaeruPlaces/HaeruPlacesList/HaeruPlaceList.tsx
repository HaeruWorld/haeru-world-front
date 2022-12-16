import React from 'react';
import HaeruPlaceItem from '@/components/HaeruPlaces/HaeruPlaceItem';
import { HaeruPlaceListULStyle } from './style';
import { HaeruPlaceListProps } from './types';
import { useRecoilValue } from 'recoil';
import { marineCollectionsAtom } from '@/store';
import { MarineCollectionType } from '@/types';

const HaeruPlaceList = ({ places, isEmpty }: HaeruPlaceListProps) => {
  const marineCollections = useRecoilValue(marineCollectionsAtom);
  const allCollections: MarineCollectionType[] = [
    '게',
    '미역',
    '보말',
    '소라',
    '조개',
    '톳',
  ];
  return (
    <HaeruPlaceListULStyle>
      {places?.map((place, index) => (
        <HaeruPlaceItem
          key={place.id}
          {...place}
          selectedCollections={isEmpty ? allCollections : marineCollections}
          makerIndex={index}
        />
      ))}
    </HaeruPlaceListULStyle>
  );
};

export default HaeruPlaceList;
