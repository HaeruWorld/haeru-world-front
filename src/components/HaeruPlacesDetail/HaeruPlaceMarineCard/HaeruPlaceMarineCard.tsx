import React from 'react';
import { HaeruPlaceMarineCardProps } from './types';
import Image from 'next/image';
import { HaeruPlaceMarineCardWrapStyle } from './style';

const HaeruPlaceMarineCard = ({
  imageUrl,
  name,
  width,
  height,
}: HaeruPlaceMarineCardProps) => {
  return (
    <HaeruPlaceMarineCardWrapStyle>
      <img
        src={imageUrl}
        alt="해루 가능한 어종 사진"
        width={width}
        height={height}
      />
      <span>{name}</span>
    </HaeruPlaceMarineCardWrapStyle>
  );
};

export default HaeruPlaceMarineCard;
