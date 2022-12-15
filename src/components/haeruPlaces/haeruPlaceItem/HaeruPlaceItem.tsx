import React from 'react';
import {
  RowStyle,
  HaeruPlaceItemWrapStyle,
  HaeruPlaceItemNameStyle,
  NumberTagStyle,
  ColumStyle,
} from './style';
import { HaeruPlaceItemProps } from './types';
import LineTag from '@/components/common/lineTag';

const HaeruPlaceItem = ({
  name,
  marineCollections,
  makerIndex,
  selectedCollections,
}: HaeruPlaceItemProps) => {
  const filteredCollections = marineCollections.filter((collection) =>
    selectedCollections.includes(collection),
  );
  return (
    <HaeruPlaceItemWrapStyle>
      <NumberTagStyle>{makerIndex + 1}</NumberTagStyle>
      <ColumStyle>
        <HaeruPlaceItemNameStyle>{name}</HaeruPlaceItemNameStyle>
        <RowStyle>
          {filteredCollections.map((marineCollection) => (
            <LineTag key={marineCollection} text={marineCollection} />
          ))}
        </RowStyle>
      </ColumStyle>
    </HaeruPlaceItemWrapStyle>
  );
};

export default HaeruPlaceItem;
