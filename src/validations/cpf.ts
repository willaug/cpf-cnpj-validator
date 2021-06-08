const firstTry = (arr: number[]) => {
  let sum = 0;
  let factor = 10;

  for (let i = 0; i < 9; i += 1) {
    sum += arr[i] * factor;
    factor -= 1;
  }

  return sum;
};

const validateCPF = (cpf: unknown): boolean => {
  if (typeof cpf !== 'string' && typeof cpf !== 'number') {
    return false;
  }

  let filteredCPF: string | number = String(cpf);
  filteredCPF = filteredCPF.replace(/\.|-/g, '');

  if (filteredCPF.length !== 11) {
    return false;
  }

  const arrCPF: number[] = Array.from(filteredCPF, Number);

  const repeatedNumbers: boolean = arrCPF.every((num, i, arr) => num === arr[0]);

  if (repeatedNumbers) {
    return false;
  }

  return true;
};

export default validateCPF;
