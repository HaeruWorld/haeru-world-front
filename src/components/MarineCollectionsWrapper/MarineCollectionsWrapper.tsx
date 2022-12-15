import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MarineCard from '@/components/MarineCard';
import theme from '../../../styles/theme';
import { useRecoilState, useRecoilValue } from 'recoil';
import { areaAtom, marineCollectionsAtom } from '@/store';
import { RecommendedButtonStyle } from '@/components/MarineCard/style';
import { MarineCollectionsWrapperStyle } from './style';

const MarineCollectionsWrapper = () => {
  const router = useRouter();
  const area = useRecoilValue(areaAtom);
  const [marineCollection, setMarineCollection] = useRecoilState(
    marineCollectionsAtom,
  );

  useEffect(() => {
    // 해당 페이지로 바로 들어왔을 때는 메인 페이지로 리다이렉트
    if (!area) {
      router.push('/');
    }
  }, [area]);

  return (
    <MarineCollectionsWrapperStyle>
      <img src="/images/area_picture.png" />
      <div className="title">어떤 애들을 채집해볼까요 ??</div>
      <div className="card-list">
        <MarineCard
          isSelected={marineCollection.includes('보말')}
          imageUrl="/images/bomal_icon.png"
          name="보말"
          onClick={() =>
            setMarineCollection((state) => {
              if (state.includes('보말')) {
                return state.filter((item) => item !== '보말');
              }
              return [...state, '보말'];
            })
          }
        />
        <MarineCard
          isSelected={marineCollection.includes('게')}
          imageUrl="/images/crab_icon.png"
          name="게"
          onClick={() =>
            setMarineCollection((state) => {
              if (state.includes('게')) {
                return state.filter((item) => item !== '게');
              }
              return [...state, '게'];
            })
          }
        />
        <MarineCard
          isSelected={marineCollection.includes('소라')}
          imageUrl="/images/sora_icon.png"
          name="소라"
          onClick={() =>
            setMarineCollection((state) => {
              if (state.includes('소라')) {
                return state.filter((item) => item !== '소라');
              }
              return [...state, '소라'];
            })
          }
        />
        <MarineCard
          isSelected={marineCollection.includes('미역')}
          imageUrl="/images/seaweed_icon.png"
          name="미역"
          onClick={() =>
            setMarineCollection((state) => {
              if (state.includes('미역')) {
                return state.filter((item) => item !== '미역');
              }
              return [...state, '미역'];
            })
          }
        />
        <MarineCard
          isSelected={marineCollection.includes('조개')}
          imageUrl="/images/shell_icon.png"
          name="조개"
          onClick={() =>
            setMarineCollection((state) => {
              if (state.includes('조개')) {
                return state.filter((item) => item !== '조개');
              }
              return [...state, '조개'];
            })
          }
        />
        <MarineCard
          isSelected={marineCollection.includes('톳')}
          imageUrl="/images/tot_icon.png"
          name="톳"
          onClick={() =>
            setMarineCollection((state) => {
              if (state.includes('톳')) {
                return state.filter((item) => item !== '톳');
              }
              return [...state, '톳'];
            })
          }
        />
      </div>
      {marineCollection.length > 0 ? (
        <Link href="/haeruPlaces">
          <RecommendedButtonStyle
            className={marineCollection.length > 0 ? 'selected' : ''}
            backgroundColor={
              marineCollection.length > 0
                ? theme.color.primary_02
                : theme.color.gray_06
            }
            disabled={marineCollection.length < 1}
            color={marineCollection.length > 0 ? '#fff' : theme.color.gray_03}
            isBorder={marineCollection.length > 0}
            text="추천받기"
          />
        </Link>
      ) : (
        <RecommendedButtonStyle
          className={marineCollection.length > 0 ? 'selected' : ''}
          backgroundColor={
            marineCollection.length > 0
              ? theme.color.primary_02
              : theme.color.gray_06
          }
          disabled={marineCollection.length < 1}
          color={marineCollection.length > 0 ? '#fff' : theme.color.gray_03}
          isBorder={marineCollection.length > 0}
          text="추천받기"
        />
      )}
    </MarineCollectionsWrapperStyle>
  );
};

export default MarineCollectionsWrapper;
