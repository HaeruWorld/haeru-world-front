import styled from 'styled-components';
import { ButtonType } from './types';

export const ButtonWrapStyle = styled.button<Omit<ButtonType, 'text'>>`
  color: ${(props) => props.color};
  border-radius: ${(props) => props.radius}px;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  font-size: 20px;
  text-align: center;
  border: none;
  box-shadow: none;
  padding: 20px 0;
  overflow: visible;

  &:hover {
    cursor: pointer;
  }
`;
