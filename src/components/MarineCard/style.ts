import styled from 'styled-components';
import theme from '../../../styles/theme';
import Button from '../common/Button';
import { MarineCardType } from '@/components/MarineCard/types';

export const MarineCardWrapperStyle = styled.div<
  Pick<MarineCardType, 'isSelected' | 'onClick'>
>`
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.color.primary_04
      : props.theme.color.gray_06};
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 160px;
  border-radius: 8px;
  border: ${(props) =>
    props.isSelected
      ? `2px solid ${props.theme.color.primary_02}`
      : `1px solid ${props.theme.color.gray_05}`};

  & > img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

  & > div {
    margin-top: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const RecommendedButtonStyle = styled(Button)``;
