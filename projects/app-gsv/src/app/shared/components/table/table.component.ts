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

@Component({
  selector: 'gsv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  columns: string[] = [];

  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((x) => x.field);
    }
  }
}
