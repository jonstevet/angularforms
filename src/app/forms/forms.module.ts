import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { Basicform1Component } from './pages/basicform1/basicform1.component';
import { BasicformComponent } from './pages/basicform1/components/basicform/basicform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    Basicform1Component,
    BasicformComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
