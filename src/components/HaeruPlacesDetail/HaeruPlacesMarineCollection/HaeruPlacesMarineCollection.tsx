import React from 'react';
import { HaeruPlacesMarineCollectionProps } from '@/components/HaeruPlacesDetail/HaeruPlacesMarineCollection/types';
import {
  HaeruPlacesMarineCollectionContentStyle,
  HaeruPlacesMarineCollectionTitleStyle,
  HaeruPlacesMarineCollectionWrapStyle,
} from './style';
import HaeruPlaceMarineCard from '@/components/HaeruPlacesDetail/HaeruPlaceMarineCard';

const HaeruPlacesMarineCollection = ({
  marineCollections,
}: HaeruPlacesMarineCollectionProps) => {
  return (
    <HaeruPlacesMarineCollectionWrapStyle>
      <HaeruPlacesMarineCollectionTitleStyle>
        채집할 수 있어요
      </HaeruPlacesMarineCollectionTitleStyle>
      <HaeruPlacesMarineCollectionContentStyle>
        {marineCollections.map((item, index) => (
          <HaeruPlaceMarineCard
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
          />
        ))}
      </HaeruPlacesMarineCollectionContentStyle>
    </HaeruPlacesMarineCollectionWrapStyle>
  );
};

export default HaeruPlacesMarineCollection;
