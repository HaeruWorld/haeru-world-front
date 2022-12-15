import React from 'react';
import { MarineCardType } from './types';
import { MarineCardWrapperStyle } from './style';

const MarineCard = ({
  isSelected = false,
  imageUrl,
  name,
  onClick,
}: MarineCardType) => {
  return (
    <MarineCardWrapperStyle isSelected={isSelected} onClick={onClick}>
      <img src={imageUrl} alt={`${name} 아이콘`} />
      <div>{name}</div>
    </MarineCardWrapperStyle>
  );
};

export default MarineCard;
