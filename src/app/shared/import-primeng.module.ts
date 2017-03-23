import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule ,CheckboxModule} from 'primeng/primeng';
import { SharedModule } from "./shared.module";
@NgModule({
    imports: [
        AccordionModule,CheckboxModule
        // SharedModule
    ],
    exports: [AccordionModule,CheckboxModule],
    // declarations: [SharedModule]
})
export class ImportPrimengModule { }
