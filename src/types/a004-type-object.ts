const objectA: {
  readonly chaveA: string
  chaveB: string
  chaveC?: string
  [key: string]: unknown
} = {
  chaveA: 'chaveA',
  chaveB: 'chaveB',
};

objectA.chaveB = 'valorB';
objectA.chaveC = 'novo valor opcional';
objectA.chaveD = 'novo valor';
