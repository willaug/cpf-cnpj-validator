import validateCNPJ from './cnpj';

export default function CNPJformat(cnpj: unknown): boolean {
  if (typeof cnpj !== 'string') {
    return false;
  }

  if (cnpj.length !== 18) return false;
  if (cnpj[2] !== '.') return false;
  if (cnpj[6] !== '.') return false;
  if (cnpj[10] !== '/') return false;
  if (cnpj[15] !== '-') return false;

  return validateCNPJ(cnpj);
}
