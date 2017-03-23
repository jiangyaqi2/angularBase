import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportPrimengModule } from "./import-primeng.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ImportPrimengModule
  ],
  exports:[ImportPrimengModule,FormsModule],
  declarations: []
})
export class SharedModule { }
