import styled from 'styled-components';

export const LocationWrapperStyle = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & > img {
    width: 100%;
  }

  .title {
    margin: 32px 0;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  .btn-list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      border: 2px solid ${(props) => props.theme.color.gray_05};

      &:hover {
        color: ${(props) => props.theme.color.primary_01};
        border: 2px solid ${(props) => props.theme.color.primary_02};
      }
    }
  }
`;
