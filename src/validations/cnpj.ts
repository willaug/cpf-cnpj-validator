const validateCNPJ = (cnpj: unknown): boolean => {
  if (typeof cnpj !== 'string' && typeof cnpj !== 'number') {
    return false;
  }

  return true;
};

export default validateCNPJ;
