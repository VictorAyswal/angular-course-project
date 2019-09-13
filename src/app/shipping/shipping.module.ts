import { NgModule } from '@angular/core';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingContainerComponent } from './shipping-container/shipping-container.component';
import { ShippingItemComponent } from './component/shipping-item/shipping-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShippingContainerComponent,
    ShippingItemComponent
  ],
  imports: [
    SharedModule,
    ShippingRoutingModule
  ]
})
export class ShippingModule { }
