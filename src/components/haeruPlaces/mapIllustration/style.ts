import styled from 'styled-components';

export const MapIllustrationStyle = styled.div`
  position: relative;
  width: 335px;
  height: 220px;
  background: #f4f4f4;
  border-radius: 8px;
`;

export const NumberTagStyle = styled.div<{ x: number; y: number }>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  font-size: 13px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.gray_07};
  color: ${({ theme }) => theme.color.gray_01};
`;
