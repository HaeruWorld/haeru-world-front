import styled from 'styled-components';

export const MarineCollectionsWrapperStyle = styled.div`
  padding: 20px 20px;

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

  .card-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  button {
    margin: 30px 0 20px;
  }
`;
