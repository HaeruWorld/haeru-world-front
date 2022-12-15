import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';

export const HaeruPlacesMapWrapStyle = styled.div`
  margin-top: 40px;
`;

export const HaeruPlacesMapTitleStyle = styled.h3``;

export const HaeruPlacesMapAddressStyle = styled.div`
  margin-bottom: 20px;
`;

export const HaeruPlacesMapStyle = styled(Map)`
  border: 1px solid black;
`;
