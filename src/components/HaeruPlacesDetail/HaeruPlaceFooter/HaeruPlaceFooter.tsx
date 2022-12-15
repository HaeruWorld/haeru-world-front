import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const HaeruPlaceFooter = () => {
  return (
    <HaeruPlaceFooterWrapper>
      <FooterLogo
        width={60}
        height={16}
        src="/images/baru_footer.png"
        alt="바로해루 footer"
      />
      <FooterTitle>{'무너져가는 제주 해양생태계를 위해'}</FooterTitle>
      <FooterTitle>{'제주바다를 건강하게 즐기는 문화를 알립니다'}</FooterTitle>
    </HaeruPlaceFooterWrapper>
  );
};

export default HaeruPlaceFooter;
const FooterLogo = styled(Image)`
  margin-bottom: 10px;
`;
const HaeruPlaceFooterWrapper = styled.div`
  background: ${({ theme }) => theme.color.gray_06};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 0;
  margin-top: 32px;
  text-align: center;
`;

const FooterTitle = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.gray_03};
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
`;
