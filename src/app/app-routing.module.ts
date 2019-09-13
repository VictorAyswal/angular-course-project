import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'shipping', loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule) }
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
