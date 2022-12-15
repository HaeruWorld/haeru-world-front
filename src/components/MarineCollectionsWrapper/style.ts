import styled from 'styled-components';

export const MarineCollectionsWrapperStyle = styled.div`
  padding: 0 20px;

  & > img {
    width: 100%;
    height: 100%;
  }

  .title {
    margin: 32px 0;
    text-align: center;
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
