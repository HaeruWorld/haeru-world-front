import { areaAtom } from '@/store';
import { HaeruPlace } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { MAP_URL } from './constant';
import { MapIllustrationStyle, NumberTagStyle } from './style';
type MapIllustrationProps = {
  places: HaeruPlace[];
};

const MapIllustration = ({ places }: MapIllustrationProps) => {
  const IMG_WIDTH = 335;
  const IMG_HEIGHT = 220;
  const area = useRecoilValue(areaAtom) || '애월';
  return (
    <MapIllustrationStyle>
      {places?.map(({ markerPosition, id }, index) => (
        <NumberTagStyle key={index} {...markerPosition}>
          <Link href={`haeruPlaces/${id}`}>{index + 1}</Link>
        </NumberTagStyle>
      ))}
      <Image width={IMG_WIDTH} height={IMG_HEIGHT} src={MAP_URL[area]} alt="" />
    </MapIllustrationStyle>
  );
};

export default MapIllustration;
