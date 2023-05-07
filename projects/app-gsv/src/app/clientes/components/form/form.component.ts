import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'gsv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  titulo = '';
  formulario!: FormGroup;

  constructor(
    private referencia: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.titulo = data ? 'EDICION' : 'NUEVO';
  }

  ngOnInit(): void {
    this.cargarFormulario();
  }

  grabar() {
    const record = this.formulario.value;
    this.referencia.close(record);
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      id: new FormControl(this.data?._id),
      nombresCompletos: new FormControl(
        this.data?.nombresCompletos,
        Validators.required
      ),
      direccion: new FormControl(this.data?.direccion, Validators.required),
      fechaNacimiento: new FormControl(
        this.data?.fechaNacimiento,
        Validators.required
      ),
      celular: new FormControl(this.data?.celular),
    });
  }

  cerrarModal() {
    this.referencia.close();
  }
}
