import { MarineCollectionType } from '@/types';
import React from 'react';
import styled from 'styled-components';
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
    ? `해루질하는 장소를 \n 찾지 못했어요.`
    : `해루질하는 장소를 \n 찾아봤어요.`;

  return (
    <HaeruPlaceTitleWrapperStyle>
      <HaeruPlaceTitleStyle>
        <Highlight>{`"${area}"`}</Highlight>
        {'에서 '}
        <Highlight>{`"${marineCollections.join(',')}"`}</Highlight>
        을(를)
      </HaeruPlaceTitleStyle>
      <br />
      <HaeruPlaceTitleStyle>{endTitle}</HaeruPlaceTitleStyle>
    </HaeruPlaceTitleWrapperStyle>
  );
};

const HaeruPlaceTitleWrapperStyle = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

export default HaeruPlaceTitle;
