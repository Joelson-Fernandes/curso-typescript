// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'ixi não existe data');
