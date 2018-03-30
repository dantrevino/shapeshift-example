import MyMath from './MyMath';

describe('MyMath', () => {
  test('add', () => {
    // Known addition
    expect(MyMath.add(1, 2)).toBe(3);

    // Random number between 0 - 99
    const randInt = Math.floor(Math.random() * 100);
    expect(MyMath.add(randInt, randInt)).toBe(randInt * 2);

    // Negative addition
    expect(MyMath.add(-12, -13)).toBe(-25);
  });

  test('sub', () => {
    // Known subtraction
    expect(MyMath.sub(3, 2)).toBe(1);

    // Random number between 0 - 99
    const randInt = Math.floor(Math.random() * 100);
    expect(MyMath.sub(randInt, randInt)).toBe(0);

    // Negative subtraction
    expect(MyMath.sub(5, 10)).toBe(-5);
  });

  test('mult', () => {
    // Known multiplication
    expect(MyMath.mult(3, 2)).toBe(6);

    // Random number between 0 - 99
    const randInt = Math.floor(Math.random() * 100);
    expect(MyMath.mult(randInt, randInt)).toBe(Math.pow(randInt, 2));

    // Negative multiplication
    expect(MyMath.mult(-5, -10)).toBe(50);
    expect(MyMath.mult(5, -10)).toBe(-50);
    expect(MyMath.mult(-5, 10)).toBe(-50);
  });

  test('div', () => {
    // Known division
    expect(MyMath.div(6, 2)).toBe(3);

    // Random number between 0 - 99
    const randInt = Math.floor(Math.random() * 100);
    expect(MyMath.div(randInt, randInt)).toBe(1);

    // Negative division
    expect(MyMath.div(50, -10)).toBe(-5);
    expect(MyMath.div(-50, 10)).toBe(-5);
    expect(MyMath.div(-50, -10)).toBe(5);
  });
});
