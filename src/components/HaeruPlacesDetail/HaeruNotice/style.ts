import styled from 'styled-components';
import theme from 'styles/theme';

export const HaeruNoticeWrapStyle = styled.div`
  margin-top: 40px;
  padding: 20px 15px;
  background-color: ${theme.color.gray_05};
  text-align: center;
`;

export const HaeruNoticeTitleStyle = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

export const HaeruNoticeContentStyle = styled.div`
  line-height: 30px;

  .notice-required {
    &:before {
      content: '🟠';
      margin-right: 10px;
    }
  }
  .notice-collect {
    &:before {
      content: '🟢';
      margin-right: 10px;
    }
  }

  .notice-ban {
    &:before {
      content: '🔴';
      margin-right: 10px;
    }
  }

  & > span {
    margin-left: 17px;
  }

  &:not(:first-child) {
    margin-top: 15px;
  }
`;
