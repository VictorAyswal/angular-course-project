import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TopBarComponent } from './layout/top-bar/top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HttpClientModule, TopBarComponent]
})
export class CoreModule { }
