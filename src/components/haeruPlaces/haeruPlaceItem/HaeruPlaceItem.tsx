import React from 'react';
import { RowStyle, HaeruPlaceItemWrapStyle, HaeruPlaceItemNameStyle, NumberTagStyle, ColumStyle } from './style';
import { HaeruPlaceItemProps } from './types';
import LineTag from '@/components/common/lineTag'


const HaeruPlaceItem = ({ name, marineCollections  , makerIndex }: HaeruPlaceItemProps) => {
  return <HaeruPlaceItemWrapStyle>
    <NumberTagStyle>{makerIndex}</NumberTagStyle>
    <ColumStyle>
    <HaeruPlaceItemNameStyle>{name}</HaeruPlaceItemNameStyle>
    <RowStyle>

    <LineTag text={"게"} /> <LineTag text={"게"} /><LineTag text={"게"} />
    </RowStyle>
    </ColumStyle> 
  </HaeruPlaceItemWrapStyle>
}

export default HaeruPlaceItem