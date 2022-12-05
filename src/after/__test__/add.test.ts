import add from '../after';

describe('add', () => {
  it('pass two numbers', () => {
    expect(add(6, 4)).toBe(10);
  });
});
