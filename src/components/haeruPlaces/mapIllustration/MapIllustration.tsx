import Image from 'next/image';
import { MAP_URL } from './constant';
import { MapIllustrationStyle, NumberTagStyle } from './style';

const MapIllustration = () => {
  const marker = [
    { x: 28, y: 106 }, // 신도리
    { x: 56, y: 126 }, // 일과2리 어촌계
    { x: 72, y: 134 }, // 동일리 어촌계
    { x: 95, y: 130 }, // 하모리 어촌계
    { x: 114, y: 128 }, // 상모 어촌계
  ];

  const IMG_WIDTH = 335;
  const IMG_HEIGHT = 220;
  return (
    <MapIllustrationStyle>
      {marker.map((item, index) => (
        <NumberTagStyle key={index} {...item}>
          {index + 1}
        </NumberTagStyle>
      ))}
      <Image
        width={IMG_WIDTH}
        height={IMG_HEIGHT}
        src={MAP_URL.서귀포}
        alt=""
      />
    </MapIllustrationStyle>
  );
};

export default MapIllustration;
