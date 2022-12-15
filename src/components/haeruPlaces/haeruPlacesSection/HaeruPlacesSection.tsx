import useHaeruPlaces from '@/hooks/queries/useHaeruPlaces';

import HaeruPlaceList from '../haeruPlacesList/HaeruPlaceList';
import MapIllustration from '../mapIllustration/MapIllustration';

import { HaeruPlaceTitleStyle, HaeruPlacesSectionWrapperStyle } from './style';

const HaeruPlacesSection = () => {
  const { isLoading, data } = useHaeruPlaces({
    area: '성산',
    marineCollections: ['게'],
  });
  if (!data || isLoading) return null;

  const { haeruPlaces, recommendPlaces } = data;
  const HaeruPlaceListTitle = `“성산”에서 “보말, 게, 소라, 미역, 조개, 톳”을
  해루질하는 장소를 찾아봤어요.`;

  const RecommendPlaceTitle = `“성산”에서 “보말, 게, 소라, 미역, 조개, 톳”을
  해루질하는 장소를 찾지 못했어요.`;

  const isEmpty = haeruPlaces === null;

  return (
    <HaeruPlacesSectionWrapperStyle>
      <HaeruPlaceTitleStyle>
        {isEmpty ? RecommendPlaceTitle : HaeruPlaceListTitle}
      </HaeruPlaceTitleStyle>
      <MapIllustration />
      <HaeruPlaceList places={haeruPlaces || recommendPlaces} />
    </HaeruPlacesSectionWrapperStyle>
  );
};

export default HaeruPlacesSection;
