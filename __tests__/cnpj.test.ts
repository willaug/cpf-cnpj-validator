import validator from '../src/validator';

describe('CNPJ', () => {
  it('Deve ser numérico ou string', () => {
    const value = 50759182000157;
    expect(validator.isCNPJ(value)).toEqual(true);
  });

  it('Deve possuir 14 caracteres (Excluindo caracteres especiais)', () => {
    const value = '65.759.010/0001-50';
    expect(validator.isCNPJ(value)).toEqual(true);
  });

  it('Deve ser validado em todas as tentativas', () => {
    const value = '11.444.777/0001-61';
    expect(validator.isCNPJ(value)).toEqual(true);
  });
});
