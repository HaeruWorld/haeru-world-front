export type HaeruPlace = {
  id: number;
  name: string;
  marineCollections: MarineCollectionType[];
  address: string;
  markerPosition: {
    x: number;
    y: number;
  };
};

export type MarineCollectionType =
  | '보말'
  | '게'
  | '소라'
  | '미역'
  | '조개'
  | '톳';

export type AreaType = '애월' | '제주' | '성산' | '서귀포';
