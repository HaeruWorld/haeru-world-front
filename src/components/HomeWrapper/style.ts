import styled from 'styled-components';
import Button from '@/components/common/Button';

export const HomeWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 42px;
  height: 100%;
  text-align: center;

  img {
    object-fit: cover;
    min-width: 100%;
    height: 50%;
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
