import React from 'react';
import { HaeruPlaceMarineCardProps } from './types';
import { HaeruPlaceMarineCardWrapStyle } from './style';

const HaeruPlaceMarineCard = ({
  imageUrl,
  name,
}: HaeruPlaceMarineCardProps) => {
  return (
    <HaeruPlaceMarineCardWrapStyle>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
    </HaeruPlaceMarineCardWrapStyle>
  );
};

export default HaeruPlaceMarineCard;
