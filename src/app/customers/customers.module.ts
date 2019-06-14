import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerCardComponent } from './customer-card.component';
import { CustomerGridComponent } from './customer-grid.component';
import { OrdersModule } from '../orders/orders.module';
import { CustomersRoutingModule } from './customerrouting.module';




@NgModule({
  declarations: [CustomersComponent,CustomerCardComponent, CustomerGridComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
