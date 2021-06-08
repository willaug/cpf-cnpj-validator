# Validador de CPF e CNPJ em TypeScrit

Validador de CPF e CNPJ construído em TypeScript em um ambiente Node.
Caso deseja entrar em contato:
- E-mail: william.santos315@outlook.com

## Primeiros passos
### Organização

A organização do projeto se baseia em classes que importam funções, portanto, para utilizar em um arquivo basta apenas importa-lo.

### Uso
Toda função retorna uma resposta **booleana**, sendo **true** ou **false**.
- Para verificar se um CPF é valido:
```javascript
import validator from './validator';

const cpfIsValid = validator.isCPF(12356787612); // false
```

### Funções
- **isCPF**: Verifica se valor é um CPF válido;
- **isFormattedCPF**: Verificar se o CPF está formatado (000.000.000-00) e se é válido;
- **isCNPJ**: Verifica se valor é um CNPJ válido;
- **isFormattedCNPJ**: Verificar se o CNPJ está formatado (00.000.000/0000-00) e se é válido;

## Instalação
### Pré-requisitos

Para o projeto ser executado, é necessário ter o NodeJS (De preferência a versão LTS mais recente) instalado em sua máquina.

### Preparando o ambiente
**Baixando repositório**
```bash
$ git clone https://github.com/willaug/cpf-cnpj-validator.git
$ cd cpf-cnpj-validator
```

**Dependências**
```bash
$ yarn
``` 
ou
```
$ npm i
```

### Testes
Há dois arquivos de teste, um para CPF e outro para CNPJ na pasta `__tests__`. Para testa-los, você pode executar dois scripts prontos, sendo eles:
```javascript
$ yarn test-cpf // Testar CPF
``` 
```javascript
$ yarn test-cnpj // Testar CNPJ
```

### Produção
Por se tratar de TypeScript, o ambiente Node por sí só não consegue interpreta-lo. Portanto, será utilizado o Babel para gerar arquivos JS no diretório **dist** na pasta raíz. Para utiliza-lo:
```bash
$ yarn build
```

## Ferramentas
- NodeJS;
- JavaScript (Produção);
- TypeScript;
- Babel;
- Jest;
- ESLint (Airbnb).