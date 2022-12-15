import { MouseEventHandler } from 'react';

export type ButtonType = {
  className?: string;
  text: string;
  radius?: number;
  color?: string;
  disabled?: boolean;
  backgroundColor?: string;
  isBorder?: boolean;
  onClick?: MouseEventHandler;
};
