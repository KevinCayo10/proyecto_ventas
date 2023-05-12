import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'gsv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() data!: any;
  formulario!: FormGroup;
  @Output() formularioEnviado: EventEmitter<any> = new EventEmitter();
  @Output() formularioCerrado: EventEmitter<void> = new EventEmitter<void>();
  maximo: number = 0;

  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      producto: new FormControl(this.data?.producto, Validators.required),
      stock: new FormControl(this.data?.stock, Validators.required),
    });
  }

  actualizarMaximo() {
    const productoSeleccionado = this.formulario.get('producto')?.value;
    if (!productoSeleccionado) {
      this.maximo = 0;
      return;
    }
    let registroSeleccionado = this.data.find(
      (registro: Registro) => registro.producto == productoSeleccionado
    );

    console.log(registroSeleccionado);
    if (!registroSeleccionado) {
      return;
    } else {
      console.log(registroSeleccionado.stock);
      this.maximo = registroSeleccionado.stock;
    }
  }

  grabar() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      this.formularioEnviado.emit(formData);
      this.formulario.reset();
    }
  }
  cerrarFormulario() {
    this.formularioCerrado.emit();
  }
}
interface Registro {
  _id: number;
  producto: string;
  descripcion: string;
  stock: string;
  precio: string;
}
