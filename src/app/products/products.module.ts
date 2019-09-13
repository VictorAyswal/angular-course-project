import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductDetailContainerComponent } from './product-detail-container/product-detail-container.component';
import { ProductComponent } from './component/product/product.component';
import { ProductAlertsComponent } from './component/product-alerts/product-alerts.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductDetailContainerComponent,
    ProductComponent,
    ProductAlertsComponent,
    ProductItemComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
