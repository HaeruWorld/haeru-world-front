import styled from 'styled-components';

export const HaeruPlaceItemWrapStyle = styled.li`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  background: #d9d9d9;
  border-radius: 8px;
`;

export const HaeruPlaceItemNameStyle = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
`;

export const NumberTagStyle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary_01};
  color: ${({ theme }) => theme.color.gray_07};
`;

export const ColumStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
