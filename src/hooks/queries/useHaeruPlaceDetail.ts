import { useQuery } from '@tanstack/react-query';
import api from '@/apis/api';
import getQueryKey from '@/utils/queries/getQueryKeys';
import { UseQueryResult } from '@tanstack/react-query/src/types';
import { AxiosError } from 'axios';
import { HaeruPlaceDetailResponseDataType } from '@/components/HaeruPlacesDetail/types';

const useHaeruPlaceDetail = (
  id: number,
  options?: any,
): UseQueryResult<HaeruPlaceDetailResponseDataType, AxiosError> => {
  return useQuery(
    getQueryKey('HAERU_PLACES_DETAIL', id),
    () => {
      return api.getHaeruPlaceDetail(id);
    },
    {
      ...options,
      select: (data) => data.data,
    },
  );
};

export default useHaeruPlaceDetail;
