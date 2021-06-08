import validator from '../src/validator';

describe('CPF', () => {
  it('Se o valor é numérico ou uma string', () => {
    const value = 123;
    expect(validator.isCPF(value)).toEqual(true);
  });
});
