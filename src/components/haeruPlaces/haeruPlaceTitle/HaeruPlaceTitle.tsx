import { MarineCollectionType } from '@/types';
import React from 'react';
import { HaeruPlaceTitleStyle, Highlight } from './style';

type HaeruPlaceTitleProp = {
  area: string;
  marineCollections: MarineCollectionType[];
  isEmpty: boolean;
};
const HaeruPlaceTitle = ({
  area,
  marineCollections,
  isEmpty,
}: HaeruPlaceTitleProp) => {
  const endTitle = isEmpty
    ? `을(를) 해루질하는 장소를 \n 찾지 못했어요.`
    : `을(를) 해루질하는 장소를 \n 찾아봤어요.`;

  return (
    <HaeruPlaceTitleStyle>
      <Highlight>{`"${area}"`}</Highlight>
      {'에서 '}
      <Highlight>{`"${marineCollections.join(',')}"`}</Highlight>
      {endTitle}
    </HaeruPlaceTitleStyle>
  );
};

export default HaeruPlaceTitle;
