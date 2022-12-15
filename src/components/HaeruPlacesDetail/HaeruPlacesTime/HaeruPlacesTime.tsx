import React from 'react';
import { useRecoilValue } from 'recoil';
import { HaeruPlacesTimeProps } from '@/components/HaeruPlacesDetail/HaeruPlacesTime/types';
import { areaAtom } from '@/store';
import {
  HaeruPlaceNameStyle,
  HaeruPlacesTimeWrapStyle,
  HaeruPlaceContentStyle,
  HaeruPlaceContentTitleStyle,
  HaeruPlaceContentTimeStyle,
  HaeruPlaceWarningStyle,
} from './style';

const HaeruPlacesTime = ({
  name,
  startTime,
  endTime,
}: HaeruPlacesTimeProps) => {
  const area = useRecoilValue(areaAtom);

  return (
    <HaeruPlacesTimeWrapStyle>
      <HaeruPlaceNameStyle>
        {area ? `${area} ${name}` : name}
      </HaeruPlaceNameStyle>
      <HaeruPlaceContentStyle>
        <HaeruPlaceContentTitleStyle>
          오늘의 해루 가능 시간
        </HaeruPlaceContentTitleStyle>
        <HaeruPlaceContentTimeStyle>
          {startTime} ~ {endTime}
        </HaeruPlaceContentTimeStyle>
      </HaeruPlaceContentStyle>
      <HaeruPlaceWarningStyle>
        ⓘ 안전을 위해 꼭 시간을 지켜주세요
      </HaeruPlaceWarningStyle>
    </HaeruPlacesTimeWrapStyle>
  );
};

export default HaeruPlacesTime;
