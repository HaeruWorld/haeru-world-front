export type HaeruPlace = {
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
