import { Component } from '@angular/core';

@Component({
  selector: 'gsv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  registros: any[] = [
    {
      _id: 1,
      nombresCompletos: 'Carlos Mayorga',
      direccion: 'Av. Quito',
      fechaNacimiento: '01/01/2001',
      celular: '0999999999',
    },
    {
      _id: 2,
      nombresCompletos: 'Jorge Canseco',
      direccion: 'Av. Ambato',
      fechaNacimiento: '02/02/2002',
      celular: '0888888888',
    },
    {
      _id: 3,
      nombresCompletos: 'Bryan Torres',
      direccion: 'Av. Riobamba',
      fechaNacimiento: '03/03/2003',
      celular: '0777777777',
    },
    {
      _id: 4,
      nombresCompletos: 'Andres Nuñez',
      direccion: 'Av. Cevallos',
      fechaNacimiento: '04/04/2004',
      celular: '0666666666',
    },
    {
      _id: 2,
      nombresCompletos: 'Jorge Canseco',
      direccion: 'Av. Ambato',
      fechaNacimiento: '02/02/2002',
      celular: '0888888888',
    },
    {
      _id: 3,
      nombresCompletos: 'Bryan Torres',
      direccion: 'Av. Riobamba',
      fechaNacimiento: '03/03/2003',
      celular: '0777777777',
    },
    {
      _id: 4,
      nombresCompletos: 'Andres Nuñez',
      direccion: 'Av. Cevallos',
      fechaNacimiento: '04/04/2004',
      celular: '0666666666',
    },
    {
      _id: 2,
      nombresCompletos: 'Jorge Canseco',
      direccion: 'Av. Ambato',
      fechaNacimiento: '02/02/2002',
      celular: '0888888888',
    },
    {
      _id: 3,
      nombresCompletos: 'Bryan Torres',
      direccion: 'Av. Riobamba',
      fechaNacimiento: '03/03/2003',
      celular: '0777777777',
    },
    {
      _id: 4,
      nombresCompletos: 'Andres Nuñez',
      direccion: 'Av. Cevallos',
      fechaNacimiento: '04/04/2004',
      celular: '0666666666',
    },
    {
      _id: 2,
      nombresCompletos: 'Jorge Canseco',
      direccion: 'Av. Ambato',
      fechaNacimiento: '02/02/2002',
      celular: '0888888888',
    },
    {
      _id: 3,
      nombresCompletos: 'Bryan Torres',
      direccion: 'Av. Riobamba',
      fechaNacimiento: '03/03/2003',
      celular: '0777777777',
    },
    {
      _id: 4,
      nombresCompletos: 'Andres Nuñez',
      direccion: 'Av. Cevallos',
      fechaNacimiento: '04/04/2004',
      celular: '0666666666',
    },
  ];

  columns: { title: string; field: string }[] = [
    { title: 'ID', field: '_id' },
    { title: 'Nombres Completos', field: 'nombresCompletos' },
    { title: 'Dirección', field: 'direccion' },
    { title: 'Fecha de Nacimiento', field: 'fechaNacimiento' },
    { title: 'Celular', field: 'celular' },
  ];
}
