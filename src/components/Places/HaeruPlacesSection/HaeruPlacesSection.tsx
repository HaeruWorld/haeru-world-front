import useHaeruPlaces from '@/hooks/queries/useHaeruPlaces';
import { areaAtom, marineCollectionsAtom } from '@/store';
import { useRecoilValue } from 'recoil';

import HaeruPlaceTitle from '../HaeruPlaceTitle/HaeruPlaceTitle';
import MapIllustration from '../MapIllustration/MapIllustration';
import { HaeruPlacesSectionWrapperStyle, LogoStyle } from './style';
import HaeruPlaceList from '../HaeruPlacesList/HaeruPlaceList';

const HaeruPlacesSection = () => {
  const AREA = {
    애월: 'AEWOL',
    제주: 'JEJU',
    성산: 'SEONGSAN',
    서귀포: 'SEOGWIPO',
  } as const;

  const area = useRecoilValue(areaAtom) || '성산';
  const marineCollections = useRecoilValue(marineCollectionsAtom);

  const { isLoading, data } = useHaeruPlaces({
    area: AREA[area],
    marineCollections,
  });
  if (!data || isLoading) return null;
  const { haeruPlaces, recommendPlaces } = data;
  const isEmpty = haeruPlaces === null;

  return (
    <HaeruPlacesSectionWrapperStyle>
      <LogoStyle>
        <img height={20} src="/images/text_logo.png" alt={'로고 이미지'} />
      </LogoStyle>
      <HaeruPlaceTitle
        isEmpty={isEmpty}
        area={area}
        marineCollections={marineCollections}
      />
      <MapIllustration places={haeruPlaces || recommendPlaces} />
      <HaeruPlaceList
        places={haeruPlaces || recommendPlaces}
        isEmpty={isEmpty}
      />
    </HaeruPlacesSectionWrapperStyle>
  );
};

export default HaeruPlacesSection;
