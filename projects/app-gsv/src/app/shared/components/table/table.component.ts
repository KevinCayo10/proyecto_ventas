import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metadatacolumn.interface';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { FormComponent as formComponentCliente } from '../../../clientes/components/form/form.component';
import { FormComponent as FormComponentProducto } from '../../../productos/components/form/form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'gsv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  @Input() title: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickEliminar: EventEmitter<any> = new EventEmitter<any>();

  formComponentCliente!: formComponentCliente;
  formComponentProducto!: FormComponentProducto;

  columns: string[] = [];

  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((x) => x.field);
    }
  }

  accionEditar(row: any) {
    this.onClick.emit(row);
  }

  accionEliminar(id: any) {
    if (confirm('¿Está seguro que desea eliminar este elemento?')) {
      this.onClickEliminar.emit(id);
      return;
    }
    return;
  }
}
