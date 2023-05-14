export class Producto {
  _id?: string;
  producto?: string;
  descripcion?: string;
  stock?: number;
  precio?: number;

  constructor(
    producto?: string,
    descripcion?: string,
    stock?: number,
    precio?: number
  ) {
    this.producto = producto;
    this.descripcion = descripcion;
    this.stock = stock;
    this.precio = precio;
  }
}
