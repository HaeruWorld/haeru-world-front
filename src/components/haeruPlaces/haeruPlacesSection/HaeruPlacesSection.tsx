import useHaeruPlaces from '@/hooks/queries/useHaeruPlaces';

import HaeruPlaceList from '../haeruPlacesList/HaeruPlaceList';
import HaeruPlaceTitle from '../haeruPlaceTitle/HaeruPlaceTitle';
import MapIllustration from '../mapIllustration/MapIllustration';
import { HaeruPlacesSectionWrapperStyle } from './style';

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
  const isEmpty = haeruPlaces === null;

  return (
    <HaeruPlacesSectionWrapperStyle>
      <HaeruPlaceTitle
        isEmpty={isEmpty}
        area={area}
        marineCollections={['게']}
      />
      <MapIllustration places={haeruPlaces || recommendPlaces} />
      <HaeruPlaceList places={haeruPlaces || recommendPlaces} />
    </HaeruPlacesSectionWrapperStyle>
  );
};

export default HaeruPlacesSection;
