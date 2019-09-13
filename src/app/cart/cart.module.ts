import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { CartFormComponent } from './component/cart-form/cart-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartContainerComponent,
    CartItemComponent,
    CartFormComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
