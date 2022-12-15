export type HaeruPlaceDetailResponseDataType = {
  name: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  marineCollections: {
    name: string;
    imageUrl: string;
  }[];
  startTime: string;
  endTime: string;
};
