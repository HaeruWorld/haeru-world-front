import styled from 'styled-components';

export const LineTagStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  margin-right: 8px;
  font-size: 13px;

  background: ${({ theme }) => theme.color.gray_07};
  color: ${({ theme }) => theme.color.primary_01};
  border: 1px solid ${({ theme }) => theme.color.primary_03}};
  border-radius: 4px;


`;
