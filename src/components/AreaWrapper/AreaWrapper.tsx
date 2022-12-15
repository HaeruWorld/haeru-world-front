import React from 'react';
import Button from '../common/Button';
import { useRecoilState } from 'recoil';
import { areaAtom } from '@/store';
import theme from 'styles/theme';
import Link from 'next/link';
import { LocationWrapperStyle } from './style';

const AreaWrapper = () => {
  const [area, setArea] = useRecoilState(areaAtom);

  return (
    <LocationWrapperStyle>
      <img src="/images/area_picture.png" />
      <div className="title">어디에서 해루질 해볼까요?</div>
      <img src="/images/jeju_map_picture.png" />
      <div className="btn-list">
        <Button
          className={area === '애월' ? 'selected' : ''}
          color={area === '애월' ? theme.color.primary_01 : '#000'}
          backgroundColor={
            area === '애월' ? theme.color.primary_04 : theme.color.gray_06
          }
          isBorder={area === '애월'}
          text="애월"
          onClick={() => setArea('애월')}
        />
        <Button
          className={area === '제주' ? 'selected' : ''}
          color={area === '제주' ? theme.color.primary_01 : '#000'}
          backgroundColor={
            area === '제주' ? theme.color.primary_04 : theme.color.gray_06
          }
          isBorder={area === '제주'}
          text="제주"
          onClick={() => setArea('제주')}
        />
        <Button
          className={area === '성산' ? 'selected' : ''}
          color={area === '성산' ? theme.color.primary_01 : '#000'}
          backgroundColor={
            area === '성산' ? theme.color.primary_04 : theme.color.gray_06
          }
          isBorder={area === '성산'}
          text="성산"
          onClick={() => setArea('성산')}
        />
        <Button
          className={area === '서귀포' ? 'selected' : ''}
          color={area === '서귀포' ? theme.color.primary_01 : '#000'}
          backgroundColor={
            area === '서귀포' ? theme.color.primary_04 : theme.color.gray_06
          }
          isBorder={area === '서귀포'}
          text="서귀포"
          onClick={() => setArea('서귀포')}
        />
      </div>
      {!area ? (
        <Button
          className="next-btn"
          text="다음"
          color="#fff"
          backgroundColor={theme.color.primary_02}
          disabled={!area}
          onClick={(e) => {
            if (!area) {
              e.preventDefault();
              return;
            }
          }}
        />
      ) : (
        <Link href="/marineCollections">
          <Button
            className="next-btn"
            text="다음"
            color="#fff"
            backgroundColor={theme.color.primary_02}
            disabled={!area}
            onClick={(e) => {
              if (!area) {
                e.preventDefault();
                return;
              }
            }}
          />
        </Link>
      )}
    </LocationWrapperStyle>
  );
};

export default AreaWrapper;
