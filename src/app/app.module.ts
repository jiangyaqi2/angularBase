import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule ,BrowserXhr} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SystemModule } from "./system/system.module";
import { SharedModule } from "./shared/shared.module";
import{ NgProgressModule,NgProgressCustomBrowserXhr} from "ng2-progressbar";
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SystemModule,
    SharedModule,
    NgProgressModule,
    RouterModule.forRoot([
      {path: '', component: DemoComponent},
      {path: 'demo', component: DemoComponent}
    ])
  ],
  providers: [
    {provide:BrowserXhr,useClass:NgProgressCustomBrowserXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
