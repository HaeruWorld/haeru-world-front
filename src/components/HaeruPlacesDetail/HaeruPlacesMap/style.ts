import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';

export const HaeruPlacesMapWrapStyle = styled.div`
  margin-top: 40px;
`;

export const HaeruPlacesMapTitleStyle = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const HaeruPlacesMapAddressStyle = styled.div`
  margin-bottom: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  display: flex;
  align-items: center;
  letter-spacing: -0.5px;

  /* Gray-1 */

  color: #1d1e20;
`;

export const HaeruPlacesMapStyle = styled(Map)`
  border: 1px solid black;
`;
