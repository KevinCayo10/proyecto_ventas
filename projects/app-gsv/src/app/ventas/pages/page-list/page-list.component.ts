import { Component, OnInit } from '@angular/core';
import { PageListComponent as ProductoComponent } from '../../../productos/pages/page-list/page-list.component';
import { PageListComponent as ClienteComponent } from '../../../clientes/pages/page-list/page-list.component';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { environment } from '../../../environments/environment';
import { ProductoService } from '../../../productos/services/producto.service';
import { Producto } from '../../../productos/models/productos.model';

@Component({
  selector: 'gsv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  registrosProducto: any[] = [
    {
      _id: 1,
      producto: 'Laptop HP 15-dy27wm',
      descripcion: 'i7 10Gen, 8ram, 15.6, 256ssd',
      stock: '12',
      precio: '740',
    },
  ];

  registrosCliente!: any;

  registros: any[] = [];

  metaDataColumns: MetaDataColumn[] = [
    // { field: '_id', title: 'ID' },
    { field: 'producto', title: 'PRODUCTO' },
    { field: 'cantidad', title: 'CANTIDAD' },
    { field: 'subtotal', title: 'SUBTOTAL' },
  ];

  //  ngOnInit(): void {
  // this.registrosProducto = this.productoComponent.registros;
  //this.registrosCliente = this.clienteComponent.registros;
  //console.log(this.registrosCliente);
  // }

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(private productoService: ProductoService) {
    this.cargarRegistroProducto();
    this.cargarRegistroVenta();
  }

  cargarRegistroProducto() {
    this.productoService.cargarProductos().subscribe((dataWeb) => {
      this.registrosProducto = dataWeb;
      console.log('Registro producto', this.registrosProducto); // imprime los registros correctamente
    });
  }

  cargarRegistroVenta() {
    this.data = this.registros;
    this.totalRegistros = this.data.length;
    this.changePage(0);
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const salto = pageSize * page;
    this.data = this.registros.slice(salto, salto + pageSize);
  }

  // Metodo para guardar el registro de la factura
  grabarFormulario(formData: any) {
    const venta = {
      producto: formData.producto,
      cantidad: formData.cantidad,
      subtotal: formData.precio * formData.cantidad,
    };

    const producto = {
      producto: formData.producto,
      descripcion: formData.descripcion,
      stock: formData.stock - formData.cantidad,
      precio: formData.precio,
    };
    console.log(venta);
    this.actualizarRegistroProducto(formData._id, producto);
    this.registros.push(venta);
    this.cargarRegistroVenta();
  }

  actualizarRegistroProducto(id: string, producto: any) {
    this.productoService.actualizarProducto(id, producto).subscribe(() => {
      this.cargarRegistroProducto();
    });
  }
}

interface Registro {
  _id: number;
  producto: string;
  stock: number;
  precio: number;
}
