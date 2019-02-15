import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomcolumnComponent } from './customcolumn/customcolumn.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomcolumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CustomcolumnComponent]

})
export class AppModule { }
