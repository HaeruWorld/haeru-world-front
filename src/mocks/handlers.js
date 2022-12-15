import { rest } from 'msw';
import mockHaeruPlaces from './mockData/haeruPlaces';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const handlers = [
  rest.get(`${baseUrl}/api/haeruPlaces`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockHaeruPlaces));
  }),
];
