// Record
const objeto1: Record<string, string | number> = {
  nome: 'joelson',
  sobrenome: 'fernandes',
  idade: 26,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string,
  sobrenome?: string,
  idade?: number,
}

// Required
type PessoaRequired = Required<PessoaProtocol>

// Partial
type PessoaPartial = Partial<PessoaProtocol>

// Readonly
type PessoaReadonly = Readonly<PessoaProtocol>

// pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>

const objeto2: PessoaRequired = {
  nome: 'joelson',
  sobrenome: 'fernandes',
  idade: 26,
};

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
}

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
}

const accountMongo: AccountMongo = {
  _id: 'asdas-ndfgbzm',
  nome: 'Joelson',
  idade: 26,
};

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongo);
console.log(accountAPI);

// module mode
export default 1;
