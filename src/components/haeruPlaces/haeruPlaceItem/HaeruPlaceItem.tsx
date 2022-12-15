import React from 'react';
import {
  RowStyle,
  HaeruPlaceItemWrapStyle,
  HaeruPlaceItemNameStyle,
  NumberTagStyle,
  ColumStyle,
  LinkStyle,
} from './style';
import { HaeruPlaceItemProps } from './types';
import LineTag from '@/components/common/lineTag';

const HaeruPlaceItem = ({
  name,
  id,
  marineCollections,
  makerIndex,
  selectedCollections,
}: HaeruPlaceItemProps) => {
  const filteredCollections = marineCollections.filter((collection) =>
    selectedCollections.includes(collection),
  );

  return (
    <HaeruPlaceItemWrapStyle>
      <LinkStyle href={`haeruPlaces/${id}`}>
        <NumberTagStyle>{makerIndex + 1}</NumberTagStyle>
        <ColumStyle>
          <HaeruPlaceItemNameStyle>{name}</HaeruPlaceItemNameStyle>
          <RowStyle>
            {filteredCollections.map((marineCollection) => (
              <LineTag key={marineCollection} text={marineCollection} />
            ))}
          </RowStyle>
        </ColumStyle>
      </LinkStyle>
    </HaeruPlaceItemWrapStyle>
  );
};

export default HaeruPlaceItem;
