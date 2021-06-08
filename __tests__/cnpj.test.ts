import validator from '../src/validator';

describe('CNPJ', () => {
  it('Deve ser numérico ou string', () => {
    const value = 123456;
    expect(validator.isCNPJ(value)).toEqual(true);
  });
});
