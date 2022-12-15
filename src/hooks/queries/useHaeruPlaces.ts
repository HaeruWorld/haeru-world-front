import api, { GetHaeruPlaceParams } from '@/apis/api';
import getQueryKey from '@/utils/queries/getQueryKeys';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

const useHaeruPlaces = (params: GetHaeruPlaceParams) => {
  return useQuery(
    getQueryKey('HAERU_PLACES', params),
    () => api.getHaeruPlaces(params),
    {
      select: (data) => {
        return data.data.data;
      },
    },
  );
};

export default useHaeruPlaces;
