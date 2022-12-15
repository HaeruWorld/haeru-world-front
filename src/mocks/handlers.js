import { rest } from 'msw';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const handlers = [
  rest.get(`${baseUrl}/haeruPlaces/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'test',
        address: 'test 주소',
        location: {
          latitude: 33.55635,
          longitude: 126.795841,
        },
        marineCollections: [
          {
            name: 'test marine',
            imageUrl:
              'https://cdn.amondz.com/product/75657/resize/mainImg/PSI_800916.jpeg?v=1666860431292',
          },
          {
            name: 'test marine2',
            imageUrl:
              'https://cdn.amondz.com/product/75657/resize/mainImg/PSI_800916.jpeg?v=1666860431292',
          },
        ],
        startTime: '12:00',
        endTime: '17:00',
      }),
    );
  }),
];
