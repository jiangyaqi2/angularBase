import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SNavComponent } from './s-nav/s-nav.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,SharedModule
  ],
  declarations: [SNavComponent],
  exports:[SNavComponent]
})
export class SystemModule { }
