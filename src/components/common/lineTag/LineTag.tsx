import React from 'react';
import { LineTagStyle } from './style';
import { LineTagProps } from './types';

const LineTag = ({ text }: LineTagProps) => (
  <LineTagStyle>{text}</LineTagStyle>
);

export default LineTag;
