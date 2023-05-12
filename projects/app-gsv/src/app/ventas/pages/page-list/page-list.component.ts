import { Component, OnInit } from '@angular/core';
import { PageListComponent as ProductoComponent } from '../../../productos/pages/page-list/page-list.component';
import { PageListComponent as ClienteComponent } from '../../../clientes/pages/page-list/page-list.component';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'gsv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  productoComponent = new ProductoComponent();
  clienteComponent = new ClienteComponent();
  registrosProducto!: any;
  registrosCliente!: any;

  registros: any[] = [
    {
      _id: '1',
      producto: 'Laptop HP',
      stock: 5,
      subtotal: 500,
    },
    {
      _id: '2',
      producto: 'Laptop HP',
      stock: 5,
      subtotal: 500,
    },
    {
      _id: '3',
      producto: 'Laptop HP',
      stock: 5,
      subtotal: 500,
    },
  ];

  metaDataColumns: MetaDataColumn[] = [
    // { field: '_id', title: 'ID' },
    { field: 'producto', title: 'PRODUCTO' },
    { field: 'stock', title: 'CANTIDAD' },
    { field: 'subtotal', title: 'SUBTOTAL' },
  ];

  ngOnInit(): void {
    this.registrosProducto = this.productoComponent.registros;
    this.registrosCliente = this.clienteComponent.registros;
    console.log(this.registrosCliente);
  }

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(/*private dialog: MatDialog*/) {
    this.cargarClientes();
  }
  cargarClientes() {
    this.data = this.registros;
    this.totalRegistros = this.data.length;
    this.changePage(0);
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const salto = pageSize * page;
    this.data = this.registros.slice(salto, salto + pageSize);
  }

  grabarFormulario(formData: any) {
    // console.log(formData);
    const obtenerData = this.obtenerVenta(formData);
    //Calcular subtotal

    const venta = {
      ...formData,
      subtotal: obtenerData.precio * formData.stock,
    };
    console.log(venta);
    this.registros.push(venta);
  }

  obtenerVenta(formData: any) {
    const obtenerData = this.registrosProducto.find(
      (registro: Registro) => registro.producto === formData.producto
    );
    return obtenerData;
  }
}
interface Registro {
  _id: number;
  producto: string;
  stock: number;
  precio: number;
}
