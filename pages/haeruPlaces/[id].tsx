import React from 'react';
import useHaeruPlaceDetail from '@/hooks/queries/useHaeruPlaceDetail';
import { GetServerSideProps } from 'next';
import HaeruPlacesMap from '@/components/HaeruPlacesDetail/HaeruPlacesMap';
import HaeruPlacesMarineCollection from '@/components/HaeruPlacesDetail/HaeruPlacesMarineCollection';
import HaeruPlacesTime from '@/components/HaeruPlacesDetail/HaeruPlacesTime';
import HaeruNotice from '@/components/HaeruPlacesDetail/HaeruNotice';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import api from '@/apis/api';
import styled from 'styled-components';

const HaeruPlaceDetail = (props: any) => {
  const { data } = useHaeruPlaceDetail(
    props.dehydratedState.queries[0].queryKey[1],
  );

  if (!data) return null;

  const { name, address, location, marineCollections, startTime, endTime } =
    data;

  return (
    <HaeruPlacesWrapperStyle>
      <HaeruPlacesTime name={name} startTime={startTime} endTime={endTime} />
      <HaeruPlacesMarineCollection marineCollections={marineCollections} />
      <HaeruPlacesMap location={location} address={address} />
      <HaeruNotice />
    </HaeruPlacesWrapperStyle>
  );
};
const HaeruPlacesWrapperStyle = styled.div`
  padding: 0 20px;
`;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const id: number | null = Number(context.params?.id);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['HAERU_PLACES_DETAIL', id], () =>
    api.getHaeruPlaceDetail(id),
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HaeruPlaceDetail;
