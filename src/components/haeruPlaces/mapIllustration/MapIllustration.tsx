import { HaeruPlace } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { MAP_URL } from './constant';
import { MapIllustrationStyle, NumberTagStyle } from './style';
type MapIllustrationProps = {
  places: HaeruPlace[];
};

const MapIllustration = ({ places }: MapIllustrationProps) => {
  const IMG_WIDTH = 335;
  const IMG_HEIGHT = 220;
  return (
    <MapIllustrationStyle>
      {places.map(({ markerPosition, id }, index) => (
        <NumberTagStyle key={index} {...markerPosition}>
          <Link href={`haeruPlaces/${id}`}>{index + 1}</Link>
        </NumberTagStyle>
      ))}
      <Image width={IMG_WIDTH} height={IMG_HEIGHT} src={MAP_URL.애월} alt="" />
    </MapIllustrationStyle>
  );
};

export default MapIllustration;
