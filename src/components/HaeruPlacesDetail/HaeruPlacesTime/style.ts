import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const HaeruPlacesTimeWrapStyle = styled.div``;

export const HaeruPlaceNameStyle = styled.h2``;

export const HaeruPlaceContentStyle = styled.div`
  background-color: ${theme.color.primary_02};
  text-align: center;
  padding: 30px;
  border-radius: 8px;
`;

export const HaeruPlaceContentTitleStyle = styled.div`
  font-size: 14px;
  color: #fff;
`;

export const HaeruPlaceContentTimeStyle = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${theme.color.sub_02};
`;

export const HaeruPlaceEmptyContentTimeStyle = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${theme.color.gray_07};
`;

export const HaeruPlaceWarningStyle = styled.div`
  background-color: ${theme.color.primary_04};
  margin-top: 4px;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
`;
