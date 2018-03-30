import request from 'supertest';

const url = 'https://shapeshift.io';
const pair = 'btc_ltc';

describe('Market Info', () => {
  test('error for invalid pair', () => {
    return (
      request(url)
      .get('/marketinfo/invalid_pair')
      .then((res) => {
        expect(res.body.error).toBe('Unknown pair');
      })
    )
  });

  test('displays market info array', () => {
    return (
      request(url)
      .get(`/marketinfo`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
      })
    )
  });

  test('displays market info for valid pair', () => {
    return (
      request(url)
      .get(`/marketinfo/${pair}`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.pair).toBe(pair);

        expect(res.body.rate.length).not.toBe(0);
        expect(res.body.rate).toBeGreaterThan(0);

        expect(res.body.limit.length).not.toBe(0);
        expect(res.body.limit).toBeGreaterThan(0);

        expect(res.body.minimum.length).not.toBe(0);
        expect(res.body.minimum).toBeGreaterThan(0);

        expect(res.body.minerFee.length).not.toBe(0);
        expect(res.body.minerFee).toBeGreaterThan(0);

        expect(res.body.maxLimit.length).not.toBe(0);
        expect(res.body.maxLimit).toBeGreaterThan(0);
      })
    )
  });
});
