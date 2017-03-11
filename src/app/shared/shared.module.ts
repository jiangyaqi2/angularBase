import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportPrimengModule } from "./import-primeng.module";

@NgModule({
  imports: [
    CommonModule,
    ImportPrimengModule
  ],
  exports:[ImportPrimengModule],
  declarations: []
})
export class SharedModule { }
