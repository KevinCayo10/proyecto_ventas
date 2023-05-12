import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';

import { SaleTableComponent } from './components/sale-table/sale-table.component';

@NgModule({
  declarations: [PageListComponent, FormComponent, SaleTableComponent],
  imports: [CommonModule, VentasRoutingModule, SharedModule],
  exports: [SaleTableComponent],
})
export class VentasModule {}
