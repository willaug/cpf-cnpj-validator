import validateCPF from './validations/cpf';

export default class Validator {
  public static isCPF(cpf: unknown): boolean {
    return validateCPF(cpf);
  }
}
