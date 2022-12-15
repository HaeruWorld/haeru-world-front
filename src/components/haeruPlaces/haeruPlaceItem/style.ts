import Link from 'next/link';
import styled from 'styled-components';

export const HaeruPlaceItemWrapStyle = styled.li`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  border-radius: 8px;

  background: #f5f5f6;

  border: 1px solid ${({ theme }) => theme.color.gray_05};
`;

export const LinkStyle = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const HaeruPlaceItemNameStyle = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const NumberTagStyle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  background: ${({ theme }) => theme.color.gray_07};
  color: ${({ theme }) => theme.color.gray_01};
  border-radius: 50%;
`;

export const ColumStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;
