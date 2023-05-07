import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ContainerComponent } from './components/container/container.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TitleComponent,
    TableComponent,
    ContainerComponent,
    PaginatorComponent,
    KeypadButtonComponent,
  ],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  exports: [
    TitleComponent,
    TableComponent,
    MatTableModule,
    ContainerComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    KeypadButtonComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
