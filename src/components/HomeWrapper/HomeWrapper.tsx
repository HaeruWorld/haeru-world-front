import React from 'react';
import theme from 'styles/theme';
import Link from 'next/link';
import {
  ButtonStyle,
  Highlight,
  HomeContentStyle,
  HomeWrapStyle,
} from './style';

const HomeWrapper = () => {
  return (
    <HomeWrapStyle>
      <img src="/images/main_picture.png" alt={'메인 이미지'} />
      <HomeContentStyle>
        새롭게 바다를 즐기며 <br />
        조개/미역 등을 잡는 활동,
        <Highlight> 해루질!</Highlight>
        <br />
        <br />
        언제, 어디서, 어떻게 하는지 알아볼까요?
      </HomeContentStyle>
      <Link href="/area">
        <ButtonStyle
          text="바로 알아보기"
          color="#fff"
          backgroundColor={theme.color.primary_02}
        />
      </Link>
    </HomeWrapStyle>
  );
};

export default HomeWrapper;
