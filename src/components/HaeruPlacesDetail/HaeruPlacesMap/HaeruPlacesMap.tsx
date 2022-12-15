import React from 'react';
import { HaeruPlacesMapProps } from './types';
import {
  HaeruPlacesMapAddressStyle,
  HaeruPlacesMapStyle,
  HaeruPlacesMapTitleStyle,
  HaeruPlacesMapWrapStyle,
} from './style';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const HaeruPlacesMap = ({ location, address }: HaeruPlacesMapProps) => {
  return (
    <HaeruPlacesMapWrapStyle>
      <HaeruPlacesMapTitleStyle>
        여기서 해루질을 할 수 있어요
      </HaeruPlacesMapTitleStyle>
      <HaeruPlacesMapAddressStyle>{address}</HaeruPlacesMapAddressStyle>

      <HaeruPlacesMapStyle
        center={{ lat: location.latitude, lng: location.longitude }}
        style={{ width: '100%', height: '360px' }}
      >
        <MapMarker
          position={{ lat: location.latitude, lng: location.longitude }}
        />
      </HaeruPlacesMapStyle>
    </HaeruPlacesMapWrapStyle>
  );
};

export default HaeruPlacesMap;
