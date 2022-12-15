import styled from 'styled-components';
import Button from '@/components/common/Button';

export const HomeWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 42px;
  height: 100%;
  text-align: center;
  margin-top: 32px;
  img {
    object-fit: cover;
    min-width: 100%;~
  }
`;

export const HomeContentStyle = styled.p`
  padding: 30px;
  text-align: center;
  line-height: 27px;
  font-size: 18px;
`;

export const ButtonStyle = styled(Button)`
  width: 90%;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.color.primary_03};
  font-weight: 700;
`;
