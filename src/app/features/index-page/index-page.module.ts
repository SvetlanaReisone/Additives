import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPageRoutingModule } from './index-page-routing.module';
import { IndexPageComponent } from './containers/index-page/index-page.component';

@NgModule({
  imports: [
    CommonModule,
    IndexPageRoutingModule
  ],
  declarations: [IndexPageComponent]
})
export class IndexPageModule { }
