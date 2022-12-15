
export type HaeruPlaceItemProps = HaeruPlaceMini & {
  makerIndex: number,
}

type HaeruPlaceMini = {
  name : string,
  marineCollections : MarineCollectionType[]
}
type MarineCollectionType = "보말"|"게"|"소라"|"미역"|"조개"|"톳"