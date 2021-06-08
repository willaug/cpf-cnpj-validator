export default function validateCPF(cpf: unknown): boolean {
  if (typeof cpf !== 'string' && typeof cpf !== 'number') {
    return false;
  }

  let filteredCPF = String(cpf);
  filteredCPF = filteredCPF.replace(/\.|-/g, '');

  let numCPF: number = parseInt(filteredCPF, 10);

  return true;
}
