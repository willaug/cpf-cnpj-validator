import validator from '../src/validator';

describe('CPF', () => {
  it('should exist', () => {
    expect(validator.isCPF()).toEqual(true);
  });
});
