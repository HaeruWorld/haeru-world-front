import HaeruPlacesSection from '@/components/haeruPlaces/haeruPlacesSection';
import React from 'react';
import styled from 'styled-components';

const haeruPlacesPage = () => {
  return (
    <>
      <LogoStyle>
        <img height={20} src="/images/text_logo.png" alt={'로고 이미지'} />
      </LogoStyle>
      <HaeruPlacesSection />;
    </>
  );
};

export default haeruPlacesPage;

const LogoStyle = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
