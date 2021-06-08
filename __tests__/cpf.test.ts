import validator from '../src/validator';

describe('CPF', () => {
  it('Deve ser numérico ou string', () => {
    const value = 12345678909;
    expect(validator.isCPF(value)).toEqual(true);
  });

  it('Deve possuir 11 caracteres (Excluindo caracteres especiais)', () => {
    const value = '123.456.789-13';
    expect(validator.isCPF(value)).toEqual(true);
  });
});
