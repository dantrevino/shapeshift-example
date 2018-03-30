import request from 'supertest';

const url = 'https://shapeshift.io';
const pair = 'btc_ltc';

describe('Rate', () => {
  test('error for invalid pair', () => {
    return (
      request(url)
      .get('/rate/invalid_pair')
      .then((res) => {
        expect(res.body.error).toBe('Unknown pair');
      })
    )
  });

  test('displays rate array', () => {
    return (
      request(url)
      .get(`/rate`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
      })
    )
  });

  test('displays rate for valid pair', () => {
    return (
      request(url)
      .get(`/rate/${pair}`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.pair).toBe(pair);
        expect(res.body.rate.length).not.toBe(0);
        expect(parseFloat(res.body.rate)).toBeGreaterThan(0);
      })
    )
  });
});
