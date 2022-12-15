import React from 'react';
import { HaeruPlaceMarineCardProps } from './types';
import { HaeruPlaceMarineCardWrapStyle } from './style';

const HaeruPlaceMarineCard = ({
  imageUrl,
  name,
}: HaeruPlaceMarineCardProps) => {
  return (
    <HaeruPlaceMarineCardWrapStyle>
      <img src={imageUrl} alt="해루 가능한 어종 사진" />
      <span>{name}</span>
    </HaeruPlaceMarineCardWrapStyle>
  );
};

export default HaeruPlaceMarineCard;
