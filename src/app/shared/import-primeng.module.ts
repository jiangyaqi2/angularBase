import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/primeng';
import { SharedModule } from "./shared.module";
@NgModule({
    imports: [
        AccordionModule,
        // SharedModule
    ],
    exports: [AccordionModule],
    // declarations: [AccordionModule]
})
export class ImportPrimengModule { }
