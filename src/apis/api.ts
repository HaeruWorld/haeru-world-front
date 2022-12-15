import superFetch from './superFetch';

const api = {
  // 해루질 할 수 있는 장소 상세 페이지 요청 API
  getHaeruPlaceDetail: async (id: number) => {
    return superFetch.get(`/haeruPlaces/${id}`);
  },
};

export default api;
