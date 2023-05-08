import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metadatacolumn.interface';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { FormComponent as formComponentCliente } from '../../../clientes/components/form/form.component';
import { FormComponent as FormComponentProducto } from '../../../productos/components/form/form.component';

@Component({
  selector: 'gsv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  @Input() title: any;
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

  abrirFormulario(row: any) {
    switch (this.title) {
      case 'CLIENTE':
        this.formComponentCliente = new formComponentCliente();
        this.formComponentCliente.cargarFormulario();
        break;
      case 'PRODUCTO':
        break;

      default:
        break;
    }
  }
}
