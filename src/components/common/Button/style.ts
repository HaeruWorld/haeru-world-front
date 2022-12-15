import styled from 'styled-components';
import { ButtonType } from './types';

export const ButtonWrapStyle = styled.button<Omit<ButtonType, 'text'>>`
  color: ${(props) =>
    props.disabled ? props.theme.color.gray_03 : props.color};
  border-radius: ${(props) => props.radius}px;
  background-color: ${(props) =>
    props.disabled ? props.theme.color.gray_04 : props.backgroundColor};
  width: 100%;
  font-size: 20px;
  text-align: center;
  border: none;
  box-shadow: none;
  padding: 20px 0;
  overflow: visible;
  border: ${(props) =>
    props.isBorder
      ? `2px solid ${props.theme.color.primary_02} !important`
      : 'none'}};

  &:hover {
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  }
`;
