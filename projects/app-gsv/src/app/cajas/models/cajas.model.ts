export class Caja {
  _id?: string;
  cliente?: string;
  vendedor?: string;
  total?: number;

  constructor(cliente?: string, vendedor?: string, total?: number) {
    this.cliente = cliente;
    this.vendedor = vendedor;
    this.total = total;
  }
}
