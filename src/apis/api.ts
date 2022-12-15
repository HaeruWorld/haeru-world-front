import { HaeruPlace, MarineCollectionType } from '@/types';
import superFetch from './superFetch';

const api = {
  // 해루질 할 수 있는 장소 상세 페이지 요청 API
  getHaeruPlaceDetail: async (id: number) => {
    return superFetch.get(`/haeruPlaces/${id}`);
  },
  getHaeruPlaces: async (params: GetHaeruPlaceParams) => {
    return superFetch.get<GetHaeruPlaceResponse>(`/haeruPlaces`, { params });
  },
};
type GetHaeruPlaceResponse =
  | {
      haeruPlaces: HaeruPlace[];
      recommendPlaces: null;
    }
  | {
      haeruPlaces: null;
      recommendPlaces: HaeruPlace[];
    };

export type GetHaeruPlaceParams = {
  area: string;
  marineCollections: MarineCollectionType[];
};

export default api;
