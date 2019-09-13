import { NgModule } from '@angular/core';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { CartFormComponent } from './component/cart-form/cart-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CartContainerComponent,
    CartItemComponent,
    CartFormComponent
  ],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
