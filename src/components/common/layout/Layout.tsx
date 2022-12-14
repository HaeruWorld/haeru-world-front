import React from 'react';
import { LayoutWrapStyle } from './style';
import { layoutType } from './types';

const Layout = ({ children }: layoutType) => (
  <LayoutWrapStyle>{children}</LayoutWrapStyle>
);

export default Layout;
