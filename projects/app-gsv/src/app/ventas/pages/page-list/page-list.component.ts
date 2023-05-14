import { Component, OnInit } from '@angular/core';
import { PageListComponent as ProductoComponent } from '../../../productos/pages/page-list/page-list.component';
import { PageListComponent as ClienteComponent } from '../../../clientes/pages/page-list/page-list.component';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { environment } from '../../../environments/environment';
import { ProductoService } from '../../../productos/services/producto.service';
import { Producto } from '../../../productos/models/productos.model';
import { ClienteService } from '../../../clientes/services/cliente.service';
import { VendedorService } from '../../../vendedores/services/vendedor.service';
import { CajaService } from '../../../cajas/services/caja.service';

@Component({
  selector: 'gsv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  //Registros
  registrosProducto: any[] = [];
  registrosClientes: any[] = [];
  registrosVendedores: any[] = [];
  registros: any[] = [];

  metaDataColumns: MetaDataColumn[] = [
    // { field: '_id', title: 'ID' },
    { field: 'producto', title: 'PRODUCTO' },
    { field: 'cantidad', title: 'CANTIDAD' },
    { field: 'subtotal', title: 'SUBTOTAL' },
  ];

  data: any[] = [];
  totalRegistros = this.data.length;
  registroUsuarioVenta!: any;

  constructor(
    private productoService: ProductoService,
    private clienteService: ClienteService,
    private vendedorService: VendedorService,
    private cajaService: CajaService
  ) {
    this.cargarRegistroProducto();
    this.cargarRegistroVenta();
    this.cargarRegistroVendedor();
    this.cargarRegistroCliente();
  }
  cargarRegistroVendedor() {
    this.vendedorService.cargarVendedores().subscribe((dataWeb) => {
      this.registrosVendedores = dataWeb;
    });
  }
  cargarRegistroCliente() {
    this.clienteService.cargarClientes().subscribe((dataWeb) => {
      this.registrosClientes = dataWeb;
    });
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

  grabarUserRegister(formData: any) {
    this.registroUsuarioVenta = formData;
    console.log(this.registroUsuarioVenta);
  }
  setVenta() {
    this.registrarVenta(this.registroUsuarioVenta, this.registros);
  }

  registrarVenta(userRegister: any, registroVenta: any) {
    //Obtener el total venta. Sumatoria de todo el subtotal
    let totalSubtotal = this.registros.reduce((total, registro) => {
      return total + registro.subtotal;
    }, 0);
    console.log(totalSubtotal);

    const caja = {
      cliente: this.registroUsuarioVenta.cliente,
      vendedor: this.registroUsuarioVenta.vendedor,
      total: totalSubtotal,
    };
    this.cajaService.registrarCaja(caja).subscribe(() => {
      this.registros = [];
    });
  }
}

interface Registro {
  _id: number;
  producto: string;
  stock: number;
  precio: number;
}
