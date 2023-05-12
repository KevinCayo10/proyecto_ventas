import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { KeypadButton } from '../../../shared/interfaces/keypadButton.interface';
@Component({
  selector: 'gsv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  registros: any[] = [
    {
      _id: 1,
      producto: 'Laptop HP 15-dy27wm',
      descripcion: 'i7 10Gen, 8ram, 15.6, 256ssd',
      stock: '12',
      precio: '740',
    },
    {
      _id: 2,
      producto: 'Laptop Asus VivaBook M415DA',
      descripcion: 'AMD Ryzen 5, 8ram, 15.6, 256ssd',
      stock: '5',
      precio: '700',
    },
    {
      _id: 3,
      producto: 'iPad Apple A223',
      descripcion: ' 10th Gen, 2022, 256GB',
      stock: '15',
      precio: '350',
    },
    {
      _id: 4,
      producto: 'Tablet Amazon Fire 8',
      descripcion: '10th Gen, 2ram, 8.5, 32GB',
      stock: '15',
      precio: '350',
    },
    {
      _id: 5,
      producto: 'PC Gamer Xeon 12',
      descripcion: 'i7 10Gen, 16ram, 256ssd, RTX3060',
      stock: '15',
      precio: '1100',
    },
    {
      _id: 6,
      producto: 'CPU Azus Row 1 ',
      descripcion: 'i7 12Gen, 32ram,  512ssd, RTX3060',
      stock: '15',
      precio: '1350',
    },
    {
      _id: 7,
      producto: 'Laptop Dell G5',
      descripcion: 'i7 11Gen, 16ram, 15.6, 512ssd',
      stock: '15',
      precio: '990',
    },
    {
      _id: 8,
      producto: 'Laptop Legion 5',
      descripcion: 'i7 12Gen, 8ram, 15.6, 256ssd',
      stock: '15',
      precio: '950',
    },
  ];
  title: string = 'PRODUCTOS';
  // El formulario es para poder abrir o cerrar el componente form
  formulario!: boolean;

  fila!: any;

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'ID' },
    { field: 'producto', title: 'PRODUCTO' },
    { field: 'descripcion', title: 'DESCRIPCIÓN' },
    { field: 'stock', title: 'STOCK' },
    { field: 'precio', title: 'PRECIO' },
  ];

  keypadButtons: KeypadButton[] = [
    {
      icon: 'fa-solid fa-cloud-arrow-down',
      color: 'btn-success',
      accion: 'download',
    },
    { icon: 'fa-solid fa-plus', color: 'btn-primary', accion: 'NUEVO' },
  ];

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

  enviarAccion(accion: string) {
    switch (accion) {
      case 'DOWNLOAD':
        break;
      case 'NUEVO':
        this.formulario = true;
        this.abrirFormulario();
        break;
    }
  }

  accionEditar(row: any) {
    this.formulario = true;
    console.log(row);
    this.abrirFormulario(row);
  }
  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const salto = pageSize * page;
    this.data = this.registros.slice(salto, salto + pageSize);
  }

  grabarFormulario(formData: any) {
    if (!formData) {
      this.formulario = false;
      return;
    }
    if (formData.id) {
      const cliente = { ...formData, _id: formData.id };
      console.log('Entro al ID');
      console.log(cliente);
      const index = this.registros.findIndex(
        (registro) => registro._id === formData.id
      );
      console.log('index');
      console.log(index);
      if (index !== -1) {
        this.registros[index] = cliente;
      }
      this.formulario = false;
    } else {
      const ultimoRegistro = this.registros.pop();
      console.log(ultimoRegistro);
      const id = ultimoRegistro._id + 1;
      const cliente = { ...formData, _id: id };
      this.registros.push(cliente);
      this.formulario = false;
    }
  }

  abrirFormulario(fila: any = null) {
    console.log('entro al abrir formulario producto');
    this.fila = fila;
  }

  cerrarFormulario() {
    this.formulario = false;
  }
}
