import validator from '../src/validator';

describe('CPF', () => {
  it('Deve ser numérico ou string', () => {
    const value = 12345678909;
    expect(validator.isCPF(value)).toEqual(true);
  });

  it('Deve possuir 11 caracteres (Excluindo caracteres especiais)', () => {
    const value = '926.412.310-50';
    expect(validator.isCPF(value)).toEqual(true);
  });

  it('Deve ser validado em uma das tentativas', () => {
    const value = '502.597.100-40';
    expect(validator.isCPF(value)).toEqual(true);
  });
});
