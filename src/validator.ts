import validateCPF from './validations/cpf';
import validateCNPJ from './validations/cnpj';
import CPFformat from './validations/cpf_format';

export default class Validator {
  public static isCPF(cpf: unknown): boolean {
    return validateCPF(cpf);
  }

  public static isFormattedCPF(cpf: unknown): boolean {
    return CPFformat(cpf);
  }

  public static isCNPJ(cnpj: unknown): boolean {
    return validateCNPJ(cnpj);
  }
}
