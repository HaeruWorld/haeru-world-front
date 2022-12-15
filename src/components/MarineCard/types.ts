import { MouseEventHandler } from 'react';

export type MarineCardType = {
  isSelected: boolean;
  name: string;
  imageUrl: string;
  onClick: MouseEventHandler;
};
