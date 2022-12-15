import React from 'react';
import {
  HaeruNoticeContentStyle,
  HaeruNoticeTitleStyle,
  HaeruNoticeWrapStyle,
} from './style';

const HaeruNotice = () => {
  return (
    <HaeruNoticeWrapStyle>
      <HaeruNoticeTitleStyle>해루질이 처음이라면?</HaeruNoticeTitleStyle>
      <HaeruNoticeContentStyle>
        <div className="notice-required">안전을 위해 꼭 필요해요</div>
        <span>구명조끼. 헤드랜턴. 호루라기</span>
      </HaeruNoticeContentStyle>
      <HaeruNoticeContentStyle>
        <div className="notice-collect">채집 도구로 사용할 수 있어요</div>
        <span>장화/가슴장화. 투망. 호미</span>
      </HaeruNoticeContentStyle>
      <HaeruNoticeContentStyle>
        <div className="notice-ban">법적으로 사용할 수 없어요</div>
        <span>스쿠버 장비. 뜰채</span>
      </HaeruNoticeContentStyle>
    </HaeruNoticeWrapStyle>
  );
};

export default HaeruNotice;
