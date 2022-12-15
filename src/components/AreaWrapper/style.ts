import styled from 'styled-components';

export const LocationWrapperStyle = styled.div`
  & > img {
    width: 100%;
    height: 100%;
  }

  .title {
    text-align: center;
    margin: 32px 0;
  }

  .btn-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    min-height: 100%;

    button {
      border: 2px solid ${(props) => props.theme.color.gray_05};

      &:hover {
        color: ${(props) => props.theme.color.primary_01};
        border: 2px solid ${(props) => props.theme.color.primary_02};
      }
    }
  }

  .next-btn {
    margin-top: 30px;
  }
`;
