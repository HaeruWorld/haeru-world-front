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
  HaeruPlaceEmptyContentTimeStyle,
} from './style';

const HaeruPlacesTime = ({
  name,
  startTime,
  endTime,
}: HaeruPlacesTimeProps) => {
  const area = useRecoilValue(areaAtom);

  const isTimeNull = !startTime || !endTime;

  return (
    <HaeruPlacesTimeWrapStyle>
      <HaeruPlaceNameStyle>
        {area ? `${area} ${name}` : name}
      </HaeruPlaceNameStyle>
      <HaeruPlaceContentStyle>
        <HaeruPlaceContentTitleStyle>
          {!isTimeNull
            ? '오늘의 해루 가능 시간'
            : '오늘은 갯벌 시간이 맞지 않아'}
        </HaeruPlaceContentTitleStyle>
        {isTimeNull ? (
          <HaeruPlaceEmptyContentTimeStyle>
            해루질을 할 수 없어요 🥲
          </HaeruPlaceEmptyContentTimeStyle>
        ) : (
          <HaeruPlaceContentTimeStyle>
            {startTime} ~ {endTime}
          </HaeruPlaceContentTimeStyle>
        )}
      </HaeruPlaceContentStyle>
      {!isTimeNull && (
        <HaeruPlaceWarningStyle>
          ⓘ 안전을 위해 꼭 시간을 지켜주세요
        </HaeruPlaceWarningStyle>
      )}
    </HaeruPlacesTimeWrapStyle>
  );
};

export default HaeruPlacesTime;
