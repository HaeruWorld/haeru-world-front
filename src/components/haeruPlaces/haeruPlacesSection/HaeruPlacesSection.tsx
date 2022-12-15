import useHaeruPlaces from '@/hooks/queries/useHaeruPlaces';

import HaeruPlaceList from '../haeruPlacesList/HaeruPlaceList';
import MapIllustration from '../mapIllustration/MapIllustration';

import { HaeruPlaceTitleStyle, HaeruPlacesSectionWrapperStyle } from './style';

const HaeruPlacesSection = () => {
  const AREA = {
    애월: 'AEWOL',
    제주: 'JEJU',
    성산: 'SEONGSAN',
    서귀포: 'SEOGWIPO',
  } as const;

  const area = '애월';
  const marineCollections = ['게'];

  const { isLoading, data } = useHaeruPlaces({
    area: AREA[area],
    marineCollections: ['게'],
  });
  if (!data || isLoading) return null;

  const { haeruPlaces, recommendPlaces } = data;
  const HaeruPlaceListTitle = `"${area}" 에서 “${marineCollections.join(',')}”을
  해루질하는 장소를 찾아봤어요.`;

  const RecommendPlaceTitle = `"${area}" 에서 “${marineCollections.join(',')}”을
  해루질하는 장소를 찾지 못했어요.`;

  const isEmpty = haeruPlaces === null;

  return (
    <HaeruPlacesSectionWrapperStyle>
      <HaeruPlaceTitleStyle>
        {isEmpty ? RecommendPlaceTitle : HaeruPlaceListTitle}
      </HaeruPlaceTitleStyle>
      <MapIllustration places={haeruPlaces || recommendPlaces} />
      <HaeruPlaceList places={haeruPlaces || recommendPlaces} />
    </HaeruPlacesSectionWrapperStyle>
  );
};

export default HaeruPlacesSection;
